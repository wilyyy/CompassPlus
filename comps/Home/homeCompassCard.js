import React, { useState, useRef } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';
import LottieView from 'lottie-react-native'

import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';

import { COLORS } from '../../constants/styles.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
    width: ${windowWidth};
    height: 40%;
    justify-content: space-evenly;
    align-items: center;
`;

// const Overlay = styled.View`
//     height: 100%;
//     width: 120%;
//     align-items: center;
//     background-color: ${COLORS.SPACECADET};
//     border-bottom-right-radius: 220px;
//     border-bottom-left-radius: 220px;
// `

const CardPlaceholder = styled.TouchableOpacity`
    display: ${props=>props.displayTwo};
     min-width: 330px;
    width:90%;
    height:auto;
    min-height: 200px;
    border: 3px dashed ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.ALICEBLUE};
    border-radius: 15px;
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 1);

`;

const CardPlaceholderActive = styled.TouchableOpacity`
    display: ${props=>props.display};
    min-width: 330px;
    width:90%;
    height: 200px;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.CAROLINABLUE};
    border-radius: 15px;
    overflow: hidden;
    padding:5%;
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 1);

`;

const PlaceholderContent = styled.View`
    width: 90%;
    height: auto;
`;

const H1 = styled.Text`
    color: #fff;
    font-size: 24px;
    margin-top:6%;
    font-family: 'Ubuntu_700Bold';
`;

const H2 = styled.Text`
    color: ${COLORS.CAROLINABLUE};
    font-size: 18px;
    text-align: center;
    font-family: 'Ubuntu_400Regular';
`;

const CardTitle = styled.Text`
    font-size: 24px;
    font-family: 'Ubuntu_500Medium';
    color: #fff;
    z-index: 10;
    position: absolute;
    align-self: flex-start;
    left:5%;
    top:5%;
`;

const HomeCompassCard = ({
    username = "User",
    compass_linked = false,
    onButtonPress = () => { },
    balance = '4.05',
    tapAnimation = () => { },
    activeDisplay = "none",
    passiveDisplay = "none"
}) => {

    const condtion = compass_linked;
    const [linkedCard, setLinkedCard] = useState(false);

    if (linkedCard === false) {
        return <Container>
            <H1>Hello {username}!</H1>
            <CardPlaceholderActive onPress={tapAnimation} display={activeDisplay}>
                <CardTitle>$ {balance}</CardTitle>
                <Image source={require('../../assets/compassPattern.png')}
                    style={styles.placeholderBg}
                />
                <LottieView
                    ref={(ref) => {
                        anim = ref;
                    }}
                    source={require('../../assets/lottie/seabusLottie.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                />
            </CardPlaceholderActive>
            <CardPlaceholder onPress={onButtonPress} displayTwo={passiveDisplay}>
                <PlaceholderContent >
                    <Icon
                        name='plus'
                        type='antdesign'
                        color={COLORS.CAROLINABLUE}
                        shadowOpacity={0.50}
                        shadowRadius={3}
                        shadowOffset={{ width: 0, height: 3 }}
                        shadowColor={COLORS.SPACECADET}
                        size={80}
                        style={styles.plusIcon}
                    />
                    <H2>Add a new or existing Compass Card to your account</H2>
                </PlaceholderContent>
            </CardPlaceholder>
        </Container>
    }

    var anim = useRef();

    // if (linkedCard === true) {
    //     return <Container>
    //         <H1>Hello {username}!</H1>
    //         <CardPlaceholderActive onPress={tapAnimation}>
    //             <CardTitle>$ {balance}</CardTitle>
    //             <Image source={require('../../assets/compassPattern.png')}
    //                 style={styles.placeholderBg}
    //             />
    //             <LottieView
    //                 ref={(ref) => {
    //                     anim = ref;
    //                 }}
    //                 source={require('../../assets/lottie/seabusLottie.json')}
    //                 autoPlay
    //                 loop
    //                 style={styles.lottie}
    //             />
    //         </CardPlaceholderActive>
    //     </Container>
    // }
}

export default HomeCompassCard;

const styles = StyleSheet.create({
    compass: {
        width: 308,
        height: 193
    },
    plusIcon: {
        top: '-10%',

    }, placeholderBg: {
        width: 400,
        height: 300,
        right: 20,
        top: -50,
        opacity: 0.10,
    },
});