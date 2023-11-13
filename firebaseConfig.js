// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAltLPQpfpqASjP44KIc0-uy43h9geAFjs",
  authDomain: "react-food-app-test.firebaseapp.com",
  databaseURL: "https://react-food-app-test-default-rtdb.firebaseio.com",
  projectId: "react-food-app-test",
  storageBucket: "react-food-app-test.appspot.com",
  messagingSenderId: "917792936106",
  appId: "1:917792936106:web:305454d4f351eeedd840d3",
  measurementId: "G-9320K6BHRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
