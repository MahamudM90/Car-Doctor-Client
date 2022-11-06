// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJiJRMV-CySRk5IDBY1Z4s2riW3jGjrvs",
  authDomain: "car-doctor-a8d14.firebaseapp.com",
  projectId: "car-doctor-a8d14",
  storageBucket: "car-doctor-a8d14.appspot.com",
  messagingSenderId: "372849383049",
  appId: "1:372849383049:web:09d26d4df191777e0f1858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;