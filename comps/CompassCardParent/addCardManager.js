import React, { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";


const Container = styled.View`
    width: 375px;
    height: 300px;
    background-color: #fff;
    border-radius: 15px;
    margin: 100px 15px 0px 25px;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonCont = styled.View`
    display: flex;
    margin: 0;
    top: 50;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50%;
    flex-direction: column;
`;

const Overlay = styled.View`
    height: 50%;
    width: 100%;
    align-items: center;
    background-color: ${COLORS.SPACECADET};
    border-bottom-right-radius: 220px;
    border-bottom-left-radius: 220px;
`

export default function AddCardManager({
    AddTicket = () => { },
    AddPass = () => { },

}) {
    return (
        <Container>
            <ButtonCont>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Add Ticket</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Add Pass</Text>
                </Pressable>
            </ButtonCont>

        </Container>
    );
}

const styles = StyleSheet.create({

    button: {
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 55,
        backgroundColor: '#fff',
        borderColor: '#009ddc',
        borderWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset:{width: 0,height: 4},
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: '#009ddc',
    },
})