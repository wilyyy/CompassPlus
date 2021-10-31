import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const container = styled.View`
    width: 345px;
    height: 585px;
    background-color: #C4C4C4;
`;


export default function MobileCard({
    cardSide = false,
}) {

    //front of card
    // if (cardSide === true) {
    return (
        <View>

        </View>
    );
    // }

    //back of card
    // if (cardSide === false) {
    //     return (
    //         <View>

    //         </View>
    //     );
    // }
}

// const styles = StyleSheet.create({

// })