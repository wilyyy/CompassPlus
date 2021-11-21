import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import styled from "styled-components/native";
import { Tab, ThemeProvider, Icon } from 'react-native-elements';
import { Dimensions, ImageBackground, Pressable, SafeAreaView, SafeViewArea, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View, } from 'react-native';



import { COLORS } from '../../constants/styles.js';

import MobileCard from '../../comps/CompassCardParent/cardManager.js';
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
import AddFundsTab from '../../comps/CompassCardParent/addFunds.js';
import AddCardManager from '../../comps/CompassCardParent/addCardManager.js';
import CardSwipeTest from '../../comps/CompassCardParent/cardsInSwipe';
import AddFundsTabPass from '../../comps/CompassCardParent/addFunds.js';
import AddFundsTabTicket from '../../comps/CompassCardParent/addFundsTicket.js';


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

// === reusable animations ===
// tabs animation
const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
};


const CompassCardScreen = () => {
    const dimensions = useWindowDimensions();

    //=============PASS & TICKET ANIMATIONS START=============
    const topTicket = useSharedValue(
        (dimensions.height + 400)
    );
    const topPass = useSharedValue(
        (dimensions.height + 400)
    );
    const stylePass = useAnimatedStyle(() => {
        return {
            top: withSpring(topPass.value, SPRING_CONFIG),
        };
    });

    const styleTicket = useAnimatedStyle(() => {
        return {
            top: withSpring(topTicket.value, SPRING_CONFIG),
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

    function ReloadPass() {
        // need to set states to save new balances
        topPass.value = withSpring(dimensions.height + 300);
    }

    function ReloadTicket() {
        // need to set states to save new balances
        topTicket.value = withSpring(dimensions.height + 300);
    }
    //=============PASS & TICKET ANIMATIONS END=============

    //=============RELOAD PASS INTERACTIONS START=============

    function selectZone() {
        //zone arrow onPress -> open zone selection modal

        //set zoneType state this will happen within the modal
    }

    function PassPaySelection() {
        //payment arrow onPress -> open payment selection modal 

        //set paymentType state
    }

    // -------- RELOAD STATES FOR PASS START --------
    const [zone, setZone] = useState(1);

    if (zone === 1) {
        zoneType = '1-Zone';
        zoneAmount = '$100.25';
    }

    if (zone === 2) {
        zoneType = '2-Zone';
        zoneAmount = '$134.00';
    }

    if (zone === 3) {
        zoneType = '3-Zone';
        zoneAmount = '$181.05';
    }

    const [passPayment, setPassPayment] = useState('Visa');

    if (passPayment === 'Visa') {
        passPaymentType = 'Visa';
    }

    if (passPayment === 'Mastercard') {
        passPaymentType = 'Mastercard';
    }

    // -------- RELOAD STATES FOR PASS END --------


    // on pass button confirm reload
    function handlePassReload() {
        //tab animation
        topPass.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
        // i don't think the below is actually necessary? 
        // setReloadType('Pass');
    }
    //=============RELOAD PASS INTERACTIONS END=============


    //=============RELOAD TICKET INTERACTIONS START=============
    function selectAmount() {
        // amount arrow onPress -> open ticket reload amount modal

        //set ticketLoadAmount state
    }

    function TicketPaySelection() {
        // payment arrow onPress -> open payment selection modal

        //set ticketPaymentType state
    }






    //on ticket button confirm reload
    function handleTicketReload() {
        topTicket.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
        //don't think the below is actually necessary
        // setReloadType('Ticket');
    }
    //=============RELOAD TICKET INTERACTIONS END=============








    return (
        <ThemeProvider>
            <Page>
                <BgCircle />
                <TopContainer>
                    <H1>My Cards</H1>
                    <AddPayment>
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
                />
            </Page>


            {/* RELOAD PASS ANIMATION TAB  */}
            <PanGestureHandler
                onGestureEvent={gestureHandlerPass}
            >
                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'transparent',
                            shadowColor: '#222222',
                            shadowoffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        stylePass
                    ]}
                >
                    <AddFundsTabPass
                        zoneType="1-Zone"
                        zoneAmount='$100.25'
                        passPaymentType='Visa'
                        month='December'
                        selectZone={selectZone}
                        selectPassPayment={PassPaySelection}
                        AddFundsConfirm={ReloadPass}
                    />
                </Animated.View>
            </PanGestureHandler>


            {/* RELOAD TICKET ANIMATION TAB  */}
            <PanGestureHandler
                onGestureEvent={gestureHandlerTicket}
            >
                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'transparent',
                            shadowColor: '#222222',
                            shadowoffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        styleTicket
                    ]}
                >
                    <AddFundsTabTicket
                        ticketBalance="$4.05" //this will come from the database
                        ticketLoadAmount='$10.00'
                        ticketPaymentType='Visa'
                        selectTicketAmount={selectAmount}
                        selectTicketPayment={TicketPaySelection}
                        AddFundsConfirm=
                        {ReloadTicket}
                    />
                </Animated.View>
            </PanGestureHandler>

            <View style={styles.NavCont}>
                <NavBar />
            </View>

        </ThemeProvider>
    )
}


export default CompassCardScreen;

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

    }
});