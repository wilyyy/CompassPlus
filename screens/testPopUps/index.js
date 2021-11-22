// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { Animated, Button, View, Dimensions, StyleSheet, Text, ScrollView, Alert, Modal, Pressable } from 'react-native';
// // import * Animated from 'react-native-reanimated';
// import styled from "styled-components/native";
// import ZonesTab from '../../comps/CompassCardParent/zonesSelTab.js';
// import PaymentTab from '../../comps/CompassCardParent/paymentSelTab.js';
// import TicketTab from '../../comps/CompassCardParent/ticketSelTab.js';
// import { COLORS } from '../../constants/styles.js';




// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;


// // need to make a page for this
// // const Passes = [
// //     { title: '1-Zone', id: '1' },
// //     { title: '2-Zone', id: '2' },
// //     { title: '3-Zone', id: '3' },
// // ];


// // LEFT TO DO 
// // -> rewatch animations to figure out how to make this popup bit reusable
// // -> transfer all this over to mobileCards.js
// // -> setStates onPress 
// // -> close modals onPress


// export default function PopUps({
//     //this function will be passed to mobilescreen to set states
//     modalAmount = () => { },
// }) {

//     const [animation, setAnimation] = useState(new Animated.Value(0));
//     const color = animation.interpolate({
//         inputRange: [0, 0.2, 1.8, 21],
//         outputRange: [
//             "rgba(255, 255, 255, 0.0)",
//             "rgba(45, 57, 82, 0.5)",
//             "rgba(45, 57, 82, 0.8)",
//             "rgba(255, 255, 255, 0.0)"],
//     });

//     const openModal = animation.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 1],
//         extrapolate: "clamp",
//     });

//     const modalTrigger = () => {
//         Animated.timing(animation, {
//             toValue: 1,
//             duration: 100,
//             useNativeDriver: false,
//         }).start();
//     }

//     const close = () => {
//         Animated.timing(animation, {
//             toValue: 0,
//             duration: 100,
//             useNativeDriver: false
//         }).start();
//     };


//     const open = {
//         transform: [
//             { scale: openModal }]
//     };

//     const background = {
//         backgroundColor: color,
//     }


//     return (
//         <View>
//             <Button
//                 title='Open'
//                 onPress={modalTrigger}
//             ></Button>
//             <Animated.View style={[styles.animationCont, open]}>

//                 {/* <TicketTab />
//         <PaymentTab /> */}

//                 <ZonesTab
//                     amount={modalAmount}
//                 />
//             </Animated.View>
//             <Button
//                 title='Close'
//                 onPress={close}
//             ></Button>
//         </View >
//     )
// };


// const styles = StyleSheet.create({
//     animationCont: {

//         alignContent: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 16,
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,

//         width: 200
//     }

// })
