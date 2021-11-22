
import React, { useState } from 'react';
import { Animated, Button, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../../constants/styles";
import TicketTab from './ticketSelTab';
import PaymentTab from './paySelTab';

const Container = styled.View`
    width: 100%;
    height: 600px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);    
    /* border-color: red;
    border-width: 2px; */
    
`;

const Notch = styled.View`
    width: 80px;
    height: 10px;
    background-color: #EFEFF0;
    margin: 20px;
    align-self: center;
    border-radius: 50px;
`;

const Title = styled.Text`
    font-size: 24px;
    color: #222222;
    align-self: center;
    margin: 10px 0px 15px 0px;
    font-weight: 500;
`;

const Divider = styled.View`
    width:100%;
    height:7px;
    /* background-color: #9BCCE0; */
    /* margin: 0px 0px 30px 0px; */
`;

const SettingCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    /* border-width: 2px;
    border-color: red; */
    padding: 5px 20px;
    
`;

const SettingsContLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* border-width: 2px;
    border-color: blue; */
`;

const SmallCardIcon = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
`;

const TextColumn = styled.View`
    width: 200px;
    margin-left:15px;
    justify-content:space-between;
    /* border-color: red;
    border-width: 2px; */
`;

const SmallTitle = styled.Text`
    font-size: 16px;
    margin: 5px 0;
    color: ${COLORS.MIDWAYBLUE};
    /* font-weight:300; */
`;

const Amount = styled.Text`
    font-size: 20px;
    color: #222222;
    /* margin-top:5px; */
    align-self: flex-start;
    font-weight: 700;
`;

const Arrow = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
    align-self: flex-end;
    /* border-color: red;
    border-width: 2px; */
`;

const Line = styled.View`
    width:70%;
    height:2px;
    background-color: #c4c4c4;
    margin: 0px 20px 10px 50px;
    align-self: flex-end;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    align-self: center;
    font-weight: 700;
`;



export default function AddFundsTabTicket({
    ticketBalance = "$4.05",
    ticketLoadAmount = '$10.00',
    ticketPaymentType = 'Visa',
    selectTicketAmount = () => { },
    selectTicketPayment = () => { },
    AddFundsConfirm = () => { },
}) {



    // ====== MODAL ANIMATION START ======
    const [animationAmount, setAnimationAmount] = useState(new Animated.Value(0));
    const [animationPay, setAnimationPay] = useState(new Animated.Value(0));

    const openModalAmount = animationAmount.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const openModalPay = animationPay.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const modalAmountTrigger = () => {
        Animated.timing(animationAmount, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
        }).start();
    }

    const modalPayTrigger = () => {
        Animated.timing(animationPay, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
        }).start();
    }


    const closeModalAmount = () => {
        Animated.timing(animationAmount, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false,
            delay: 500
        }).start();

    }

    const closeModalPay = () => {
        Animated.timing(animationPay, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false,
            delay: 500
        }).start();

    }


    const openAmount = {
        transform: [
            { scale: openModalAmount }
        ]
    };

    const openPay = {
        transform: [
            { scale: openModalPay }
        ]
    };





    // ====== MODAL ANIMATION END ======

    return (
        <Container>
            <Animated.View style={[styles.animationCont, styles.amountPosition, openAmount]}>
                <TicketTab
                    closeAmount={closeModalAmount}
                />
            </Animated.View>
            <Animated.View style={[styles.animationCont, styles.paymentPosition, openPay]}>
                <PaymentTab
                    closePay={closeModalPay}
                />
            </Animated.View>
            <Notch />
            <Title>Reload Stored Value</Title>
            <Divider />

            {/* TO this ticket: */}
            <SettingCont>
                <SettingsContLeft>
                    <SmallCardIcon
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    />
                    <TextColumn>
                        <SmallTitle>Current Balance</SmallTitle>
                        <Amount>{ticketBalance}</Amount>
                    </TextColumn>
                </SettingsContLeft>
            </SettingCont>

            <Line />

            {/* AMOUNT */}
            <SettingCont>
                <SettingsContLeft>
                    <SmallCardIcon
                        source={{ uri: '#', }}
                    />
                    <TextColumn>
                        <SmallTitle>Amount</SmallTitle>
                        <Amount>{ticketLoadAmount}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <TouchableOpacity
                    onPress={modalAmountTrigger}
                    style={styles.modalButton}
                >
                    <AntDesign name="down" size={30} color="#222222" />
                </TouchableOpacity>
            </SettingCont>
            <Line />

            {/* PAYMENT */}
            <SettingCont>
                <SettingsContLeft>
                    <SmallCardIcon
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    />
                    <TextColumn>
                        <SmallTitle>Payment</SmallTitle>
                        <Amount>{ticketPaymentType}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <TouchableOpacity style={styles.modalButton}
                    onPress={modalPayTrigger}
                >
                    <AntDesign name="down" size={30} color="#222222" />
                </TouchableOpacity>


            </SettingCont>
            <Line />



            <TouchableOpacity
                onPress={AddFundsConfirm}
                style={styles.TransferButton}
            >
                <ButtonText>Add {ticketLoadAmount}</ButtonText>
            </TouchableOpacity>

        </Container>
    )

};



const styles = StyleSheet.create({
    TransferButton: {
        backgroundColor: COLORS.CAROLINABLUE,
        width: '60%',
        height: 55,
        borderRadius: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginTop: 15,
        marginRight: 20,
        shadowColor: COLORS.SPACECADET,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },
    modalButton: {
        // backgroundColor: COLORS.ALICEBLUE,
        padding: 10,
    },
    animationCont: {
        alignContent: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderRadius: 16,
        position: 'absolute',
        width: 200,
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    amountPosition: {
        top: 50,
        right: 15,
        height: 288,
    },
    paymentPosition: {
        top: 200,
        right: 15,
        height: 159,
    }
})
