import styled from "styled-components/native";
import React, { useState }  from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

// import * as Font from 'expo-font';
// import AppLoading from "expo-app-loading";

// const fetchFonts = () => {
//     return Font.loadAsync({
//     'Ubuntu-Bold': require('../../assets/Fonts/Ubuntu/Ubuntu-Bold.ttf'),
//     'Ubuntu-Italic': require('../../assets/Fonts/Ubuntu-Italic.ttf'),
//     'Ubuntu-Regular': require('../../assets/Fonts/Ubuntu-Regular.ttf')
//     });
//     };

// const [dataLoaded, setDataLoaded] = useState(false);

// if (!dataLoaded) {
//     return (
//         <AppLoading
//             startAsync={fetchFonts}
//             onFinish={() => setDataLoaded(true)}
//         />
//     );
// }

const WhiteButton = ({
    text = 'Continue',
    onButtonPress = () => { },

}) => {
    return (
        <View style={styles.container}>
            <Pressable title={text} style={styles.buttonCont} onPress={onButtonPress}>
                <Text  style={{/*fontFamily: 'Ubuntu-Regular',*/ fontSize: 24,
                           fontWeight: 'bold',
                           lineHeight: 24,
                           letterSpacing: 0,
                           color: '#009ddc',}}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default WhiteButton;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    buttonCont: {
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 55,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset:{width: 0,height: 4},
        padding: 10,
    },
});
