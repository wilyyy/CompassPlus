import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView, Alert, Modal } from 'react-native';
import styled from "styled-components/native";
import { Divider } from 'react-native-elements';

import { COLORS } from '../../constants/styles.js';
import HomeCompassCard from '../../comps/Home/homeCompassCard.js';
import HomeCard from '../../comps/Home/homeCard.js';
import WelcomeMessage from '../../comps/Home/welcomeMessage.js';
import LinkCompassCard from '../../comps/Home/linkCompassCard.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

//switch to gesture handler?
const BottomContainer = styled.View`
    width: ${windowWidth};
    align-items: center;
    height: 60%;
`;

const HomeElement = styled.View`
    margin: 10px 0;
`;

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [linkedCard, setLinkedCard] = useState("no")

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
        <HomeCompassCard onButtonPress={OpenModal} compass_linked={linkedCard}/>
        <BottomContainer>
            <ScrollView style={styles.scroll_cont}>
                <HomeElement>
                    <WelcomeMessage />
                </HomeElement>
                <Divider width={2} color={COLORS.CAROLINABLUE}/>
                <HomeElement><HomeCard style={styles.margin_r}/></HomeElement>
                <HomeElement><HomeCard card_type="manageCard" style={styles.margin_r}/></HomeElement>
            </ScrollView>
        </BottomContainer>
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

});