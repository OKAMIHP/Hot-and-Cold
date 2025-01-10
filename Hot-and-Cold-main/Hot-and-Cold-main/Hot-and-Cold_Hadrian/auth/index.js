/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

/* === Firebase Setup === */
const firebaseConfig = 
{
    apiKey: "AIzaSyAufydSjZ_Y0FeqVqyCuz3zEDOYlgXEwvM",
    authDomain: "hot-and-cold-f5abe.firebaseapp.com",
    projectId: "hot-and-cold-f5abe",
    storageBucket: "hot-and-cold-f5abe.firebasestorage.app",
    messagingSenderId: "76929975763",
    appId: "1:76929975763:web:e39f16140e2773ce615b26",
    measurementId: "G-KX0KER6DJ9"
};
const app= initializeApp(firebaseConfig)
    const auth = getAuth(app)
    console.log(auth)
console.log(app.options.projectId)
/* === UI === */

/* == UI - Elements == */
const userProfilePictureEl = document.getElementById("user-profile-picture")
const signOutButtonEl = document.getElementById("sign-out-btn")
const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)
signOutButtonEl.addEventListener("click", authSignOut)
signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

onAuthStateChanged(auth, (user) => {
    if (user) {
        showProfilePicture(userProfilePictureEl, user)
      showLoggedInView()
      const uid = user.uid;
    } else {
      showLoggedOutView()
    }
  });

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function showProfilePicture(imgElement, user) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
}
 }
 
function authSignOut() {
    const auth = getAuth();
    signOut(auth).then(() => { 
        showLoggedOutView()
        console.log("Success")
    }).catch((error) => {
        console.error(error.message)
    });
 }

 
function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    const email = emailInputEl.value
    const password= passwordInputEl.value
    console.log("Sign in with email and password")
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    showLoggedInView()
  })
  .catch((error) => {
    console.error(error.message)
  });
}


function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
    const email = emailInputEl.value
    const password= passwordInputEl.value
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    showLoggedInView()
  })
  .catch((error) => {
    console.error(error.message)
  });
}


/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideView(viewLoggedIn)
    showView(viewLoggedOut)
 }
 
 
 function showLoggedInView() {
    hideView(viewLoggedOut)
    showView(viewLoggedIn)
 }
 
 
 function showView(view) {
    view.style.display = "flex"
 }
 
 
 function hideView(view) {
    view.style.display = "none"
 }
//credit: coursera