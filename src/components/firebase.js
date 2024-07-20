import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEqtDZLUvzELEQJiHVkj_JUME4G32-y4A",
  authDomain: "gadhub-portfolio.firebaseapp.com",
  projectId: "gadhub-portfolio",
  storageBucket: "gadhub-portfolio.appspot.com",
  messagingSenderId: "96878405573",
  appId: "1:96878405573:web:0a411b4732130304420dac",
  measurementId: "G-ZH5JSQE309"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };