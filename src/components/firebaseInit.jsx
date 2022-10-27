/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBv504VsjiTp0BjefpcPO91DD7F4cFym0M",
  authDomain: "temp-monitor-dash.firebaseapp.com",
  projectId: "temp-monitor-dash",
  storageBucket: "temp-monitor-dash.appspot.com",
  messagingSenderId: "562555966406",
  appId: "1:562555966406:web:dd91cb429ccf8a290dd8c7",
  measurementId: "G-1D6562XRQG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);