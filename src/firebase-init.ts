import { initializeApp } from "firebase/app";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfdmFd6pyOiEX60pCNMU86fKVAU_zC23Y",
  authDomain: "slack-clone-4941a.firebaseapp.com",
  projectId: "slack-clone-4941a",
  storageBucket: "slack-clone-4941a.appspot.com",
  messagingSenderId: "870050847762",
  appId: "1:870050847762:web:fdd03a9727d65e4e1acccb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { provider, auth, signInWithRedirect, getRedirectResult };

export default db;
