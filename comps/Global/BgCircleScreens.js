import React from 'react';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { Dimensions, Image, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width / 2;
const windowHeight = Dimensions.get('window').height;


const Circle = styled.View`
    position:absolute;
    z-index: -2;
    width: 850px;
    height: 450px;
    background-color: ${COLORS.SPACECADET};
    border-bottom-left-radius: 800px;
    border-bottom-right-radius: 800px;
    top:-95px;
`;

export default function BgCircle() {
    return (

        <Image
            style={styles.img}
            source={require('../../assets/bgCircle.png')}
        />

    )
}

const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '44%',
    },
})