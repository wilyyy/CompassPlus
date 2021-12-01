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


const SignInWithGoogle = async (navigation) => {
  try {
    const result = await Google.logInAsync({
      androidClientId: '309523893558-b8ei8n9t7ag8ht90cls7dc55a3ki0b50.apps.googleusercontent.com',
      iosClientId: '309523893558-gqgt5iqmgs9uor2i2ksmm5c4gb0hipdo.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    
    if (result.type === 'success') {
      const provider = GoogleAuthProvider.credential(result.idToken, result.accessToken);
      console.log(result, provider);
    
          await auth
              .signInWithCredential(provider)
              .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  console.log(user.email);
                  navigation.navigate('WelcomeBack');
              })
              .catch((error) => {
                  alert(error.message)
              });
     
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
