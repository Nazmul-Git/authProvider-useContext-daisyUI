// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAII4uVLfiBla-gjt3ujiPtjBbjTYDaS1M",
  authDomain: "authprovider-fb-usecontext.firebaseapp.com",
  projectId: "authprovider-fb-usecontext",
  storageBucket: "authprovider-fb-usecontext.appspot.com",
  messagingSenderId: "1028908430948",
  appId: "1:1028908430948:web:d196cdb04422c9f589d171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;