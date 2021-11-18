import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput, Dimensions, StyleSheet, Text, ImageBackground } from 'react-native';
import styled from "styled-components/native";

import { COLORS } from '../../constants/styles.js';
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

import WhiteButton from '../../comps/Global/whiteButton.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.ALICEBLUE};
    align-items: center;
`;

const Container = styled.View`
    width: 310px;
    height: 550px;
    justify-content: space-between;
    align-items: flex-end;
    top: 170px;
`;

const TextCont = styled.View`
    width: 300px;
    height: 120px;
    justify-content: space-between;
`;

const ButtonCont = styled.View`
    height: 130px;
    width: 240px;
    justify-content: space-between;
`;
const H1 = styled.Text`
    font-family: 'Ubuntu_400Regular';
    font-size: 40px;
    color: #fff;
    align-self: flex-start;
`;

const Button = styled.TouchableOpacity`
    background-color: #fff;
    width: 244px;
    height: 58px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

const LoginScreen = ({ navigation }) => {
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
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <Page>
            <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                <Container>
                    <H1>
                        Welcome to <Text style={styles.text_bold}>CompassPlus</Text>
                    </H1>
                    <TextCont>
                        <TextInput
                            style={styles.text_input}
                            placeholderTextColor='#616161'
                            placeholder="Email ..."
                        />
                        <TextInput
                            style={styles.text_input}
                            placeholderTextColor="#616161"
                            placeholder="Password ..."
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                    </TextCont>
                    <ButtonCont>
                        <WhiteButton
                            text="Sign In"
                            onButtonPress={() => navigation.navigate('Home')}
                        />
                        <WhiteButton
                            text="Create An Account"
                            onButtonPress={() => navigation.navigate('CreateAccount')}
                        />
                    </ButtonCont>
                </Container>
            </ImageBackground>
        </Page>
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    text_input: {
        height: 55,
        width: 300,
        borderWidth: 2,
        borderColor: '#009DDC',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        fontSize: 20
    },
    text_bold: {
        color: '#fff',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 48
    },
    image: {
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    }
});