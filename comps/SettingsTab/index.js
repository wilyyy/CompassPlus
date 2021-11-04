import styled from "styled-components/native";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import notif_icon from '../../assets/notif_icon.png'

const Container = styled.View`
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
`

const Tab = styled.View`
    display: flex;
    margin: 0;
    width: 100%,
    height: 3em,
    background-color: #009ddc;
    padding: 8px;
`

const TText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 0px;
    color: #ffffff;
`

const Icon = styled.View`
    display: flex;
    margin: 0;
    width: 1em,
    height: 1em,
    background-image: url(../../assets/notif_icon.png)
`

const TabUI = ({
    text = 'Notifications',

}) => {
    return (
        <Container>
            <Tab>
                <TText>{text}</TText>
            </Tab>
        </Container>
    )
}

export default TabUI;