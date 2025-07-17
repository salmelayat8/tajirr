// auth-handler.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      logoutBtn.style.display = "inline-block";
    } else {
      logoutBtn.style.display = "none";
    }
  });

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      window.location.href = "index.html";
    });
  });
}
