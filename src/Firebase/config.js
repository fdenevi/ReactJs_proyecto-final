import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC7jrDZ5bIGmNJHFhdlkLVyexnXe0xLAiY",
  authDomain: "libra-shoes-80896.firebaseapp.com",
  projectId: "libra-shoes-80896",
  storageBucket: "libra-shoes-80896.appspot.com",
  messagingSenderId: "710051382720",
  appId: "1:710051382720:web:d365fcfbfc7f566fdef425"
};

const app = initializeApp(firebaseConfig);


export const initFirestore = () => app