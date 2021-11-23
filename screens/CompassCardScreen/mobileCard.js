import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components/native";
import { Tab, ThemeProvider, Icon } from 'react-native-elements';
import { Dimensions, ImageBackground, Pressable, SafeAreaView, SafeViewArea, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View, } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/styles.js';

import MobileCard from '../../comps/CompassCardParent/pass.js';
import { Button } from 'react-native-elements/dist/buttons/Button';
import NavBar from '../../comps/NavBar/index.js';
import BgCircle from '../../comps/Global/BgCircleScreens';


//for animations
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
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


export default function CompassCardScreen() {
    const dimensions = useWindowDimensions();
    navigation = useNavigation();



    // ====== 🔥🔥🔥 STATES START 🔥🔥🔥 ======

    // -------- RELOAD STATES FOR PASS START --------


    // // // -------- RELOAD STATES FOR PASS END --------

    // // // -------- RELOAD STATES FOR TICKET START --------

    // const [loadTicket, setLoadTicket] = useState(10);
    // if (loadTicket === 10) {
    //     // ticketLoadAmountState = '$10.00';
    // }
    // if (loadTicket === 20) {
    //     // ticketLoadAmountState = '$20.00';
    // }
    // if (loadTicket === 40) {
    //     // ticketLoadAmountState = '$40.00';
    // }
    // if (loadTicket === 60) {
    //     // ticketLoadAmountState = '$60.00';
    // }
    // if (loadTicket === 80) {
    //     //ticketLoadAmountState = '$80.00';
    // }
    // if (loadTicket === 100) {
    //     // ticketLoadAmountState = '$100.00';
    // }
    // const [ticketPayment, setTicketPayment] = useState('Visa');
    // if (ticketPayment === 'Visa') {
    //     // ticketPaymentState = 'Visa';
    // }
    // if (ticketPayment === 'Mastercard') {
    //     //ticketPaymentState = 'Mastercard';
    // }
    // -------- RELOAD STATES FOR TICKET END --------


    // ====== 🔥🔥🔥 STATES END 🔥🔥🔥 ======


    // ====== 🌟🌟🌟🌟🌟🌟 ANIMATIONS START 🌟🌟🌟🌟🌟🌟 ======

    // ---------- PASS ANIMATIONS START ----------
    const topPass = useSharedValue(
        (dimensions.height + 400)
    );
    const stylePass = useAnimatedStyle(() => {
        return {
            top: withSpring(topPass.value, SPRING_CONFIG),
        };
    });
    const gestureHandlerPass = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = topPass.value;
        },
        onActive(event, context) {
            topPass.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (topPass.value > dimensions.height / 2 + 150) {
                topPass.value = withSpring(dimensions.height + 300);
            } else {
                topPass.value = withSpring(dimensions.height / 2.25);
            }
        }
    });
    function ReloadPass() {
        // need to set states to save new balances
        topPass.value = withSpring(dimensions.height + 300);
    }
    function handlePassReload() {
        // on pass button confirm reload
        //tab animation
        topPass.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );

    }
    // ---------- PASS ANIMATIONS END ----------

    // ---------- TICKET ANIMATIONS START ----------
    const topTicket = useSharedValue(
        (dimensions.height + 400)
    );
    const styleTicket = useAnimatedStyle(() => {
        return {
            top: withSpring(topTicket.value, SPRING_CONFIG),
        };
    });
    const gestureHandlerTicket = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = topTicket.value;
        },
        onActive(event, context) {
            topTicket.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (topTicket.value > dimensions.height / 2 + 150) {
                topTicket.value = withSpring(dimensions.height + 300);
            } else {
                topTicket.value = withSpring(dimensions.height / 2.25);
            }
        }
    });
    function ReloadTicket() {
        // need to set states to save new balances
        topTicket.value = withSpring(dimensions.height + 300);
    }
    function handleTicketReload() {
        //on ticket button confirm reload
        topTicket.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }
    // ---------- TICKET ANIMATIONS END ----------

    // ---------- AUTO TICKET ANIMATIONS START ----------
    const topAutoTicket = useSharedValue(
        (dimensions.height + 400)
    );
    const styleAutoTicket = useAnimatedStyle(() => {
        return {
            top: withSpring(topAutoTicket.value, SPRING_CONFIG),
        };
    });
    const gestureHandlerAutoTicket = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = topAutoTicket.value;
        },
        onActive(event, context) {
            topAutoTicket.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (topAutoTicket.value > dimensions.height / 2 + 150) {
                topAutoTicket.value = withSpring(dimensions.height + 300);
            } else {
                topAutoTicket.value = withSpring(dimensions.height / 2.25);
            }
        }
    });

    function confirmAutoReload() {
        // need to set states to save new balances
        topTicket.value = withSpring(dimensions.height + 300);
    }

    function handleTicketAuto() {
        //on ticket button confirm reload
        topAutoTicket.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }


    // still need to put in button close function 

    // ---------- AUTO TICKET ANIMATIONS END ----------

    // ====== 🌟🌟🌟🌟🌟🌟 ANIMATIONS END 🌟🌟🌟🌟🌟🌟 ======

    // ====== 🤯🤯🤯🤯🤯🤯 PAY MODAL ANIMATION START 🤯🤯🤯🤯🤯🤯 ======

    // const [payScreen, setPayScreen] = useState(new Animated.Value(0));

    // const OpenAddPay = () => {
    //     Animated.timing(payScreen, {
    //         toValue: 1,
    //         duration: 0,
    //         useNativeDriver: false,
    //     }).start();
    // };

    // const openModalPay = payScreen.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 1],
    //     extrapolate: "clamp",
    // });





    // const closePayScreen = () => {
    //     Animated.timing(payScreen, {
    //         toValue: 0,
    //         duration: 0,
    //         useNativeDriver: false,
    //     }).start();

    // };


    // const openPayScreen = {
    //     transform: [
    //         { scale: openModalPay }
    //     ]
    // };

    // ====== 🤯🤯🤯🤯🤯🤯 PAY MODAL ANIMATION END 🤯🤯🤯🤯🤯🤯 ======



    return (
        <ThemeProvider>
            <Page>

                <BgCircle />
                <TopContainer>
                    <H1>My Cards</H1>
                    <AddPayment
                        onPress={() => navigation.navigate('Pay')}
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
                    handleAddSheetONE={handlePassReload}
                    handleAddSheetTWO={handleTicketReload}
                    // passAutoReload={handlePassAutoReload}
                    ticketAutoReload={handleTicketAuto}
                />
            </Page>
            {/* 
            <Animated.View style={[styles.overlayPay, openPayScreen]}>
                <AddPaymentType
                    AddPaymentType={closePayScreen}
                />
            </Animated.View> */}

            {/* RELOAD PASS ANIMATION TAB  */}
            <PanGestureHandler
                onGestureEvent={gestureHandlerPass}
            >
                <Animated.View
                    style={[styles.overlayTabCont, stylePass]}>
                    <AddFundsTabPass
                        month='December'
                        AddFundsConfirm={ReloadPass}
                    />
                </Animated.View>
            </PanGestureHandler>



            {/* RELOAD TICKET ANIMATION TAB  */}
            <PanGestureHandler
                onGestureEvent={gestureHandlerTicket}
            >
                <Animated.View style={[styles.overlayTabCont, styleTicket]} >
                    <AddFundsTabTicket
                        ticketBalance="$4.05" //this will come from the database
                        AddFundsConfirm={ReloadTicket}
                    />
                </Animated.View>
            </PanGestureHandler>

            {/* AUTO TICKET ANIMATION TAB  */}
            <PanGestureHandler
                onGestureEvent={gestureHandlerAutoTicket}
            >
                <Animated.View style={[styles.overlayTabCont, styleAutoTicket]} >
                    <AutoReloadTab
                        autoReloadConfirm={confirmAutoReload}
                    />
                </Animated.View>
            </PanGestureHandler>







            {/* AUTO PASS ANIMATION TAB  */}

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
        position: 'absolute',
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



