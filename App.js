import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import { Asset, useAssets } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import axios from 'axios';

//database hosted on digital ocean, check notion for authentication details. php will be hosted on heroku
axios.defaults.baseURL = "https://compassplus.herokuapp.com/api/";

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
import ChangePasswordScreen from './screens/Profile/ChangePasswordScreen';
import BalanceHistoryCard from './comps/BalanceHistory/BalanceHistoryCard';
import NotificationPreferencesScreen from './screens/Profile/NotificationPreferencesScreen';
import LoginScreenNew from './screens/Authentication/SignInScreenNew';
import welcomeBackScreen from './screens/Authentication/welcomeBackScreen';
import loginScreenNew from './screens/Authentication/LoginScreenNew';
import createAccountScreenNew from './screens/Authentication/createAccountScreenNew';
import authenticationScreen from './screens/Authentication/authenticationScreen';
import BenefitsScreen from './screens/Onboarding/BenefitsScreen';
import AddSavedLocation from './screens/TripPlanner/addSavedLocation';
import SupportScreen from './screens/Profile/SupportScreen';

const Stack = createNativeStackNavigator();



export default function App() {

  const [assets] = useAssets([require('./assets/pickdest_bg.png'), require('./assets/logoWhite.png'), require('./assets/bgCircle.png')]);

  if (!assets) {
    return <AppLoading />;
} else {
  return (
    <NavigationContainer>


      <Stack.Navigator initialRouteName='Map'
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name='CreateAccount' component={CreateAccount} />
        <Stack.Screen name='Onboarding' component={PickDestinations} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MobileCard' component={CompassCardScreen} />
        <Stack.Screen name='Pay' component={AddPayScreen}
          options={{ animation: 'none' }}
        />
        <Stack.Screen name='Map' component={MapHomeScreen} />
        <Stack.Screen name='SavedTrips' component={SavedTrips} />
        <Stack.Screen name='AddSavedLocation' component={AddSavedLocation} />
        <Stack.Screen name='Account' component={ProfileScreenNew} />
        <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} />
        <Stack.Screen name='BalanceHistory' component={BalanceHistoryCard} />
        <Stack.Screen name='NotificationPreferences' component={NotificationPreferencesScreen} />
        <Stack.Screen name='SignIn' component={LoginScreenNew} />
        <Stack.Screen name='WelcomeBack' component={welcomeBackScreen} />
        <Stack.Screen name='LoginNew' component={loginScreenNew} />
        <Stack.Screen name='CreateAccountNew' component={createAccountScreenNew} />
        <Stack.Screen name='Authentication' component={authenticationScreen} />
        <Stack.Screen name='Benefits' component={BenefitsScreen} />
        <Stack.Screen name='Support' component={SupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

