import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from "styled-components/native";
import { View, TextInput, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';


import { COLORS } from '../../constants/styles.js';
import SignUpCheckBox from '../../comps/SignUp/checkbox.js';
import SignUpTransitCard from '../../comps/SignUp/signUpTransitCard.js';
import BusProgressBar from '../../comps/SignUp/busProgressBar.js';
import SignUpInput from '../../comps/SignUp/signUpInput.js';
import SignUpTransitCardScroll from '../../comps/SignUp/signUpTransitCardScroll.js';
import WhiteButton from '../../comps/Global/whiteButton.js';

import { Video, AVPlaybackStatus } from 'expo-av';

//put bus on its own component ting, make position a prop and add a position absolute circle on the divider
//back button
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
asd
skip will bring up a modal are u sure which pressing yes to will route to home page
*/

//think about using https://docs.expo.dev/versions/latest/react-native/usewindowdimensions/#width
// turn h2 below text input into smaller h3 for consistency
//make a bottom contaienr just fo rbutton so its in the same place every time
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
    font-size: 38px;
    font-family: 'Ubuntu_400Regular';
    text-align: center;
    color: #fff;
`;

const H2 = styled.Text`
    font-size: 24px;
    font-family: 'Ubuntu_400Regular';
    color: #fff;
`;

const H3 = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_400Regular_Italic';
    color: #fff;
    position: relative;
    text-align: center;
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

const PickDestinations = ({
    navigation = useNavigation()
}) => {
    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });

    const [pageCounter, setPageCounter] = useState(0);

    const IncrementCount = () => {
        if (pageCounter < 4){
            setPageCounter(prevState => prevState + 1);
          } else{
            setPageCounter(0);
          }
    }

    const DecrementCount = () => {
        if (pageCounter > 4){
            setPageCounter(prevState => prevState - 1);
          } else{
            setPageCounter(4);
          }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        if(pageCounter === 0){
            return <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
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
                        <WhiteButton 
                            text="Continue"
                            onButtonPress={IncrementCount}
                        />
                    </Container>
                </ImageBackground>
            </Page>
        }
    
        if(pageCounter === 1){
            return <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
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
                        <H3>Get home quick and safely! Here are some of the fastest ways home!</H3>
                        <SignUpTransitCardScroll />
                        <WhiteButton 
                            text="Continue"
                            onButtonPress={IncrementCount}
                        />
                    </Container>
                </ImageBackground>
            </Page>
        }
    
        if(pageCounter === 2){
            return <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <TopContainer>
                        <Skip>
                            <Text style={styles.text_bold_white}>Skip</Text>
                        </Skip>
                        <BusProgressBar busPosition="45%" circlePosition="47.5%"/>
                    </TopContainer>
                    <Container>
                        <H1 style={styles.text_down}>Where is school?</H1>
                        <SignUpInput />
                        {/* add props and maybe think about putting these 3 in a scroll view */}
                        <H3>Don’t be late to class! Catch the fastest rides to school below!</H3>
                        <SignUpTransitCardScroll />
                        <WhiteButton 
                            text="Continue"
                            onButtonPress={IncrementCount}
                        />
                    </Container>
                </ImageBackground>
            </Page>
        }
    
        if(pageCounter === 3){
            return <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <TopContainer>
                        <Skip>
                            <Text style={styles.text_bold_white}>Skip</Text>
                        </Skip>
                        <BusProgressBar busPosition="67.5%" circlePosition="70%"/>
                    </TopContainer>
                    <Container>
                        <H1 style={styles.text_down}>Where do you work?</H1>
                        <SignUpInput />
                        {/* add props and maybe think about putting these 3 in a scroll view */}
                        <H3>Punch in to work on time! Catch these rides to help you get there faster!</H3>
                        <SignUpTransitCardScroll />
                        <WhiteButton 
                            text="Continue"
                            onButtonPress={IncrementCount}
                        />
                    </Container>
                </ImageBackground>
            </Page>
        }
    
        if(pageCounter === 4){
            return <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <TopContainer>
                        <Skip>
                            <Text style={styles.text_bold_white}>Skip</Text>
                        </Skip>
                        <BusProgressBar busPosition="90%" circlePosition="93%"/>
                    </TopContainer>
                    <Container>
                        <H1 style={styles.text_down}>Another place to go?</H1>
                        <SignUpInput />
                        <H3>Time is money! Get there faster using these rides below!</H3>
                        <SignUpTransitCardScroll />
                        <WhiteButton 
                            text="Continue"
                            onButtonPress={() => navigation.navigate('Home')}
                        />
                    </Container>
                </ImageBackground>
            </Page>
        }
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
        color: COLORS.CAROLINABLUE,
        fontFamily: 'Ubuntu_700Bold'
    },
    text_down: {
        position: 'relative',
        top: 30
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth
    }
});