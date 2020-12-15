import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACntqpSwFf97ZWG0itw66gy1fdBpRZMX0",
  authDomain: "crown-clothing-516af.firebaseapp.com",
  projectId: "crown-clothing-516af",
  storageBucket: "crown-clothing-516af.appspot.com",
  messagingSenderId: "669114344431",
  appId: "1:669114344431:web:fe849744080339212f8c1a",
  measurementId: "G-6B4CHMKYCB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
