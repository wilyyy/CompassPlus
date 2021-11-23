import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    width: 345;
    height: 240px;
    background-color: #fff;
    border-radius: 30px;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding:20px;
    padding-left:40px;
    /* border-color: red;
    border-width: 2px; */
    
`;



const Title = styled.Text`
    font-size: 24px;
    color: #222222;
    margin: 20px 0px;
    font-weight: 700;
    text-align:center;
`;



const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    align-self: center;
    font-weight: 700;
`;





export default function DeleteCard({
    cardType = 'Ticket',
    Cancel = () => { },
    Delete = () => { },
}) {


    return (
        <Container>
            <AntDesign name="close" style={styles.closeButton} size={30} color="#222222" />
            <Title>Are you sure you would like to delete this {cardType}?</Title>

            <View style={styles.buttonsCont}>
                <TouchableOpacity
                    onPress={Cancel}
                    style={styles.Button}
                >
                    <ButtonText>Cancel</ButtonText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={Delete}
                    style={styles.Button}
                >
                    <ButtonText>Delete</ButtonText>
                </TouchableOpacity>
            </View>

        </Container>
    )

};



const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#009DDc',
        color: 'blue',
        width: 130,
        height: 55,
        borderRadius: 50,
        alignSelf: 'flex-end',
        right: 15,
        justifyContent: 'center',
        marginTop: 50,
    },
    buttonsCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
        top: -30,
    },
    closeButton: {
        alignSelf: 'flex-end',
        margin: '0px 5px',
        top: 10
    }
})