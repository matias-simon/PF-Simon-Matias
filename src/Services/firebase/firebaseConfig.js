
import { initializeApp } from "firebase/app";
import{getFirestore}from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAB2FMD0nKffkP0XNKLEh0O1W_5vMsUM7I",
  authDomain: "simonguitars-d66eb.firebaseapp.com",
  projectId: "simonguitars-d66eb",
  storageBucket: "simonguitars-d66eb.appspot.com",
  messagingSenderId: "841497757994",
  appId: "1:841497757994:web:af75068dba33f720aef653"
};


const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)