import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView, Alert, Modal, Pressable } from 'react-native';
import styled from "styled-components/native";
import { Divider } from 'react-native-elements';
import axios from 'axios';
import { getAuth } from '@firebase/auth';

import { COLORS } from '../../constants/styles.js';
import HomeCompassCard from '../../comps/Home/homeCompassCard.js';
import HomeCard from '../../comps/Home/homeCard.js';
import WelcomeMessage from '../../comps/Home/welcomeMessage.js';
import LinkCompassCard from '../../comps/Home/linkCompassCard.js';
import NavHome from '../../comps/NavBar/NavHome.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BgCircle from '../../comps/Global/BgCircleScreens.js';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

const Hr = styled.View`
    width:90%;
    background-color: ${COLORS.CAROLINABLUE};
    height:2px;
    margin-top: -5%;
    margin-bottom: 5%;
`;

//switch to gesture handler?
const BottomContainer = styled.View`
    width: ${windowWidth};
    align-items: center;
    height: 60%;
    /* border-width: 2px;
    border-color: red; */
`;

const HomeElement = styled.Pressable`
    /* margin: 10px 0; */
    /* border-width: 2px;
    border-color: red; */
`;

const H2 = styled.Text`
    font-size: 16px;
    top:-2%;
    color: #fff;
    font-family: 'Ubuntu_400Regular';
    text-align: center;
`;

const HomeScreen = () => {

    const [firstName, setFirstName] = useState("");

    //grab current firebase user id
    const associateAuth = getAuth();
    const currentUserFb_uid = associateAuth.currentUser.uid;
    console.log(currentUserFb_uid);

    const [modalVisible, setModalVisible] = useState(false);
    const [linkedCard, setLinkedCard] = useState("no")

    //Get user first name and display on home page
    // useEffect(()=>{
    //     async function getUser() {
    //         try {
    //           const response = await axios.get('/users.php?id=1');
    //           console.log(response);
    //           setFirstName(response.first_name);
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }
    //     // const FetchData = async () => {
    //     //     const request = await axios.get('/users.php');
    //     //     if (currentUserFb_uid == request.fb_uid){
    //     //         setFirstName(request.first_name);
    //     //     }
    //     // }   
    //     getUser();
    // }, [])

    const OpenModal = () => {
        setModalVisible(true);
    }

    const CloseModal = () => {
        setModalVisible(!modalVisible);
    }

    const LinkCompass = () => {
        setModalVisible(!modalVisible);
        setLinkedCard("yes");
        console.log(linkedCard);
    }


    return <Page>
        <BgCircle />
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modal_center}>
                <LinkCompassCard
                    onButtonPress={LinkCompass}
                    onClosePress={CloseModal}
                />
            </View>
        </Modal>
        <HomeCompassCard onButtonPress={OpenModal} compass_linked={linkedCard} username={firstName} />
        <H2>Tap Card to Pay</H2>
        <Divider style={styles.divider} width={2} color={COLORS.CAROLINABLUE} />
        <WelcomeMessage />
        <Hr />
        <BottomContainer>
            <HomeElement>
                <HomeCard style={styles.margin_r} /></HomeElement>
            <HomeElement><HomeCard card_type="manageCard" style={styles.margin_r} /></HomeElement>
        </BottomContainer>
        <View style={styles.NavCont}>
            <NavHome />
        </View>
    </Page>
}

export default HomeScreen;

const styles = StyleSheet.create({
    scroll_cont: {
        width: windowWidth
    },
    modal_center: {
        marginTop: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    NavCont: {
        position: 'absolute',
        bottom: 0,
    },

});