// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjBz3NMjVC1RJepNNcFmpOpKzf4HnWDWc',
  authDomain: 'd-product-gallery.firebaseapp.com',
  projectId: 'd-product-gallery',
  storageBucket: 'd-product-gallery.appspot.com',
  messagingSenderId: '50688372516',
  appId: '1:50688372516:web:50f11e1bab2b8a9169cdb1',
  measurementId: 'G-BJP8WCFZH9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
