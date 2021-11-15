import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, Dimensions, StyleSheet, ImageBackground, Modal } from 'react-native';
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
import PickDestModal from '../../comps/SignUp/pickDestModal.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.ALICEBLUE};
    align-items: center;
`;

const Container = styled.View`
    width: 320px;
    height: 60%;
    justify-content: space-between;
    align-items: center;
    top: 170px;
`;

const TextCont = styled.View`
    width: 300px;
    height: 252px;
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

const CreateAccount = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const OpenModal = () => {
        setModalVisible(true);
    }

    const CloseModal = () => {
        setModalVisible(!modalVisible);
    }

    const PressLater = () => {
        navigation.navigate('Home');
        setModalVisible(false);
    }

    const PressYes = () => {
        navigation.navigate('Onboarding');
        setModalVisible(false);
    }

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
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modal_center}>
                <PickDestModal 
                    onClosePress={CloseModal}
                    onLaterPress={PressLater}
                    onYesPress={PressYes}
                />
            </View>
        </Modal>
        <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="fill" style={styles.image}>
            <Container>
                <H1>
                    Create an Account
                </H1>
                <TextCont>
                <TextInput
                    style={styles.text_input}
                    placeholderTextColor='616161'
                    placeholder="Name ..."
                />
                <TextInput
                    style={styles.text_input}
                    placeholderTextColor='616161'
                    placeholder="Email ..."
                />
                <TextInput 
                    style={styles.text_input}
                    placeholderTextColor="616161"
                    placeholder="Password ..."
                    secureTextEntry={true}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.text_input}
                    placeholderTextColor='616161'
                    placeholder="Compass Card (Optional)"
                />
                </TextCont>
                <WhiteButton
                    text="Sign Up"
                    onButtonPress={OpenModal}
                />
            </Container>
        </ImageBackground>
    </Page>
    }
}
export default CreateAccount;

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
    image: {
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    },
    modal_center: {
        marginTop: 250,
        alignItems: 'center',
        justifyContent: 'center'
    }
});