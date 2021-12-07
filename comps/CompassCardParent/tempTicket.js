
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../../constants/styles";
import PaymentTab from './paySelTab';
import TempTab from './tempSelTab';


const Container = styled.View`
    width: 100%;
    height: 600px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);    
    z-index: 8;

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
    margin: 10px 0px 0px 0px;
    font-weight: 500;
`;

const SubTitle = styled.Text`
    font-size: 18px;
    margin: 5px 0;
    align-self: center;
    /* margin-top:-5px; */
    margin-bottom: 2px;
    color: #222222;
`;

const SmallTitle = styled.Text`
    font-size: 16px;
    margin: 5px 0;
    color: ${COLORS.MIDWAYBLUE};
`;

const Divider = styled.View`
    width:100%;
    height:7px;
`;

const SettingCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding: 5px 20px;
`;

const SettingsContLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
`;

const Amount = styled.Text`
    font-size: 20px;
    color: #222222;
    align-self: flex-start;
    font-weight: 700;
`;

const Arrow = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
    align-self: flex-end;
`;

const Line = styled.View`
    width:85%;
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

const TabButton = styled.TouchableOpacity`
        background-color: ${props => props.backgroundColor};
        width: 60%;
        height: 55;
        border-radius: 10px;
        align-self: flex-end;
        justify-content: center;
        margin-top: 15px;
        margin-right: 20px;
`;



export default function TempTicket({
    zoneType = "1-Zone",
    zoneAmount = '$100.25',
    passPaymentType = 'Visa',
    tempTicketConfirm = (passPaymentType, zoneAmount, zoneType) => { },
    startAnimation = () => { },
    startTimer = () => { },
}) {



    const [animationZone, setAnimationZone] = useState(new Animated.Value(0));
    const [animationPay, setAnimationPay] = useState(new Animated.Value(0));

    const openModalZone = animationZone.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const openModalPay = animationPay.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const modalZoneTrigger = () => {
        Animated.timing(animationZone, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
        }).start();
    };

    const modalPayTrigger = () => {
        Animated.timing(animationPay, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
        }).start();
    };

    const [zone, setZone] = useState(1);


    if (zone === 1) {
        zoneType = 'Day Pass Adult';
        zoneAmount = '$10.75';
    }
    if (zone === 2) {
        zoneType = '1-Zone Adult';
        zoneAmount = '$2.45';
    }
    if (zone === 3) {
        zoneType = '2-Zone Adult';
        zoneAmount = '$3.55';
    }
    if (zone === 4) {
        zoneType = '3-Zone Adult';
        zoneAmount = '$4.60';
    }
    if (zone === 5) {
        zoneType = 'Day Pass Concession';
        zoneAmount = '$8.45';
    }
    if (zone === 6) {
        zoneType = '1-Zone Concession';
        zoneAmount = '$2.00';
    }
    if (zone === 7) {
        zoneType = '2-Zone Concession';
        zoneAmount = '$3.00';
    }
    if (zone === 8) {
        zoneType = '3-Zone Concession';
        zoneAmount = '$4.05';
    }


    function closeModalZone(selected) {
        if (selected.id == 1) {
            setZone(1);
        }
        if (selected.id == 2) {
            setZone(2);
        }
        if (selected.id == 3) {
            setZone(3);
        }
        if (selected.id == 4) {
            setZone(4);
        }
        if (selected.id == 5) {
            setZone(5);
        }
        if (selected.id == 6) {
            setZone(6);
        }
        if (selected.id == 7) {
            setZone(7);
        }
        if (selected.id == 8) {
            setZone(8);
        }
        Animated.timing(animationZone, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false,
            delay: 500
        }).start();

    };
    const [payment, setPayment] = useState(1);
    if (payment === 1) {
        passPaymentType = 'Mastercard';
    }
    if (payment === 2) {
        passPaymentType = 'Visa';
    }

    function closeModalPay(selected) {
        console.log('payment', selected.id);
        if (selected.id == 1) {
            setPayment(1);
        }
        if (selected.id == 2) {
            setPayment(2);
        }

        Animated.timing(animationPay, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false,
            delay: 500
        }).start();

    };


    const openZone = {
        transform: [
            { scale: openModalZone }
        ]
    };

    const openPay = {
        transform: [
            { scale: openModalPay }
        ]
    };

    const [confPay, setConfPay] = useState(2);
    const [buttonColour, setButtonColour] = useState(COLORS.CAROLINABLUE);
    const [payText, setPayText] = useState('Purchase');


    function changeButton() {
        console.log('confPay =', confPay)

        if (confPay == 1) {
            setButtonColour(COLORS.CAROLINABLUE);
            setPayText('Purchase');
            setConfPay(2);
        }

        if (confPay == 2) {
            setButtonColour(COLORS.LIMEGREEN);
            setPayText('Confirm?');
            setConfPay(3);
        }

        if (confPay == 3) {
            tempTicketConfirm();
            setButtonColour(COLORS.CAROLINABLUE);
            setPayText('Purchase');
            setConfPay(2);
            startAnimation();
            startTimer();
        }
    }


    return (
        <Container>
            <Animated.View style={[styles.animationCont, styles.zonesPosition, openZone]}>
                <TempTab
                    closeZone={closeModalZone}
                />
            </Animated.View>
            <Animated.View style={[styles.animationCont, styles.paymentPosition, openPay]}>
                <PaymentTab
                    closePay={closeModalPay}
                />
            </Animated.View>
            <Notch />
            <Title>Select single use ticket</Title>
            <SubTitle>Day Pass valid 24 hours</SubTitle>
            <SubTitle>Single journey valid 90 minutes</SubTitle>
            <Divider />

            {/* ZONE */}
            <SettingCont>
                <SettingsContLeft>
                    <TextColumn>
                        <SmallTitle>Select zone</SmallTitle>
                        <Amount>{zoneType}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <TouchableOpacity
                    onPress={modalZoneTrigger}
                    style={styles.modalButton}
                // {selectZone}
                >
                    <AntDesign name="down" size={30} color="#222222" />
                </TouchableOpacity>

            </SettingCont>

            <Line />

            {/* AMOUNT */}
            <SettingCont>
                <SettingsContLeft>
                    <TextColumn>
                        <SmallTitle>Amount</SmallTitle>
                        <Amount>{zoneAmount}</Amount>
                    </TextColumn>
                </SettingsContLeft>
            </SettingCont>
            <Line />

            {/* PAYMENT */}
            <SettingCont>
                <SettingsContLeft>
                    <TextColumn>
                        <SmallTitle>Payment</SmallTitle>
                        <Amount>{passPaymentType}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <TouchableOpacity style={styles.modalButton}
                    onPress={modalPayTrigger}
                >
                    <AntDesign name="down" size={30} color="#222222" />
                </TouchableOpacity>
            </SettingCont>
            <Line />



            <TabButton
                onPress={() => { changeButton() }}
                backgroundColor={buttonColour}
            >
                <ButtonText>{payText}</ButtonText>
            </TabButton>

        </Container>
    )

}

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
        padding: 10,
    },
    animationCont: {
        alignContent: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderRadius: 16,
        position: 'absolute',
        backgroundColor: 'red',
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
    zonesPosition: {
        top: 15,
        right: 15,
        height: 468,
    },
    paymentPosition: {
        top: 200,
        right: 15,
        height: 106,
    },
});
