import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import MobileCard from './comps/CompassCardParent/CardManager';
// import AddFundsTab from './comps/CompassCardParent/CardManager/AddFunds';
// import TransferBalanceTab from './comps/CompassCardParent/TransferFunds';
// import LinkCompassCard from './comps/LinkCompassCard';
// import TripPlannerTab from './comps/TripPlannerTab';
// import SignUpTransitCard from './comps/SignUpTransitCard';
// import NotificationCard from './comps/Profile/notificationCard';

// import MobileCard from './comps/CompassCardParent/cardManager';
// import AddFundsTab from './comps/CompassCardParent/addFunds';
// import TransferBalanceTab from './comps/CompassCardParent/transferFunds';
// import LinkCompassCard from './comps/LinkCompassCard';
// import TripPlannerTab from './comps/TripPlannerTab';
// import SignUpTransitCard from './comps/SignUp/signUpTransitCard';
// import NotificationCard from './comps/Profile/notificationCard';


// go to storybook/stories/Button/Button.stories.js to add components
// export { default } from './storybook';

//import screens
import PickDestinations from './screens/SignUp/pickDestinations';
import HomeScreen from './screens/Home/home';
import CompassCardScreen from './screens/CompassCardScreen/mobileCard';
import MapHomeScreen from './screens/TripPlanner/mapHome';
import LoginPage from './screens/LoginScreen/loginScreen';
import CreateAccount from './screens/CreateAccount/createAccount';
import ProfileScreenNew from './screens/Profile/ProfileScreenNew';
//missing pages from doing hard reset

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} />
        <Stack.Screen name='Onboarding' component={PickDestinations} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MobileCard' component={CompassCardScreen} />
        <Stack.Screen name='Map' component={MapHomeScreen} />
        <Stack.Screen name='Account' component={ProfileScreenNew} />
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
