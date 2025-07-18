// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyboGHxgA...", // استبدلها بمفتاحك
  authDomain: "tajir-9905a.firebaseapp.com",
  projectId: "tajir-9905a",
  storageBucket: "tajir-9905a.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:xxxxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
