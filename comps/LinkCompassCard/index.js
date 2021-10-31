import styled from "styled-components/native";
import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { SafeAreaView, StyleSheet, TextInput, Pressable, TouchableOpacity, Text } from "react-native";

// If i figure out elements or native base theming
// const theme = {
//     colors: {
//         primary: '#009DDC', //mess with this later
//     },
//     Button: {
//       raised: true,
//     },
//   };

const TransferCardCont = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 343px;
    height: 380px;
    background-color: #fff;
    border-radius: 16px;
`;

const Header = styled.Text`
    font-size: 24px;
    position: relative;
    right: -20px;
    align-self: flex-start;
    color: #000000;
`;

const LinkCompassCard = () => {
    return <SafeAreaView>
        <TransferCardCont>
            <Header>Add a Compass Card</Header>
            <TextInput
                style={styles.input}
                placeholder='Compass Card Number'
                underlineColorAndroid="transparent"
            />
            <TextInput
                style={styles.input}
                placeholder='CVN'
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("hello world")}
            >
                <Text style={styles.text}>Add Card</Text>
            </TouchableOpacity>
        </TransferCardCont>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    input: {
        width: 294,
        height: 55,
        borderWidth: 2,
        borderColor: '#009DDC',
        borderRadius: 8,
        padding: 10,
    },
    button: {
        width: 294,
        height: 55,
        borderRadius: 30,
        backgroundColor: '#009DDC',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: '#fff'
    }
});

export default LinkCompassCard;