import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";


const Container = styled.View`
    width: 350px;
    height: 585px;
    background-color: #fff;
    border-radius: 15px;
    margin: 100px 15px 0px 25px;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const CompassPlaceHolder = styled.View`
    width: 350px;
    height: 215px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-self: center;
    background-color: ${COLORS.CAROLINABLUE};
`;

const CardBody = styled.View`
    align-self: center;
    justify-content: space-around;
    width: 90%;
    padding: 65px 0px 0px 0px;
    flex-direction: column;
`;




export default function AddCardManager({
    AddTicket = () => { },
    AddPass = () => { },

}) {


    return (
        <Container>
            <CompassPlaceHolder />

            <CardBody>

                <Button
                    title="+Ticket"
                    onPress={AddTicket} />
                <Button
                    title="+Pass"
                    onPress={AddPass} />

            </CardBody>

        </Container>
    );


}

const styles = StyleSheet.create({

    button: {
        borderColor: COLORS.SPACECADET,
        borderWidth: 2,
    }
})