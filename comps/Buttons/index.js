import styled from "styled-components/native";
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = styled.View`
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
`

const Button = styled.View`
    display: flex;
    margin: 0;
    width: 15.625em,
    height: 3.4375em,
    background-color: ${props=>props.BColor};
    border-radius: ${props=>props.BRadius};
    drop-shadow: 0px 4px 4px #252B42;
    padding: 10px;
`

const BText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 0px;
    color: ${props=>props.TColor};
`

const ButtonUI = ({
    text = 'Continue',
    BColor = '#fff',
    BRadius = '10px',
    TColor = '#fff',

}) => {
    return (
        <Container>
            <Button BColor={BColor} BRadius={BRadius}>
                <BText TColor={TColor}>{text}</BText>
            </Button>
        </Container>
    )
}

export default ButtonUI;