// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from 'firebase/auth';

import Experience from './components/Experience';
import ItemInformation from './components/ItemInformation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CartItem from './components/CartItem';
// import ListOfTodo from './components/ListOfTodo';
// import { useEffect, useState } from 'react';

// export default function App() {
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: 'AIzaSyDjBz3NMjVC1RJepNNcFmpOpKzf4HnWDWc',
//     authDomain: 'd-product-gallery.firebaseapp.com',
//     projectId: 'd-product-gallery',
//     storageBucket: 'd-product-gallery.appspot.com',
//     messagingSenderId: '50688372516',
//     appId: '1:50688372516:web:50f11e1bab2b8a9169cdb1',
//     measurementId: 'G-BJP8WCFZH9',
//   };

//   const [authFlag, setAuth] = useState(
//     false || window.localStorage.getItem('auth') === 'true'
//   );
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         setAuth(true);
//         window.localStorage.setItem('auth', 'true');
//         user.getIdToken().then((token) => {
//           console.log(token);
//           setToken(token);
//         });
//       } else {
//         // User is signed out
//         // ...
//       }
//     });
//   });

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   const loginWithGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;

//         // IdP data available using getAdditionalUserInfo(result)

//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };

//   return (
//     <div style={{ alignItems: 'center' }}>
//       {authFlag ? (
//         <ListOfTodo token={token} />
//       ) : (
//         <button onClick={loginWithGoogle}>Login With Google</button>
//       )}
//     </div>
//   );
// }

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', alignItems: 'center', padding: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/items" element={<Items />} /> */}
          <Route path="/item-information" element={<CartItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
