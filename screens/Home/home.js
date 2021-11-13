import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView, Alert, Modal } from 'react-native';
import styled from "styled-components/native";

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

const HomeScreen = ({
    compass_on = true
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const OpenModal = () => {
        setModalVisible(true);
    }

    const CloseModal = () => {
        setModalVisible(!modalVisible);
    }

    return <Page>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modal_center}>
            <LinkCompassCard 
                // onButtonPress={} function that adds compasscard
                onClosePress={CloseModal}
            />
            </View>
        </Modal>
        <HomeCompassCard onButtonPress={OpenModal}/>
        <BottomContainer>
            <ScrollView style={styles.scroll_cont}>
                <HomeElement>
                    <WelcomeMessage style={{position: 'relative', top: 10,}}/>
                </HomeElement>
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