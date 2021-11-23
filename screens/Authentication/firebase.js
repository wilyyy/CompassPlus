import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZgF0P29h0j6AJey7fISbZLprca9f5iGw",
  authDomain: "compassplus-dbafd.firebaseapp.com",
  projectId: "compassplus-dbafd",
  storageBucket: "compassplus-dbafd.appspot.com",
  messagingSenderId: "309523893558",
  appId: "1:309523893558:web:df5f46624832f7b2943797"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} 
else {
    app = firebase.app()
}

const auth = firebase.auth();
const provider = new GoogleAuthProvider();


const SignInWithGoogle = async () => {
  try {
      const result = await Google.logInAsync({
        androidClientId: '309523893558-b8ei8n9t7ag8ht90cls7dc55a3ki0b50.apps.googleusercontent.com',
        iosClientId: '309523893558-gqgt5iqmgs9uor2i2ksmm5c4gb0hipdo.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
          provider.credential(result.idToken, result.accessToken);
          await auth
              .signInWithCredential(auth, provider)
              .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  console.log(user.email);
              })
              .catch((error) => {
                  alert(error.message)
              });
              navigation.navigate('Home');
     
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
}

export {
  auth,
  SignInWithGoogle
};
