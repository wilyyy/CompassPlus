import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from "styled-components/native";
import { View, Dimensions, StyleSheet, Text, Pressable } from 'react-native';
import { Divider } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../../constants/styles.js';

/*
4 state for confirm select : home, school, work, other
if corresponding checkbox selected = return appropriate screens
up to 4 screens
*/

const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.CAROLINABLUE};
    align-items: center;
    justify-content: center;
`;

const Skip = styled.Pressable`
    font-size: 16px;
    font-weight: 700;
    align-self: flex-end;
`;

const Container = styled.View`
    width: 90%;
    height: 700px;
`

const PickDestinations = () => {
    return <Page>
        <Container>
            <Skip>
                <Text style={styles.text_bold_white}>Skip</Text>
            </Skip>
            <MaterialIcon
                name="bus-side"
                size={40}
                color="#fff"
            />
            <Divider
                orientation="horizontal"
                width={2}
                color={'#fff'}
            />
        </Container>
    </Page>
}

export default PickDestinations;

const styles = StyleSheet.create({
    text_bold_white: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

