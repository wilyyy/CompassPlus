import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
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
`;

const Expiration = styled.Text`
    font-size: 18px;
    color: #222222;
    align-self: center;
    margin: 10px 0px;
`;



export default function MobileCard({
    cardSide = false,
}) {

    const [expiration, setExpiration] = useState('December');



    //front of card
    if (cardSide === true) {
        return (
            <Container>
                <CompassPlaceHolder />
                <Expiration>{expiration}</Expiration>

            </Container>
        );
    }

    //back of card
    if (cardSide === false) {
        return (
            <Container>
                <CompassPlaceHolder />
                <Expiration>{expiration}</Expiration>

            </Container>
        );
    }
}

// const styles = StyleSheet.create({

// })