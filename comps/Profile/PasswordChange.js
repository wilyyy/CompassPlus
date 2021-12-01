import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Pressable, TextInput, ScrollView } from 'react-native';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Avatar, Header, Divider, Icon } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
import AddPaymentType from '../CompassCardParent/payment.js';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Box = styled.View`
    height: 15px;
`;

const EditColumn = styled.View`
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
    background-color: #fff;
    padding-bottom: 30px;

`;

const EditContent = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-left: 5px;
    padding-top: 30px;
    padding-bottom: 15px;
    text-align: left;
`;

const PasswordChange = ({ navigation }) => {
    navigation = useNavigation();

    return (
        <View style={styles.test}>
            <Header
                leftComponent={{
                    icon: 'arrow-back',
                    color: 'white',
                    size: 30,
                    onPress: () => { navigation.navigate('Account') },
                    iconStyle: { color: 'white' }
                }}
                centerComponent={{
                    text: 'Account Details',
                    style: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 24,
                    }
                }}
                containerStyle={{
                    backgroundColor: COLORS.SPACECADET,
                    height: 100,
                    borderBottomWidth: 0,
                    justifyContent: 'center',
                    paddingTop: '-2%',
                }}
            />
            <View style={{ height: '100%' }}>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    snapToEnd={false}
                    showsVerticalScrollIndicator={false}>
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
                        <TouchableOpacity style={styles.button} onPress={() => console.log("changed password!")}>
                            <Text style={styles.text}>Change Password</Text>
                        </TouchableOpacity>
                    </EditColumn>

                    {/* <Box /> */}

                    <Box />
                    <EditColumn>
                        <EditContent>Manage your payment information.</EditContent>
                        <AddPaymentType />
                        <TouchableOpacity style={styles.button} onPress={() => console.log("added payment!")}>
                            <Text style={styles.text}>Save Changes</Text>
                        </TouchableOpacity>

                    </EditColumn>
                    <Box />
                    {/* <TouchableOpacity style={styles.button} onPress={() => console.log("hello world")}>
                        <Text style={styles.text}>Change Payment</Text>
                    </TouchableOpacity> */}
                </ScrollView>
            </View>
        </View>
    );
};

export default PasswordChange;


const styles = StyleSheet.create({
    test: {

        width: '100%',
        height: '100%'
    },
    scroll: {
        paddingBottom: '30%',
        left: 0,
    },
    button: {
        width: 200,
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.CAROLINABLUE,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        width: windowWidth - 30,
        height: 55,
        borderWidth: 2,
        borderColor: COLORS.LIGHTGREY,
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
    },
});
