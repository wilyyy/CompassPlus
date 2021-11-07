import styled from "styled-components/native";
import React, { useState }  from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Ellipse from '../../assets/Ellipse_1.png';

const HomeCard = ({
    header = 'Saved Trips',
    para = 'Access your saved trips for quicker route planning',
    img = {Ellipse},
    onCardPress = () => { },

}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardCont} onPress={onCardPress}>
                <Image style={styles.image}  source={img}/>
                <View style={styles.textCont}>
                    <Text style={{/*fontFamily: 'Ubuntu-Regular',*/ fontSize: 18,
                           fontWeight: 'bold',
                           lineHeight: 24,
                           letterSpacing: 0,
                           color: '#fff',}}>{header}</Text>
                    <Text style={{fontFamily: 'Ubuntu-Regular', fontSize: 16,
                           lineHeight: 24,
                           letterSpacing: 0,
                           color: '#fff',}}>{para}</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardCont: {
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        height: 100,
        backgroundColor: '#009ddc',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset:{width: 0,height: 4},
        padding: 10,
    },
    image: {
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    },
    textCont: {
        display: 'flex',
        margin: 0,
        width: 220,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
});
