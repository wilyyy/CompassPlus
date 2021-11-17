import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import styled from "styled-components/native";
import { Tab, ThemeProvider, Icon } from 'react-native-elements';
import { Dimensions, ImageBackground, Pressable, SafeAreaView, SafeViewArea, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View, } from 'react-native';



import { COLORS } from '../../constants/styles.js';

import MobileCard from '../../comps/CompassCardParent/cardManager.js';
import { Button } from 'react-native-elements/dist/buttons/Button';
import NavBar from '../../comps/NavBar/index.js';

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


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
    background-color: ${COLORS.ALICEBLUE};
    align-items: center;
`;

const BgCircle = styled.View`
    position:absolute;
    z-index: -2;
    width: 400px;
    height: 400px;
    background-color: ${COLORS.SPACECADET};
    border-radius: 100;
    top:-100px;
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

//make this add payment
const Payment = styled.Pressable`
    font-size: 16px;
    font-weight: 700;
    align-self: flex-end;
    height: 100%;
    flex-direction: row;
    top:10px

    /* border-width: 2px;
    border-color: red; */
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
        (dimensions.height + 210)
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
            if (top.value > dimensions.height / 2 + 200) {
                top.value = dimensions.height + 150;
            } else {
                top.value = dimensions.height / 2.25;
            }
        }
    });

    //transfer funds
    function handleTransferSheet() {
        top.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }

    function handleAddSheet() {
        top.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }

    function handleTransferSheet() {
        top.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }

    //this doesn't work :( .... YET
    function TransferFunds() {
        // need to set states to save new balances
        top = useSharedValue(
            (dimensions.height + 210)
        );
    }


    return (
        <ThemeProvider>
            <Page>
                <BgCircle />
                <TopContainer>
                    <H1>My Cards</H1>
                    <Payment>
                        <Text style={styles.payment}>Add Payment</Text>
                        <Icon
                            name='pluscircleo'
                            type='antdesign'
                            color='#fff'
                            size={15}
                            style={styles.plusIcon}
                        />
                    </Payment>
                </TopContainer>
                <Text style={styles.TapQueue}>Tap Card to Pay</Text>
                <ScrollView
                    contentContainerStyle={styles.scrollview}
                    horizontal={true}
                    alwaysBounceHorizontal={true}
                >
                    <MobileCard
                        onTransferPress={handleTransferSheet}
                        TransferAction={TransferFunds}
                        onAddFundsPress={handleAddSheet}
                    />
                    <MobileCard
                        onTransferPress={handleTransferSheet}
                        TransferAction={TransferFunds}
                        onAddFundsPress={handleAddSheet}
                    />
                    <MobileCard
                        onTransferPress={handleTransferSheet}
                        TransferAction={TransferFunds}
                        onAddFundsPress={handleAddSheet}
                    />
                </ScrollView>

                {/* <Button
                    title="Open sheet"
                    style={{ backgroundColor: 'blue', alignSelf: 'center' }}
                    onPress={() => {
                        top.value = withSpring(
                            dimensions.height / 2.25,
                            SPRING_CONFIG
                        );
                    }}
                /> */}


            </Page>

            {/* add funds */}
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
                    <AddFundsTab />
                </Animated.View>
            </PanGestureHandler>

            {/* transfer stuff  */}
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
                    <TransferBalanceTab />
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
        flexDirection: 'row',
        borderColor: 'red',
        borderRadius: 10,
        backgroundColor: 'red',
    },
    NavCont: {
        position: 'absolute',
        bottom: 0,
    }
});