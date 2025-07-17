// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3aTRXe4Cs8vgsaNV_3I740dv5Or2A04",
  authDomain: "tajir-9905a.firebaseapp.com",
  projectId: "tajir-9905a",
  storageBucket: "tajir-9905a.appspot.com",
  messagingSenderId: "70565559850",
  appId: "1:70565559850:web:26d5b581e30d650d7b8d53",
  measurementId: "G-97PVFF8F9Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      fullname: fullname,
      email: email,
      uid: user.uid,
      createdAt: new Date()
    });

    alert("تم التسجيل بنجاح!");
    window.location.href = "login.html"; // غيّرها إن أردت الانتقال إلى صفحة أخرى بعد التسجيل

  } catch (error) {
    alert("خطأ أثناء التسجيل: " + error.message);
  }
});
