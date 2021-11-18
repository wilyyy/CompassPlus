import React, { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";


const Container = styled.View`
    width: 350px;
    height: 550px;
    background-color: #fff;
    border-radius: 15px;
    margin: 100px 0px 0px 25px;
    top:-6%;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const CompassPlaceHolder = styled.View`
    width: 350px;
    height: 200px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-self: center;
    background-color: ${COLORS.ALICEBLUE};
    border-width: 4px;
    border-style: dotted;
    border-color: ${COLORS.CAROLINABLUE};
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);

`;

const ParentButtonCont = styled.View`
    height:100px;
    justify-content: center;
    align-items: center;

    /* border-width: 2px;
    border-color: red; */
`;

const TicketsCont = styled.View`
    align-items: center;
    justify-content: center;
    height:250px;
    flex-direction: column;
    
    /* border-width: 2px;
    border-color: red; */
`;

const Hr = styled.View`
    width:80%;
    background-color: ${COLORS.SPACECADET};
    height:2px;
    align-self: center;
`;


export default function AddCardManager({
    AddTicket = () => { },
    countdown1 = '90mins...',
    countdown2 = '55mins...',
    countdown3 = '10mins...',

}) {
    return (
        <Container>
            <CompassPlaceHolder />

            <ParentButtonCont>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Add Tickets</Text>
                </Pressable>
            </ParentButtonCont>
            <Hr />
            <TicketsCont>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ticket 1 | {countdown1}</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ticket 2 | {countdown2}</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ticket 3 | {countdown3}</Text>
                </Pressable>

            </TicketsCont>

        </Container>
    );
}

const styles = StyleSheet.create({

    button: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 55,
        backgroundColor: '#fff',
        borderColor: '#009ddc',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: '#009ddc',
    },
})