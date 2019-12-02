import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvhDMWsTwX-jQURlLviW64fylXFywFexk",
    authDomain: "shazi-apparel.firebaseapp.com",
    databaseURL: "https://shazi-apparel.firebaseio.com",
    projectId: "shazi-apparel",
    storageBucket: "shazi-apparel.appspot.com",
    messagingSenderId: "104042333378",
    appId: "1:104042333378:web:679df6cf272865706e675b",
    measurementId: "G-KDTFD1D0ZM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


