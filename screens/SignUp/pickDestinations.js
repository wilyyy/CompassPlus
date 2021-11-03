import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from "styled-components/native";
import { View, Dimensions, StyleSheet, Text, Pressable } from 'react-native';
import { CheckBox, ThemeProvider } from 'react-native-elements'
import { Divider } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../../constants/styles.js';

/*
4 state for confirm select : home, school, work, other
if corresponding checkbox selected = return appropriate screens
up to 4 screens
*/

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.CAROLINABLUE}
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
    align-items: center;
`

const BusTrackerCont = styled.View`
    width: 100%;
    height: 51px;
`;

const H1 = styled.Text`
    font-size: 40px;
    text-align: center;
    color: #fff;
`;

const H2 = styled.Text`
    font-size: 24px;
    color: #fff;
`;

//First Screen

const FirstScreenCont = styled.View`
    width: 295px;
    height: 480px;
    justify-content: space-between;
    align-items: center;
`;

const AllTheCheckboxes = styled.View`
    width: 111px;
    height: 483px;
    align-items: center;
`;

const CheckboxCont = styled.View`
    flex-direction: row;
    width: 111px;
    height: 160px;
    align-items: center;
    justify-content: center;
`;

const CheckboxLock = styled.View`
    width: 30px;
    height: 30px;
`;

const PickDestinations = () => {

    const [isSelected, setSelection] = useState(false);

    return <Page>
        <Container>
            <Skip>
                <Text style={styles.text_bold_white}>Skip</Text>
            </Skip>
            <BusTrackerCont>
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
            </BusTrackerCont>
            <FirstScreenCont>
                <H1>Pick your transit destinations</H1>
                <AllTheCheckboxes>
                    <CheckboxCont>
                        <CheckBox 
                            size={30}
                            color={'#fff'}
                        />
                        <H2>Home</H2>
                    </CheckboxCont>
                </AllTheCheckboxes>
            </FirstScreenCont>
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

