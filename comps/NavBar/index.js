import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from "styled-components/native";
import { Icon } from 'react-native-elements'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/styles';





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const navBarTop = windowHeight;


const NavCont = styled.View`
    width: ${windowWidth}px;
    height:85px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
`;

const Section = styled.TouchableOpacity`
    width: 25%;
    height: 41px;
    justify-content: center;
    align-items: center;
`;

const NavText = styled.Text`
    font-size: 11px;
    color: ${COLORS.SPACECADET};
`;

export default function NavBar({
    navigation = useNavigation(),
}) {

    return (
        <NavCont>
            <Section onPress={() => navigation.navigate('Home')}>
                <Icon
                    name='home'
                    type='entypo'
                    color={COLORS.SPACECADET}
                    size={35}
                />
                <NavText>Home</NavText>
            </Section>
            <Section onPress={() => navigation.navigate('MobileCard')}>
                <Icon
                    name='card'
                    type='ionicon'
                    color={COLORS.SPACECADET}
                    size={35}
                />
                <NavText>Compass</NavText>
            </Section>
            <Section onPress={() => navigation.navigate('Map')}>
                <Icon
                    name='map-marker'
                    type='font-awesome'
                    color={COLORS.SPACECADET}
                    size={35}
                />
                <NavText>Home</NavText>
            </Section>
            <Section onPress={() => navigation.navigate('Account')}>
                <Icon
                    name='account-circle'
                    type='material'
                    color={COLORS.SPACECADET}
                    size={35}
                />
                <NavText>Home</NavText>
            </Section>
        </NavCont>
    );
}