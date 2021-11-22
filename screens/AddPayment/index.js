import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components/native";
import { Tab, ThemeProvider, Icon } from 'react-native-elements';
import { Animated, Dimensions, ImageBackground, Pressable, SafeAreaView, SafeViewArea, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View, } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import { COLORS } from '../../constants/styles.js';

import MobileCard from '../../comps/CompassCardParent/pass.js';
import { Button } from 'react-native-elements/dist/buttons/Button';
import NavBar from '../../comps/NavBar/index.js';
import BgCircle from '../../comps/Global/BgCircleScreens';


//for animations
// import { PanGestureHandler } from 'react-native-gesture-handler';
// import Animated, {
//     useAnimatedGestureHandler,
//     useSharedValue,
//     useAnimatedStyle,
//     withSpring,
// } from 'react-native-reanimated';
// import TransferBalanceTab from '../../comps/CompassCardParent/NotUsing/transferFunds.js';

import CardSwipeTest from '../../comps/CompassCardParent/cardsInSwipe';
import AddFundsTabPass from '../../comps/CompassCardParent/addFunds.js';
import AddFundsTabTicket from '../../comps/CompassCardParent/addFundsTicket.js';
import AutoReloadTab from '../../comps/CompassCardParent/autoReload.js';
import AddPaymentType from '../../comps/CompassCardParent/payment.js';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
    background-color: ${COLORS.ALICEBLUE};
    align-items: center;

`;
const TopContainer = styled.View`
    position: relative;
    top: 15%;
    width: 90%;
    height: 50px; 
    justify-content: space-between;
    flex-direction: row;

    /* border-width: 2px;
    border-color: lightgrey; */
`;
const Container = styled.ScrollView`
    position: relative;
    width: 90%;
    height: 85%;
    justify-content: space-evenly;
    align-items: center;
    margin-top:30px;
    flex-direction: row;

    /* border-width: 2px;
    border-color: lightgrey; */
`;
const AddPayment = styled.Pressable`
    font-size: 16px;
    font-weight: 700;
    align-self: flex-end;
    height: 100%;
    flex-direction: row;
    top:10px;
`;
const H1 = styled.Text`
    font-size: 40px;
    color: #fff;
    align-self: flex-start;

    /* border-width: 2px;
    border-color: blue; */
`;
const H2 = styled.Text`
    font-size: 24px;
    
`;








// reusable spring config
const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
};


export default function AddPayScreen() {
    const dimensions = useWindowDimensions();
    navigation = useNavigation();



    // ====== 🤯🤯🤯🤯🤯🤯 PAY MODAL ANIMATION START 🤯🤯🤯🤯🤯🤯 ======

    const [payScreen, setPayScreen] = useState(new Animated.Value(0));

    const OpenAddPay = () => {
        Animated.timing(payScreen, {
            toValue: 1,
            duration: 0,
            useNativeDriver: false,
        }).start();
    };

    const openModalPay = payScreen.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const closePayScreen = () => {
        Animated.timing(payScreen, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
        }).start();

    };


    const openPayScreen = {
        transform: [
            { scale: openModalPay }
        ]
    };

    // ====== 🤯🤯🤯🤯🤯🤯 PAY MODAL ANIMATION END 🤯🤯🤯🤯🤯🤯 ======



    return (
        <ThemeProvider>
            <Page>

                <Animated.View style={[styles.overlayPay]}>
                    <AddPaymentType
                        AddPaymentType={() => navigation.navigate('MobileCard')}
                    />
                </Animated.View>

                <BgCircle />
                <TopContainer>
                    <H1>My Cards</H1>
                    <AddPayment
                        onPress={OpenAddPay}
                    >
                        <Text style={styles.payment}>Add Payment</Text>
                        <Icon
                            name='pluscircleo'
                            type='antdesign'
                            color='#fff'
                            size={15}
                            style={styles.plusIcon}
                        />
                    </AddPayment>
                </TopContainer>
                <Text style={styles.TapQueue}>Tap Card to Pay</Text>
                <CardSwipeTest
                // handleAddSheetONE={handlePassReload}
                // handleAddSheetTWO={handleTicketReload}
                // // passAutoReload={handlePassAutoReload}
                // ticketAutoReload={handleTicketAuto}
                />
            </Page>


            <View style={styles.NavCont}>
                <NavBar />
            </View>

        </ThemeProvider>
    );
}



const styles = StyleSheet.create({
    payment: {
        color: '#fff',
        fontWeight: 'bold',
    },
    plusIcon: {
        paddingLeft: 5,
    },
    TapQueue: {
        alignSelf: 'flex-start',
        marginTop: '16%',
        marginLeft: '5%',
        color: '#fff',
        fontStyle: 'italic',
    },
    scrollView: {

    },
    NavCont: {
        position: 'absolute',
        bottom: 0,

    },
    overlayTabCont: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        shadowColor: '#222222',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    overlayPay: {
        // position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingVertical: '30%',
        backgroundColor: 'rgba(37, 43, 66, 0.75)',
        shadowColor: '#222222',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});



