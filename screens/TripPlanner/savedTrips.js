import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';

import WhiteButton from '../../comps/Global/whiteButton.js';

import { COLORS } from '../../constants/styles.js';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

const TopBar = styled.View`
    width: 100%;
    height: 100px;
    background-color: ${COLORS.CAROLINABLUE};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const H1 = styled.Text`
    font-size: 24px;
    color: #fff;
`;

const Button = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
`;

const SavedTrips = ({
    onBackPress = () => {}
}) => {
    return <Page>
        <TopBar>
            <Button onPress={onBackPress}>
                <Icon 
                    name="arrow-back-circle"
                    type="ionicon"
                    color='#fff'
                    size={60}
                />
            </Button>
            <H1>Saved Trips</H1>
            <Button onPress={onBackPress}>
                <Icon 
                    name="add-circle"
                    type="ionicon"
                    color='#fff'
                    size={60}
                />
            </Button>
        </TopBar>
        <WhiteButton />
    </Page>
}

export default SavedTrips;