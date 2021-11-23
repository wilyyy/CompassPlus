import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Container = styled.View`
    width: 375px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
    
`;

const Notch = styled.View`
    width: 80px;
    height: 10px;
    position: relative;
    top: 25;
    background-color: #EFEFF0;
    align-self: center;
    border-radius: 50px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.1px;
    text-align: center;
    color: #252b42;
    top: 60;
    padding-bottom: 40;
`;

const SettingCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const SettingsContLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 30;
    position: relative;
    top: 10;
`;

const SmallCardIcon = styled.Image`
    width:50px;
    height:50px;
    position: relative;
    top: 10;
    left: 10;
`;

const TextColumn = styled.View`
    width: 200px;
    position: relative;
    left: 30;

`;

const SmallTitle = styled.Text`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.1px;
    text-align: left;
    color: #009ddc;
`;

const Amount = styled.Text`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.1px;
    text-align: left;
    align-self: flex-start;
    top: 20;
`;

const Arrow = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
    align-self: flex-end;
`;

const Line = styled.View`
    display: flex;
    width: 70%;
    height: 2px;
    position: relative;
    top: 30;
    right: 30;
    background-color: #575759;
    align-self: flex-end;
`;

const ButtonText = styled.Text`
    font-size: 24;
    font-weight: bold;
    line-height: 24;
    letter-spacing: 0;
    color: #fff;
    text-align: center;
`;





export default function TransferBalanceTab({
    FromCardBalance = "$4.05",
    ToCardBalance = "$0.00",
    TransferFundsVisability = () => { },
    ActivateFromModal = () => { },
    ActivateToModal = () => { },
    TransferAction = () => { },
}) {

    return (
        <Container>
            <Notch />
            <Title>Transfer balance</Title>

            {/* FROM this ticket: */}

            <SettingCont>
                <SettingsContLeft>
                    <SmallCardIcon
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    />
                    <TextColumn>
                        <SmallTitle>From this ticket</SmallTitle>
                        <Amount>{FromCardBalance}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <AntDesign name="down" size={30} style={styles.arrow} />
            </SettingCont>

            <Line />

            {/* TO this ticket */}

            <SettingCont>
                <SettingsContLeft>
                    <SmallCardIcon
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    />
                    <TextColumn>
                        <SmallTitle>To this ticket</SmallTitle>
                        <Amount>{ToCardBalance}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <AntDesign name="down" size={30} style={styles.arrow}
                    onPress={ActivateToModal}
                />

            </SettingCont>
            <Line />
            <TouchableOpacity
                onPress={TransferFundsVisability}
                style={styles.TransferButton}
            >
                <ButtonText onPress={TransferAction}>Transfer {FromCardBalance}</ButtonText>
            </TouchableOpacity>

        </Container>
    )

};



const styles = StyleSheet.create({
    TransferButton: {
        backgroundColor: '#009DDc',
        width: 250,
        height: 55,
        display: 'flex',
        position: 'relative',
        right: 30,
        top: 60,
        borderRadius: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset:{width: 0, height: 4},
    },
    arrow: {
        color: "#252b42",
        position: 'relative',
        top: 55,
        right: 25,

    }
})