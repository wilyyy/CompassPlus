import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Header, Divider, Icon } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../screens/Authentication/firebase.js';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SubContainer = styled.View`
    align-items: center;
    margin-top: 7%;
    margin-bottom: 22%;
`;

const NameText = styled.Text`
    font-size: 22px;
    font-family: 'Ubuntu_400Regular';
    padding-top: 6%;
    padding-bottom: 3%;
    color: #ffffff;
`;

const EmailText = styled.Text`
    font-size: 22px;
    font-family: 'Ubuntu_400Regular';
    color: #ffffff;
`;

const EditText = styled.Text`
    font-size: 22px;
    font-weight: normal;
    color: ${COLORS.CAROLINABLUE};
    padding-left: 20px;
`;

const Row = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
`;


const ProfileCard = ({ navigation }) => {
    navigation = useNavigation()


    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate('Authentication')
            })
            .catch(error => alert(error.message))
    }


    return (
        <View>
            <Header
                leftComponent={{
                    icon: 'settings',
                    color: 'white',
                    size: 30,
                    onPress: () => { navigation.navigate('ChangePassword') },
                    iconStyle: { color: 'white' }
                }}
                centerComponent={{
                    text: 'Personal Account',
                    style: {
                        color: 'white',
                        fontFamily: 'Ubuntu_700Bold',
                        fontSize: 24
                    }
                }}
                rightComponent={{
                    icon: 'logout',
                    color: 'white',
                    size: 30,
                    onPress: handleSignOut,
                    iconStyle: { color: 'white' }
                }}
                containerStyle={{
                    backgroundColor: COLORS.SPACECADET,
                    height: 100,
                    borderBottomWidth: 0,
                }}
            />
            <SubContainer>
                <Avatar
                    size={110}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    titleStyle={{ color: '#fff' }}
                    overlayContainerStyle={{ backgroundColor: COLORS.LIGHTGREY }}
                    activeOpacity={0.7}
                />
                <NameText>Jenny Clark</NameText>
                <EmailText>jenny.clark@gmail.com</EmailText>
            </SubContainer>
        </View>
    );
};

export default ProfileCard;


const styles = StyleSheet.create({

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.CAROLINABLUE
    },
});
