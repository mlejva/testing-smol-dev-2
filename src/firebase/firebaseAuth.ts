import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();

export { firebaseAuth };