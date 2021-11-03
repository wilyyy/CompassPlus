import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from "styled-components/native";
import { Input } from 'react-native-elements';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../../constants/styles.js';
import SignUpCheckBox from '../../comps/SignUp/checkbox.js';
import SignUpTransitCard from '../../comps/SignUp/signUpTransitCard.js';

/* CHECKBOX ALGORITHM
4 return states for confirm select : home, school, work, other
if corresponding checkbox selected = return appropriate screens
up to 4 screens

use a counter state to return 4 screens

if checkbox clicked an odd number of times dont add to counter
if checkbox clicked an even number of times add to counter

if no checkbox clicked, counter is still 0, add a modal that says
"you have no routes selected, conitnue to the app anyway or nah, stay?"

allocate checkbox to each page by making seperate functions if pressed odd number
of times, make counter = whatever page its allocated to
for example if school checkbox pressed odd number of times, make counter = 2

skip will bring up a modal are u sure which pressing yes to will route to home page
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

const Container = styled.View`
    width: 90%;
    height: 700px;
    align-items: center;
    justify-content: space-evenly;
`

const Skip = styled.Pressable`
    font-size: 16px;
    font-weight: 700;
    align-self: flex-end;
`;

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

const ContinueButton = styled.TouchableOpacity`
    background-color: #fff;
    width: 244px;
    height: 58px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
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
    height: 200px;
    align-items: center;
    justify-content: space-between;
`;

const CheckboxCont = styled.View`
    flex-direction: row;
    width: 111px;
    align-items: center;
    justify-content: space-between;
`;

const PickDestinations = () => {
    const [pageCounter, setPageCounter] = useState(0);

    const IncrementCount = () => {
        if (pageCounter < 5){
            setPageCounter(prevState => prevState + 1);
            console.log(pageCounter);
          }
          else{
            setPageCounter(0);
          }
    }

    if(pageCounter === 0){
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
                            <SignUpCheckBox />
                            <H2>Home</H2>
                        </CheckboxCont>
                        <CheckboxCont>
                            <SignUpCheckBox />
                            <H2>School</H2>
                        </CheckboxCont>
                        <CheckboxCont>
                            <SignUpCheckBox />
                            <H2>Work</H2>
                        </CheckboxCont>
                        <CheckboxCont>
                            <SignUpCheckBox />
                            <H2>Other</H2>
                        </CheckboxCont>
                    </AllTheCheckboxes>
                    <ContinueButton onPress={IncrementCount}>
                        <H2 style={styles.button_text}>Continue</H2>
                    </ContinueButton>
                </FirstScreenCont>
            </Container>
        </Page>
    }

    if(pageCounter === 1){
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
                <H1>Where do you live?</H1>
                <Input
                    placeholder='Search for street address'
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                    color={'white'}
                />
                {/* add props and maybe think about putting these 3 in a scroll view */}
                <Text>Add some routes home to your collection</Text>
                <SignUpTransitCard />
                <SignUpTransitCard />
                <SignUpTransitCard />
                <ContinueButton onPress={IncrementCount}>
                    <H2 style={styles.button_text}>Continue</H2>
                </ContinueButton>
            </Container>
        </Page>
    }
    
}

export default PickDestinations;

const styles = StyleSheet.create({
    text_bold_white: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button_text:{
        fontWeight: 'bold',
        color: COLORS.CAROLINABLUE
    }
});