import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// go to storybook/stories/Button/Button.stories.js to add components
// export { default } from './storybook';

//import screens
import PickDestinations from './screens/Authentication/pickDestinations';
import HomeScreen from './screens/Home/home';
import CompassCardScreen from './screens/CompassCardScreen/mobileCard';
import AddPayScreen from './screens/AddPayment';
import MapHomeScreen from './screens/TripPlanner/mapHome';
import SavedTrips from './screens/TripPlanner/savedTrips';
import CreateAccount from './screens/Authentication/createAccount';
import ProfileScreenNew from './screens/Profile/ProfileScreenNew';
import LoginScreen from './screens/Authentication/loginScreen';
import ChangePasswordScreen from './screens/Profile/ChangePasswordScreen';
import BalanceHistoryCard from './comps/BalanceHistory/BalanceHistoryCard';
import NotificationPreferencesScreen from './screens/Profile/NotificationPreferencesScreen';
import LoginScreenNew from './screens/Authentication/SignInScreenNew';
import welcomeBackScreen from './screens/Authentication/welcomeBackScreen';
import loginScreenNew from './screens/Authentication/LoginScreenNew';
import createAccountScreenNew from './screens/Authentication/createAccountScreenNew';
import authenticationScreen from './screens/Authentication/authenticationScreen';

const Stack = createNativeStackNavigator();

export default function App() {


  // const [userLogged, setUserLogged] = useState(false);

  // useEffect(() => {
  //   const authListener = firebase.auth().onAuthStateChanged((user) => {
  //     setUserLogged(user ? true : false);
  //   });
  //   return authListener;
  // }, []);

  
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Authentication'
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} />
        <Stack.Screen name='Onboarding' component={PickDestinations} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MobileCard' component={CompassCardScreen} />
        <Stack.Screen name='Pay' component={AddPayScreen}
          options={{ animation: 'none' }}
        />
        <Stack.Screen name='Map' component={MapHomeScreen} />
        <Stack.Screen name='SavedTrips' component={SavedTrips} />
        <Stack.Screen name='Account' component={ProfileScreenNew} />
        <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} />
        <Stack.Screen name='BalanceHistory' component={BalanceHistoryCard} />
        <Stack.Screen name='NotificationPreferences' component={NotificationPreferencesScreen} />
        <Stack.Screen name='SignIn' component={LoginScreenNew} />
        <Stack.Screen name='WelcomeBack' component={welcomeBackScreen} />
        <Stack.Screen name='LoginNew' component={loginScreenNew} />
        <Stack.Screen name='CreateAccountNew' component={createAccountScreenNew} />
        <Stack.Screen name='Authentication' component={authenticationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23A6F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});