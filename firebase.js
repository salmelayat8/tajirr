// Firebase إعداد
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// إعداد Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyBJ3aTRXe4Cs8vgsaNV_3I740dv5Or2A04",
  authDomain: "tajir-9905a.firebaseapp.com",
  projectId: "tajir-9905a",
  storageBucket: "tajir-9905a.appspot.com",
  messagingSenderId: "70565559850",
  appId: "1:70565559850:web:26d5b581e30d650d7b8d53",
  measurementId: "G-97PVFF8F9Y"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// تسجيل الدخول
const form = document.getElementById("login-form");
const errorMsg = document.getElementById("login-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html"; // عدّل الوجهة بعد الدخول
    })
    .catch((error) => {
      errorMsg.textContent = "خطأ: تأكد من المعلومات أو الحساب غير موجود.";
    });
});
