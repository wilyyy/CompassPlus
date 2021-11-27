import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';

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
    height: 350px;
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
    width: 350px;
    height: 200px;
    border: 3px dashed ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.75);
    border-radius: 15px;
`;

const PlaceholderContent = styled.View`
    width: 90%;
    height: auto;
`;

const H1 = styled.Text`
    color: #fff;
    font-size: 24px;
    position: relative;
    margin-top:5%;
    font-family: 'Ubuntu_700Bold';
`;

const H2 = styled.Text`
    color: #fff;
    font-size: 18px;
    text-align: center;
    font-family: 'Ubuntu_400Regular';
`;


const HomeCompassCard = ({
    username = "User",
    compass_linked = "no",
    onButtonPress = () => { }
}) => {

    const [linkedCard, setLinkedCard] = useState(compass_linked);

    if (linkedCard === "no") {
        return <Container>
            <H1>Hello {username}!</H1>
            <CardPlaceholder onPress={onButtonPress}>
                <PlaceholderContent >
                    <Icon
                        name='plus'
                        type='antdesign'
                        color={COLORS.ALICEBLUE}
                        shadowOpacity={0.25}
                        shadowRadius={3}
                        shadowOffset={{ width: 0, height: 3 }}
                        shadowColor='#222222'
                        size={80}
                        style={styles.plusIcon}
                    />
                    <H2>Add a new or existing Compass Card to your account</H2>
                </PlaceholderContent>
            </CardPlaceholder>
        </Container>
    }

    if (linkedCard === "yes") {
        return <Container>
            <H1>Hello {username}!</H1>
            <CardPlaceholder onPress={onButtonPress}>
                <Image style={styles.compass} source={require('../../assets/compass_card.png')} />
            </CardPlaceholder>
        </Container>
    }
}

export default HomeCompassCard;

const styles = StyleSheet.create({
    compass: {
        width: 308,
        height: 193
    }
});