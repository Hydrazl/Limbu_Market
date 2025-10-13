import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXqHDuekVKGg86bd9im6SxLypKaSeN9ss",
  authDomain: "fir-c98d4.firebaseapp.com",
  projectId: "fir-c98d4",
  storageBucket: "fir-c98d4.firebasestorage.app",
  messagingSenderId: "784247773933",
  appId: "1:784247773933:web:c23c09a8a2436fbb7e8ae4",
  measurementId: "G-GDQQ5709PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Provedor Google
const googleProvider = new GoogleAuthProvider();

// Função login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
      throw error;
    }
}

// Função Logout
async function Logout() {
  await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, Logout};