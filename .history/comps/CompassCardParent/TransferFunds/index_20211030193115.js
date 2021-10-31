import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
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
    margin: 20px 0px 0px;
    align-self: center;
    border-radius: 50px;
`;

const Title = styled.Text`
    font-size: 18px;
    color: #222222;
    align-self: center;
    margin: 20px 0px;
    font-weight: 700;
`;

const Divider = styled.View`
    width:100%;
    height:7px;
    background-color: #9BCCE0;
    margin: 0px 0px 30px 0px;
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

const SmallCardIcon = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
`;

const TextColumn = styled.View`
    width: 200px;
    margin-left:15px;
    /* border-color: red;
    border-width: 2px; */
`;

const SmallTitle = styled.Text`

`;

const Amount = styled.Text`
    font-size: 18px;
    color: #222222;
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
    margin: 0px 20px 30px 50px;
    align-self: flex-end;
`;







export default function TransferBalanceTab({
    FromCardBalance = "$4.05",
    ToCardBalance = "$0.00",
}) {

    return (
        <Container>
            <Notch />
            <Title>Transfer balance</Title>
            <Divider />

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
                <Arrow
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                />
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
                <Arrow
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                />

            </SettingCont>
            <Line />
            <TouchableOpacity
                style={styles.TransferButton}
            >
                <Title>Transfer {FromCardBalance}</Title>
            </TouchableOpacity>

        </Container>
    )

};



const styles = StyleSheet.create({
    TransferButton: {
        backgroundColor: '#009DDc',
        color: 'blue',
        width: 220,
        height: 55,
        borderRadius: 50,
        alignSelf: 'flex-end',
        right: 15,
    }
})