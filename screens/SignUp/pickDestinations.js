import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from "styled-components/native";
// import { Input } from 'react-native-elements';
import { View, TextInput, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../../constants/styles.js';
import SignUpCheckBox from '../../comps/SignUp/checkbox.js';
import SignUpTransitCard from '../../comps/SignUp/signUpTransitCard.js';
import BusProgressBar from '../../comps/SignUp/busProgressBar.js';
import SignUpInput from '../../comps/SignUp/signUpInput.js';

//put bus on its own component ting, make position a prop and add a position absolute circle on the divider

/* CHECKBOX ALGORITHM
4 return states for confirm select : home, school, work, other
if corresponding checkbox selected = return appropriate screens
up to 4 screens

use a counter state to return 4 screens

if checkbox clicked an even number of times dont add to counter
if checkbox clicked an odd number of times add to counter
use (if checkBoxClick % 2 === 0) ? counter +1 : nothing

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
    background-color: ${COLORS.CAROLINABLUE};
    align-items: center;
`;

const TopContainer = styled.View`
    position: relative;
    top: 7%;
    width: 90%;
    height: 10%;
    justify-content: space-evenly;
`;

const Container = styled.View`
    position: relative;
    width: 90%;
    height: 85%;
    justify-content: space-evenly;
    align-items: center;
`;

const Skip = styled.Pressable`
    font-size: 16px;
    font-weight: 700;
    align-self: flex-end;
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

// First Screen
const AllTheCheckboxes = styled.View`
    width: 120px;
    height: 200px;
    align-items: center;
    justify-content: space-between;
`;

const CheckboxCont = styled.View`
    flex-direction: row;
    width: 120px;
    align-items: center;
`;

const PickDestinations = () => {
    const [pageCounter, setPageCounter] = useState(0);

    const IncrementCount = () => {
        if (pageCounter < 4){
            setPageCounter(prevState => prevState + 1);
            console.log(pageCounter);
          } else{
            setPageCounter(0);
          }
    }

    if(pageCounter === 0){
        return <Page>
            <TopContainer>
                <Skip>
                    <Text style={styles.text_bold_white}>Skip</Text>
                </Skip>
                <BusProgressBar />
            </TopContainer>
            <Container>
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
            </Container>
        </Page>
    }

    if(pageCounter === 1){
        return <Page>
            <TopContainer>
                <Skip>
                    <Text style={styles.text_bold_white}>Skip</Text>
                </Skip>
                <BusProgressBar busPosition="22.5%" circlePosition="25%"/>
            </TopContainer>
            <Container>
                <H1 style={styles.text_down}>Where do you live?</H1>
                <SignUpInput />
                {/* add props and maybe think about putting these 3 in a scroll view */}
                <H2 style={styles.text_ridescreen}>Add some routes home to your collection</H2>
                <SignUpTransitCard icon="train" typeOfRideText="Train"/>
                <SignUpTransitCard />
                <SignUpTransitCard icon="boat" icon_type="ionicon" typeOfRideText="Seabus"/>
                <ContinueButton onPress={IncrementCount}>
                    <H2 style={styles.button_text}>Continue</H2>
                </ContinueButton>
            </Container>
        </Page>
    }

    if(pageCounter === 2){
        return <Page>
            <TopContainer>
                <Skip>
                    <Text style={styles.text_bold_white}>Skip</Text>
                </Skip>
                <BusProgressBar busPosition="45%" circlePosition="47.5%"/>
            </TopContainer>
            <Container>
                <H1 style={styles.text_down}>Where do you go to school?</H1>
                <SignUpInput />
                {/* add props and maybe think about putting these 3 in a scroll view */}
                <H2 style={styles.text_ridescreen}>Add some routes home to your collection</H2>
                <SignUpTransitCard icon="train" typeOfRideText="Train"/>
                <SignUpTransitCard />
                <SignUpTransitCard icon="boat" icon_type="ionicon" typeOfRideText="Seabus"/>
                <ContinueButton onPress={IncrementCount}>
                    <H2 style={styles.button_text}>Continue</H2>
                </ContinueButton>
            </Container>
        </Page>
    }

    if(pageCounter === 3){
        return <Page>
            <TopContainer>
                <Skip>
                    <Text style={styles.text_bold_white}>Skip</Text>
                </Skip>
                <BusProgressBar busPosition="90%" circlePosition="93%"/>
            </TopContainer>
            <Container>
                <H1 style={styles.text_down}>Where do you work?</H1>
                <SignUpInput />
                {/* add props and maybe think about putting these 3 in a scroll view */}
                <H2 style={styles.text_ridescreen}>Add some routes home to your collection</H2>
                <SignUpTransitCard icon="train" typeOfRideText="Train"/>
                <SignUpTransitCard />
                <SignUpTransitCard icon="boat" icon_type="ionicon" typeOfRideText="Seabus"/>
                <ContinueButton onPress={IncrementCount}>
                    <H2 style={styles.button_text}>Continue</H2>
                </ContinueButton>
            </Container>
        </Page>
    }

    if(pageCounter === 4){
        return <Page>
            <TopContainer>
                <Skip>
                    <Text style={styles.text_bold_white}>Skip</Text>
                </Skip>
                <BusProgressBar busPosition="45%" circlePosition="47.5%"/>
            </TopContainer>
            <Container>
                <H1 style={styles.text_down}>Another place to go? No problem!</H1>
                <SignUpInput />
                {/* add props and maybe think about putting these 3 in a scroll view */}
                <H2 style={styles.text_ridescreen}>Add some routes home to your collection</H2>
                <SignUpTransitCard icon="train" typeOfRideText="Train"/>
                <SignUpTransitCard />
                <SignUpTransitCard icon="boat" icon_type="ionicon" typeOfRideText="Seabus"/>
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
    },
    text_down: {
        position: 'relative',
        top: 30
    },
    text_ridescreen: {
        position: 'relative',
        textAlign: 'center',
        fontStyle: 'italic'
    }
});