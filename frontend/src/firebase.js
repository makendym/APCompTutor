// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Auth

// export var url = "http://localhost:3000/"

// export function regularRequest(handler, method, body, callback){
//   const http = new XMLHttpRequest()
//   http.responseType = 'json'

//   auth.currentUser.getIdToken(true).then((idToken) => {
//     http.open(method, url + handler, true);
//     http.setRequestHeader('Authorization', idToken);

//     if (body != null) {
//       http.setRequestHeader('Content-Type', 'application/json');
//     }
//     http.onload = function () {
//       callback(http.response);
//     }

//     http.send(JSON.stringify(body));
//   }).catch((error) => {
//     callback("Auth Error: " + error.message);
//   });
// }

// // Custom Hook or Component
// export function useAuth() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//       console.log("Auth", currentuser);
//       setUser(currentuser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return user;
// }

export { firestore, analytics, auth};
