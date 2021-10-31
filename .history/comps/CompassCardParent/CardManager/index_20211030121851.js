import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 345px;
    height: 585px;
    background-color: #C4C4C4;
`;


export default function MobileCard({
    cardSide = false,
}) {

    //front of card
    if (cardSide === true) {
        return (
            <Container>

            </Container>
        );
    }

    //back of card
    if (cardSide === false) {
        return (
            <Container>

            </Container>
        );
    }
}

// const styles = StyleSheet.create({

// })