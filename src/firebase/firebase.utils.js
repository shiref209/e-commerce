import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { signInWithPopup } from 'firebase/auth';


const config={
    apiKey: "AIzaSyBVSfS0indXmen6HhSequnpfXrgmuLWb78",
    authDomain: "crwn-clothing-76379.firebaseapp.com",
    projectId: "crwn-clothing-76379",
    storageBucket: "crwn-clothing-76379.appspot.com",
    messagingSenderId: "590645803461",
    appId: "1:590645803461:web:b4fb1b7b685a2cdfeb73ac",
    measurementId: "G-WBLBSV4T0S"
}

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> signInWithPopup(auth,provider)
.catch((err)=>console.log(err));

export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const docRef=firestore.doc(`users/${userAuth.uid}`);
    const docSnap=await docRef.get();
    console.log(docSnap);
    if(!docSnap.exists){
        const {displayName,email}=userAuth;
        const newDate=new Date();
        try{
            await docRef.set({
                displayName,
                email,
                newDate,
                ...additionalData
            })
        }
        catch(error){console.log('error',error)}
    }
    return docRef;
}

export default firebase;
