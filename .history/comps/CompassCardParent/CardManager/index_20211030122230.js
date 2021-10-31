import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 345px;
    height: 585px;
    background-color: #C4C4C4;
    border-radius: 15px;
`;

const CompassPlaceHolder = styled.View`
    width: 340px;
    height: 215px;
    border-color: red;
    border-width: 2px;
    align-self: center;
    padding: 2px;
`;


export default function MobileCard({
    cardSide = false,
}) {

    //front of card
    if (cardSide === true) {
        return (
            <Container>
                <CompassPlaceHolder />

            </Container>
        );
    }

    //back of card
    if (cardSide === false) {
        return (
            <Container>
                <CompassPlaceHolder />

            </Container>
        );
    }
}

// const styles = StyleSheet.create({

// })