import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import LoginPage from './screens/LoginScreen/loginScreen';
import PickDestinations from './screens/SignUp/pickDestinations';
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

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login" 
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="PickDestinations" component={PickDestinations} />
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
  centerCont: {
    alignItems: 'center'
  }
});
