import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image } from 'react-native';
import { Header } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
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
import AppLoading from 'expo-app-loading';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageContainer = styled.View`
    width: ${windowWidth};
    height: 240px;
    background-color: ${COLORS.SPACECADET};
    justify-content: space-evenly;
    top:-10px;
`;

const InfoText = styled.Text`
    font-size: 16px;
    color: #fff;
    text-align: center;
    font-family: 'Ubuntu_400Regular';
`;

const DateRow = styled.View`
    flex-direction: row;
    height: 50px;
    align-items: center; 
    justify-content: space-between;
    background-color: #F6F6F6;
`;

const DateText = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_400Regular';

    padding-left: 15;
    color: ${COLORS.DAVYSGREY};
`;

const Money = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_500Medium';
    padding-right: 15;
    color: ${COLORS.DAVYSGREY};
`;

const FareRow = styled.View`
    flex-direction: row;
    height: 50px;
    align-items: center; 
    justify-content: space-between;
    background-color: #fff;
`;

const Time = styled.Text`
    font-size: 16px;
    font-family: 'Ubuntu_400Regular';
    padding-left: 15;
    color: ${COLORS.DAVYSGREY};
    text-align: left;
    flex: 2;
`;

const SubContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;

const Box = styled.View`
    height: 15px;
`;

const BoxSmall = styled.View`
    height: 2px;
    background-color: #F6F6F6;
`;

const CompassPlaceHolder = styled.View`
    min-width: 250px;
    width:55%;
    height: 140px;
    border-radius: 15px;
    align-self: center;
    padding:5%;
    margin:5%;
    background-color: ${COLORS.CAROLINABLUE};
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);
    overflow:hidden;
`;

const CardTitle = styled.Text`
    font-size: 14px;
    font-family: 'Ubuntu_500Medium';
    color: #fff;
`;

const BalanceHistoryCard = ({ navigation }) => {
    navigation = useNavigation()
    var anim = useRef();

    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View>
                <Header
                    leftComponent={{
                        icon: 'arrow-back',
                        color: 'white',
                        size: 30,
                        onPress: () => { navigation.navigate('Account') },
                        iconStyle: { color: '#fff' }

                    }}
                    centerComponent={{
                        text: 'Balance History',
                        style: {
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 24,
                            fontFamily: 'Ubuntu_700Bold'
                        }
                    }}
                    containerStyle={{
                        backgroundColor: COLORS.SPACECADET,
                        height: 100,
                        borderBottomWidth: 0,
                    }}
                />
                <ImageContainer>
                    <SubContainer>
                        <CompassPlaceHolder>
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
                        </CompassPlaceHolder>
                        <InfoText>Card No: 016372 9281 9273</InfoText>
                        <InfoText>Transactions may take up to 24h to update.</InfoText>
                    </SubContainer>
                </ImageContainer>
                <ScrollView>
                    <DateRow>
                        <DateText>Thu 2nd Dec 2021</DateText>
                        <Money>-$6.28</Money>
                    </DateRow>
                    <FareRow>
                        <Icon
                            name="bus"
                            type="font-awesome-5"
                            color={COLORS.SPACECADET}
                            style={styles.icon}
                        />
                        <Time>{"05:06pm > 05:32pm"}</Time>
                        <Money>-$2.08</Money>
                    </FareRow>
                    <BoxSmall />
                    <FareRow>
                        <Icon
                            name="bus"
                            type="font-awesome-5"
                            color={COLORS.SPACECADET}
                            style={styles.icon}
                        />
                        <Time>{"11:47am > 11:52am"}</Time>
                        <Money>-$0.00</Money>
                    </FareRow>
                    <BoxSmall />
                    <FareRow>
                        <Icon
                            name="bus"
                            type="font-awesome-5"
                            color={COLORS.SPACECADET}
                            style={styles.icon}
                        />
                        <Time>{"11:05am > 11:45am"}</Time>
                        <Money>-$4.20</Money>
                    </FareRow>
                    <Box />
                    <DateRow>
                        <DateText>Wed 1st Dec 2021</DateText>
                        <Money>-$12.75</Money>
                    </DateRow>
                    <FareRow>
                        <Icon
                            name="bus"
                            type="font-awesome-5"
                            color={COLORS.SPACECADET}
                            style={styles.icon}
                        />
                        <Time>{"08:12pm > 08:52pm"}</Time>
                        <Money>-$3.50</Money>
                    </FareRow>
                    <BoxSmall />
                    <FareRow>
                        <Icon
                            name="bus"
                            type="font-awesome-5"
                            color={COLORS.SPACECADET}
                            style={styles.icon}
                        />
                        <Time>{"03:06pm > 03:45pm"}</Time>
                        <Money>-$3.50</Money>
                    </FareRow>
                    <BoxSmall />
                    <FareRow>
                        <Icon
                            name="bus"
                            type="font-awesome-5"
                            color={COLORS.SPACECADET}
                            style={styles.icon}
                        />
                        <Time>{"11:15am > 11:38am"}</Time>
                        <Money>-$2.25</Money>
                    </FareRow>
                    <BoxSmall />
                    <FareRow>
                        <Icon
                            name="bus"
                            type="font-awesome-5"
                            color={COLORS.SPACECADET}
                            style={styles.icon}
                        />
                        <Time>{"09:15am > 10:02am"}</Time>
                        <Money>-$3.50</Money>
                    </FareRow>
                </ScrollView>
            </View>
        );
    }
};

export default BalanceHistoryCard;


const styles = StyleSheet.create({
    transportIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
    },
    compassCardImage: {
        width: 200,
        height: 100,
        marginBottom: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.CAROLINABLUE
    },
    input: {
        width: 185,
        height: 55,
        borderWidth: 2,
        borderColor: COLORS.LIGHTGREY,
        borderRadius: 8,
        padding: 10,
    },
    buttontwo: {
        width: 300,
        height: 55,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    lottie: {
        top: '2%',
        left: '-0.5%',
        opacity: 1,
        position: 'absolute',
        width: 265,
    },
    placeholderBg: {
        width: 400,
        height: 300,
        right: 40,
        top: -50,
        opacity: 0.10,
    },
    icon: {
        marginLeft: '10%'
    },
});
