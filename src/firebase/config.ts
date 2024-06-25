// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbt6aLcWewLrehI1CzFZWoDdA0oy2AaLo',
  authDomain: 'astro-authentication-2ac08.firebaseapp.com',
  projectId: 'astro-authentication-2ac08',
  storageBucket: 'astro-authentication-2ac08.appspot.com',
  messagingSenderId: '35300270569',
  appId: '1:35300270569:web:2304b55a30b55eb5ddab78',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
  app,
  auth,
};
