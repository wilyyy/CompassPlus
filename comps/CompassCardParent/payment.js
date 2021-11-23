
import React, { useState } from 'react';
import { Animated, Button, StyleSheet, TouchableOpacity, View, TextInput, Pressable } from 'react-native';
import { ThemeProvider, Icon } from 'react-native-elements';

import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";

const Cont = styled.View`
    width: 375px;
    height: 600px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    color: #222222;
    margin:50px 20px 15px 20px;
`;

const Subtitle = styled.Text`
    font-size: 18px;
    text-align: left;
    color: #222222;
    margin:15px 20px 15px 15px;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    align-self: center;
    font-weight: 700;
`;




export default function AddPaymentType({
    AddPaymentType = () => { },
}) {


    return (
        <ThemeProvider>
            <Cont>
                <Pressable
                    style={styles.close}
                    onPress={AddPaymentType}
                >
                    <Icon
                        name='close'
                        type='antdesign'
                        color={COLORS.SPACECADET}
                        size={30}
                        reverse={false}
                        style={styles.icon}

                    />
                </Pressable>
                <Title>Add payment</Title>
                <Subtitle>Card information</Subtitle>
                <TextInput
                    style={styles.placeholderFull}
                    placeholder='0000 0000 0000 0000'
                    keyboardType='number-pad'
                    autoComplete='cc-number'
                />
                <View style={styles.splitInput}>
                    <TextInput
                        style={styles.placeholderHalf}
                        placeholder='0000 0000 0000 0000'
                        keyboardType='number-pad'
                        autoComplete='cc-exp'
                    />
                    <TextInput
                        style={styles.placeholderHalf}
                        placeholder='0000 0000 0000 0000'
                        keyboardType='number-pad'
                        autoComplete='cc-csc'
                    />
                </View>
                <Subtitle>Name on card</Subtitle>
                <TextInput
                    style={styles.placeholderFull}
                    placeholder='Name'
                    keyboardType='default'
                    autoComplete='name'
                />
                <Subtitle>Country or region</Subtitle>
                <TextInput
                    style={styles.placeholderFull}
                    placeholder='Canada'
                    keyboardType='default'
                />
                <TouchableOpacity
                    onPress={AddPaymentType}
                    style={styles.TransferButton}
                >
                    <ButtonText>Add</ButtonText>
                </TouchableOpacity>
            </Cont>
        </ThemeProvider>

    );
}


const styles = StyleSheet.create({
    close: {
        alignItems: 'flex-end',
        width: '100%',
        zIndex: 2,
        height: 'auto',
        position: 'absolute',
    },
    icon: {
        margin: 15,
    },
    TransferButton: {
        backgroundColor: COLORS.CAROLINABLUE,
        width: '40%',
        height: 55,
        borderRadius: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginTop: 15,
        marginRight: 20,
        shadowColor: COLORS.SPACECADET,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },
    placeholderFull: {
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        height: 55,
        fontSize: 18,
        padding: 15
    },
    placeholderHalf: {
        flex: 1,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        height: 55,
        fontSize: 18,
        padding: 15
    },
    splitInput: {
        flexDirection: 'row',
        marginRight: 15,
        marginTop: 15,
    }
})