import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



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
