import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 375px;
    height: 400px;
    background-color: #fff;
    border-radius: 15px;
`;

const Notch = styled.View`
    width: 50px;
    height: 10px;
    background-color: #C4C4C4;
    margin: 10px;
    align-self: center;
    border-radius: 50px;
`;

const Title = styled.Text`
    font-size: 18px;
    color: #222222;
    align-self: center;
    margin: 10px 0px;
`;

const Divider = styled.View`
    width:100%;
    height:7px;
    background-color: #9BCCE0;
    margin: 10px 0px;
`;

const SettingCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    /* border-width: 2px;
    border-color: red; */
    padding: 5px 15px;
    
`;

const SettingsContLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* border-width: 2px;
    border-color: blue; */
`;

const TextColumn = styled.View`
    width: 200px;
    border-color: red;
    border-width: 2px;
`;

const SmallTitle = styled.Text`

`;

const Amount = styled.Text`
    font-size: 18px;
    color: #222222;
    align-self: flex-start;
    font-weight: 700;
`;


const MenuItem = styled.Text`
    font-size: 18px;
    color: #222222;
    margin: 0px 5px;
    left: -50px;
`;


const IconBack = styled.Image`
    width:50px;
    height:50px;
    margin-right: 60px;
`;

// start - items for card front

const CompassCardBarcode = styled.Image`
width:90%;
height:100px;
align-self: center;
margin: 30px 0px 10px 0px;
resizeMode:cover;
border-radius: 15px;

/* border-color: red;
border-width: 2px; */
`;

const CompassCardNo = styled.Text`
    font-size: 10px;
    align-self: center;
`;

const CardFooter = styled.View`
    align-self: center;
    justify-content: space-around;
    width: 90%;
    padding: 65px 0px 0px 0px;
    flex-direction: row;
`;

const IconsFrontCont = styled.View`
    width: auto;
    align-items: center;

    /* border-width: 2px;
    border-color:green; */
`;


const IconFront = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
`;

// end - items for card front



export default function TransferBalanceTab({
    FromCardBalance = "$4.05",
    ToCardBalance = "$0.00",
}) {

    return (
        <Container>
            <Notch />
            <Title>Transfer balance</Title>
            <Divider />

            <SettingCont>
                <SettingsContLeft>
                    <IconFront
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    />
                    <TextColumn>
                        <SmallTitle>From this ticket</SmallTitle>
                        <Amount>{FromCardBalance}</Amount>
                    </TextColumn>
                </SettingsContLeft>
            </SettingCont>

        </Container>
    )

};



const styles = StyleSheet.create({
    switch: {
    },
    backButton: {
        zIndex: 2,
        height: '30px',
        position: 'absolute',

    }
})