import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MobileCard from './comps/CompassCardParent/CardManager';
import LinkCompassCard from './comps/LinkCompassCard';
import RideCard from './comps/RideCardCont';
import SignUpTransitCard from './comps/SignUpTransitCard';

// export { default } from './storybook';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LinkCompassCard />
      <RideCard />
      <SignUpTransitCard /> */}
      <MobileCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23A6F0',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: ''
  },
});


