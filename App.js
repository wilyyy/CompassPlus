import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

<<<<<<< HEAD
import MobileCard from './comps/CompassCardParent/cardManager';
import AddFundsTab from './comps/CompassCardParent/addFunds';
import TransferBalanceTab from './comps/CompassCardParent/transferFunds';
import LinkCompassCard from './comps/LinkCompassCard';
import TripPlannerTab from './comps/TripPlannerTab';
import SignUpTransitCard from './comps/SignUpTransitCard';
import NotificationCard from './comps/Profile/notificationCard';
=======

>>>>>>> a67526d66a14f4b0065ce40e035c6da306fb6621

// go to storybook/stories/Button/Button.stories.js to add components
export { default } from './storybook';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <LinkCompassCard />
//       <TripPlannerTab />
//       <SignUpTransitCard /> */}

//       {/* <MobileCard /> */}
//       {/* <TransferBalanceTab /> */}
//       <AddFundsTab />
//       <StatusBar style="auto" />
//     </View>
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
