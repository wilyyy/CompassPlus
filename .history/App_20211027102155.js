import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinkCompassCard from './comps/LinkCompassCard';
import SignUpTransitCard from './comps/SignUpTransitCard';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LinkCompassCard /> */}
      <SignUpTransitCard />
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
  },
});
