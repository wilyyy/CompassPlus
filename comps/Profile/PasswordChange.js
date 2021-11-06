import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Header, Divider, Icon } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Box = styled.View `
    height: 15px;
`;

const EditColumn = styled.View`
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
    backgroundColor: #fff;
    paddingBottom: 30px;
`;

const EditContent = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-left: 5px;
    padding-top: 30px;
    padding-bottom: 15px;
    text-align: left;
`;

const PasswordChange = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: 'white', onPress: () => {}, iconStyle: { color: 'white' } }}
                    centerComponent={{ text: 'Change Password', style: { color: 'white', fontWeight: 'bold', fontSize: 20 } }}
                    containerStyle={{backgroundColor: COLORS.CAROLINABLUE, height: 80}}
                    />
                <Box />
                    <EditColumn>
                        <EditContent>Enter your current password to reset your password with a new one.</EditContent>
                        <TextInput
                            style={styles.input}
                            placeholder='Current Password'
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                         <TextInput
                            style={styles.input}
                            placeholder='New Password'
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Confirm New Password'
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                    </EditColumn>
                    <Box />
                    <TouchableOpacity style={styles.button} onPress={() => console.log("hello world")}> 
                        <Text style={styles.text}>Change Password</Text>
                    </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
  };
  
  export default PasswordChange;


  const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.CAROLINABLUE,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        width: windowWidth-30,
        height: 55,
        borderWidth: 2,
        borderColor: COLORS.LIGHTGREY,
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
    },
});
