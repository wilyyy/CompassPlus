import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MobileCard from './comps/CompassCardParent/CardManager';
import LinkCompassCard from './comps/LinkCompassCard';
import RideCard from './comps/RideCardCont';
import SignUpTransitCard from './comps/SignUpTransitCard';

// export { default } from './storybook';

export default function App() {

  const [cardSide, setCardSide] = useState(true)

  const goManage = () => {
    setCardSide(false);
  }

  return (
    <View style={styles.container}>
      {/* <LinkCompassCard />
      <RideCard />
      <SignUpTransitCard /> */}
      <MobileCard
        onManagePress={goManage}
      />
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
