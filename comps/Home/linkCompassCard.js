import styled from "styled-components/native";
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Pressable, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../constants/styles";
import { Icon } from "react-native-elements";

const TransferCardCont = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 343px;
    height: 380px;
    background-color: #fff;
    border-radius: 16px;
    border: 3px solid ${COLORS.CAROLINABLUE};
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);
`;

const Header = styled.Text`
    font-size: 24px;
    position: relative;
    right: -20px;
    align-self: flex-start;
    color: #000000;
`;

const Close = styled.TouchableOpacity`
    width: 41px;
    height: 41px;
    align-self: flex-end;
    position: absolute;
    right: 20px;
    top: 15px;
`;

const LinkCompassCard = ({
    onButtonPress = () => {},
    onClosePress = () => {}
}) => {
    
    const [confirmPage, setConfirmPage] = useState(false);

    const PressAddCard = () => {
        setConfirmPage(true);
        console.log("hello world");
    }

    return <SafeAreaView>
        <TransferCardCont>
            <Close onPress={onClosePress}>
                <Icon 
                    name="closecircle" 
                    type='antdesign'
                    size={40}
                    color={COLORS.CAROLINABLUE}
                />
            </Close>
            <Header>Add a Compass Card</Header>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='Compass Card Number'
                underlineColorAndroid="transparent"
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='CVN'
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onButtonPress}
            >
                <Text style={styles.text}>Add Card</Text>
            </TouchableOpacity>
        </TransferCardCont>
    </SafeAreaView>
}

export default LinkCompassCard;

const styles = StyleSheet.create({
    input: {
        width: 294,
        height: 55,
        borderWidth: 3,
        borderColor: COLORS.CAROLINABLUE,
        borderRadius: 8,
        padding: 10,
    },
    button: {
        width: 294,
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.CAROLINABLUE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: '#fff'
    }
});