import styled from "styled-components/native";
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Pressable, TextInput, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../constants/styles";
import { Icon } from "react-native-elements";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
width: ${windowWidth};
    height: ${windowHeight};
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.50);
    top:-31.25%;
`;


const TransferCardCont = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 340px;
    /* top:10%; */
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);
    padding:2%;
    top:5%;
`;

const Title = styled.Text`
    font-size: 24px;
    /* right: -20px; */
    align-self: center;
    font-size: 24;
    font-family: 'Ubuntu_700Bold';
    color: ${COLORS.SPACECADET};
`;

const InputCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 150px;

`

const Close = styled.TouchableOpacity`

    align-self: flex-end;
    position: absolute;
    margin-left:5%;
    top:7;
    
    /* border:2px solid pink; */
   
`;

const LinkCompassCard = ({
    onButtonPress = () => { },
    onClosePress = () => { }
}) => {

    const [confirmPage, setConfirmPage] = useState(false);

    const PressAddCard = () => {
        setConfirmPage(true);
        console.log("hello world");
    }

    return <SafeAreaView>
        <Page onPress={onClosePress}>
            <TransferCardCont>
                <Close onPress={onClosePress} style={styles.close}>
                    <Icon
                        name="closecircle"
                        type='antdesign'
                        size={30}
                        color={COLORS.CAROLINABLUE}
                    />
                </Close>
                <Title>Add a Compass Card</Title>
                <InputCont>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Compass Card Number'
                        placeholderTextColor='lightgrey'
                        place
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='CVN'
                        placeholderTextColor='lightgrey'

                        underlineColorAndroid="transparent"
                    />
                </InputCont>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onButtonPress}
                >
                    <Text style={styles.text}>Add Card</Text>
                </TouchableOpacity>
            </TransferCardCont>
        </Page>
    </SafeAreaView>
}

export default LinkCompassCard;

const styles = StyleSheet.create({
    input: {
        width: '85%',
        height: 55,
        borderWidth: 2,
        borderColor: COLORS.LIGHTGREY,
        borderRadius: 8,
        padding: 10,
    },
    button: {
        width: '75%',
        height: 55,
        borderRadius: 10,
        shadowColor: COLORS.SPACECADET,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: COLORS.CAROLINABLUE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: '#fff',
        fontFamily: 'Ubuntu_700Bold'
    },
    close: {
        // shadowColor: COLORS.SPACECADET,
        // shadowOpacity: 0.5,
        // shadowOffset: { width: 0, height: 1 },
    }
});