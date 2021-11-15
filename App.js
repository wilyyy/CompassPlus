import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// go to storybook/stories/Button/Button.stories.js to add components
export { default } from './storybook';

//import screens
import PickDestinations from './screens/Authentication/pickDestinations';
import HomeScreen from './screens/Home/home';
import CompassCardScreen from './screens/CompassCardScreen/mobileCard';
import MapHomeScreen from './screens/TripPlanner/mapHome';
import SavedTrips from './screens/TripPlanner/savedTrips';
import CreateAccount from './screens/Authentication/createAccount';
import ProfileScreenNew from './screens/Profile/ProfileScreenNew';
import LoginScreen from './screens/Authentication/loginScreen';

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login'
//         screenOptions={{
//           headerShown: false
//         }}
//       >
//         <Stack.Screen name='Login' component={LoginScreen} />
//         <Stack.Screen name='CreateAccount' component={CreateAccount} />
//         <Stack.Screen name='Onboarding' component={PickDestinations} />
//         <Stack.Screen name='Home' component={HomeScreen} />
//         <Stack.Screen name='MobileCard' component={CompassCardScreen} />
//         <Stack.Screen name='Map' component={MapHomeScreen} />
//         <Stack.Screen name='SavedTrips' component={SavedTrips} />
//         <Stack.Screen name='Account' component={ProfileScreenNew} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23A6F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});