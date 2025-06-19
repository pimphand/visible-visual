import type { APIRoute } from 'astro';

export const prerender = false;
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import * as bcrypt from "bcryptjs";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDZvwu_x8J8MwSsE8-_kvJ_Z_zC4trgKPY",
  authDomain: "portofolio-697fe.firebaseapp.com",
  projectId: "portofolio-697fe",
  storageBucket: "portofolio-697fe.appspot.com",
  messagingSenderId: "199945862851",
  appId: "1:199945862851:web:c10061d6a7616dcb9dac76",
  measurementId: "G-PV02ZVQT55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const handler: APIRoute = async ({ request }) => {
  try {
    const { name, password } = await request.json();
    if (!name || !password) {
      return new Response(JSON.stringify({ error: 'Name and password required.' }), { status: 400 });
    }

    // Cek apakah user sudah ada
    const usersRef = collection(db, "Users");
    const q = query(usersRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return new Response(JSON.stringify({ error: 'User already exists.' }), { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tambah user ke Firestore
    await addDoc(usersRef, {
      name,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Registration failed.' }), { status: 500 });
  }
};

export default handler;