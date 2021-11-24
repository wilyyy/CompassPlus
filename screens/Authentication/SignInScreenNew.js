import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, TextInput, Dimensions, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import styled from "styled-components/native";
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider, getAuth, signInWithCredential, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);

export default function LoginScreenNew () {

useEffect(()=>{
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("signed in right now", user);
    } else {
      // User is signed out
      console.log("not signed in or signed out");
    }
  });
}, []);

const SignInGoogle = async () => {
    try {
        const result = await Google.logInAsync({
          androidClientId: '309523893558-b8ei8n9t7ag8ht90cls7dc55a3ki0b50.apps.googleusercontent.com',
          iosClientId: '309523893558-gqgt5iqmgs9uor2i2ksmm5c4gb0hipdo.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });

        console.log(result);
        if (result.type === 'success') {
          //you signed in
          //return result.accessToken;
          const auth = getAuth();

          //give the provider the google information that was already communicated
          const provider = GoogleAuthProvider.credential(result.idToken, result.accessToken);
          const fbresult = await signInWithCredential(auth, provider);

          console.log("added to firebase user database", fbresult);

        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
}

    return (
        <View style={styles.container}>
            <Button 
                title="Sign in with Google" 
                onPress ={SignInGoogle}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
