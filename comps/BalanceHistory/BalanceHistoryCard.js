import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Pressable, TextInput, ScrollView, Image } from 'react-native';
import { Avatar, Header, Divider, Icon } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageContainer = styled.View`
    width: ${windowWidth};
    height: 200px;
    background-color: ${COLORS.DAVYSGREY};
    justify-content: space-evenly;
`;

const InfoText = styled.Text`
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    text-align: center;
`;

const TitleText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding-top: 60px; 
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
    font-weight: normal;
    padding-left: 15;
    color: ${COLORS.DAVYSGREY};
`;

const Money = styled.Text`
    font-size: 18px;
    font-weight: bold;
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
    font-weight: normal;
    padding-left: 15;
    color: ${COLORS.DAVYSGREY};
    text-align: left;
    flex: 2;
`;

const SubContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;

const Box = styled.View `
    height: 15px;
`;

const BoxSmall = styled.View `
    height: 2px;
    background-color: #F6F6F6;
`;

const SectionContainer = styled.View`
    width: ${windowWidth};
    height: 70px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
`;

const SectionText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding-left: 15;
    color: #ffffff;
`;

const EditRow = styled.View`
    flex-direction: row;
    width: ${windowWidth};
    background-color: white;
    justify-content: space-evenly;
`;



const EditContent = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-left: 5px;
    padding-top: 20px;
    padding-bottom: 15px;
    text-align: left;
    align-self: flex-start;
`;

const BackgroundContainer = styled.View`
    width: ${windowWidth};
    height: 100x;
    background-color: ${COLORS.DAVYSGREY};
`;

const SectionContainerRow = styled.View`
    width: ${windowWidth};
    height: 70px;
    background-color: ${COLORS.CAROLINABLUE};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const BalanceHistoryCard = () => {

    return (
        <ScrollView>
            <Header
                leftComponent={{ icon: 'arrow-back', color: 'white', onPress: () => {}, iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'Balance History', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
                containerStyle={{backgroundColor: '#009DDC', height: 80}}
                />
            <ImageContainer>
                <SubContainer>
                    <Image
                        style={styles.compassCardImage}
                        source={require('../../../CompassPlus/assets/CompassCard.jpg')}
                    />
                    <InfoText>Card ****** *3455</InfoText>
                    <InfoText>Transactions may take up to 24h to update.</InfoText>
                </SubContainer>
            </ImageContainer>
            <DateRow>
                <DateText>Wed 27th Oct 2021</DateText>
                <Money>-$6.28</Money>
            </DateRow>
            <FareRow>
                <Image
                    style={styles.transportIcon}
                    source={require('../../../CompassPlus/assets/TransportIcons/Bus.png')}
                />
                <Time>{"05:06pm > 05:32pm"}</Time>
                <Money>-$2.08</Money>
            </FareRow>
            <BoxSmall />
            <FareRow>
                <Image
                    style={styles.transportIcon}
                    source={require('../../../CompassPlus/assets/TransportIcons/Metro.png')}
                />
                <Time>{"11:47am > 11:52am"}</Time>
                <Money>-$0.00</Money>
            </FareRow>
            <BoxSmall />
            <FareRow>
                <Image
                    style={styles.transportIcon}
                    source={require('../../../CompassPlus/assets/TransportIcons/Seabus.png')}
                />
                <Time>{"11:05am > 11:45am"}</Time>
                <Money>-$4.20</Money>
            </FareRow>
            <Box />
            <DateRow>
                <DateText>Mon 25th Oct 2021</DateText>
                <Money>-$12.75</Money>
            </DateRow>
            <FareRow>
                <Image
                    style={styles.transportIcon}
                    source={require('../../../CompassPlus/assets/TransportIcons/Metro.png')}
                />
                <Time>{"08:12pm > 08:52pm"}</Time>
                <Money>-$3.50</Money>
            </FareRow>
            <BoxSmall />
            <FareRow>
                <Image
                    style={styles.transportIcon}
                    source={require('../../../CompassPlus/assets/TransportIcons/Metro.png')}
                />
                <Time>{"03:06pm > 03:45pm"}</Time>
                <Money>-$3.50</Money>
            </FareRow>
            <BoxSmall />
            <FareRow>
                <Image
                    style={styles.transportIcon}
                    source={require('../../../CompassPlus/assets/TransportIcons/Bus.png')}
                />
                <Time>{"11:15am > 11:38am"}</Time>
                <Money>-$2.25</Money>
            </FareRow>
            <BoxSmall />
            <FareRow>
                <Image
                    style={styles.transportIcon}
                    source={require('../../../CompassPlus/assets/TransportIcons/Bus.png')}
                />
                <Time>{"09:15am > 10:02am"}</Time>
                <Money>-$3.50</Money>
            </FareRow>
      </ScrollView>
    );
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
        color: '#009DDC'
    },
    input: {
        width: 185,
        height: 55,
        borderWidth: 2,
        borderColor: '#C4C4C4',
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
});
