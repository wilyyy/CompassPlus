import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    width: 375px;
    height: 425px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);
    
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
    left: 30;
    top: 10;
`;

const TextColumn = styled.View`
    width: 200px;
    position: relative;
    left: 35;
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
    /* border-color: red;
    border-width: 2px; */
`;

const Line = styled.View`
    display: flex;
    width: 65%;
    height: 2px;
    position: relative;
    top: 30;
    right: 45;
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





export default function MergeTab({
    fromAmount = '$10.00',
    toAmount = '$4.30',
    saveMerge = () => { },
}) {


    return (
        <Container>
            <Notch />
            <Title>Merge Tickets</Title>

            {/* from this ticket: */}

            <SettingCont>
                <SettingsContLeft>
                    <SmallCardIcon
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    />
                    <TextColumn>
                        <SmallTitle>From this ticket</SmallTitle>
                        <Amount>{fromAmount}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <AntDesign name="down" size={30} style={styles.arrow} />


            </SettingCont>

            <Line />

            {/* to ticket */}

            <SettingCont>
                <SettingsContLeft>
                    <SmallCardIcon
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    />
                    <TextColumn>
                        <SmallTitle>To this ticket</SmallTitle>
                        <Amount>{toAmount}</Amount>
                    </TextColumn>
                </SettingsContLeft>
                <AntDesign name="down" size={30} style={styles.arrow} />
            </SettingCont>
            <Line />


            <TouchableOpacity
                onPress={saveMerge}
                style={styles.MergeButton}
            >
                <ButtonText>Merge</ButtonText>
            </TouchableOpacity>

        </Container>
    )

};



const styles = StyleSheet.create({
    MergeButton: {
        backgroundColor: '#009DDc',
        width: 150,
        height: 55,
        display: 'flex',
        position: 'relative',
        right: 40,
        top: 80,
        borderRadius: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset:{width: 0, height: 4},
    },
    editButtonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: '#009ddc'
    },
    arrow: {
        color: "#252b42",
        position: 'relative',
        top: 55,
        right: 45,

    }
})