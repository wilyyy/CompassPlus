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
import TransferBalanceTab from '../../comps/CompassCardParent/transferFunds.js';
import AddFundsTab from '../../comps/CompassCardParent/addFunds.js';
import AddCardManager from '../../comps/CompassCardParent/addCardManager.js';
import CardSwipeTest from '../../comps/CompassCardParent/cardsInSwipe';


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

// === reUsable animations ===
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
    const top = useSharedValue(
        (dimensions.height + 400)
    );
    const style = useAnimatedStyle(() => {
        return {
            top: withSpring(top.value, SPRING_CONFIG),
        };
    });

    const gestureHandler = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = top.value;
        },
        onActive(event, context) {
            top.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (top.value > dimensions.height / 2 + 150) {
                top.value = withSpring(dimensions.height + 300);
            } else {
                top.value = withSpring(dimensions.height / 2.25);
            }
        }
    });



    function handleAddSheet() {
        top.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }



    function TransferFunds() {
        // need to set states to save new balances
        top.value = withSpring(dimensions.height + 300);
    }


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
                    handleAddSheetONE={handleAddSheet}
                    handleAddSheetTWO={handleAddSheet}
                />
                {/* <ScrollView
                    contentContainerStyle={styles.scrollview}
                    horizontal={true}
                    alwaysBounceHorizontal={true}
                >
                    <MobileCard
                        onAddFundsPress={handleAddSheet}
                    />
                    <MobileCard
                        onAddFundsPress={handleAddSheet}
                        titleCardType={'Stored Value Ticket'}
                        cardType="Ticket"
                        expiration={'90 minutes'}
                        phrasing={'in'}
                        buttonTitle={'Add Funds'}
                    />
                    <AddCardManager />
                </ScrollView> */}


            </Page>


            {/* ADD FUNDS ANIMATION TAB  */}
            <PanGestureHandler
                onGestureEvent={gestureHandler}
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
                        style
                    ]}
                >
                    <AddFundsTab
                        AddFundsConfirm={TransferFunds}
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