import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon, Divider } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Container = styled.View`
    width: ${windowWidth};
    height: 70px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-self: center;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ItemRow = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
`;

const TitleText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    padding-left: 15;
    color: #ffffff;
`;

const SubContainer = styled.View`
    align-items: flex-start;
`;

const SubtitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-top: 20;
    padding-left: 20;
`;

const DescriptionText = styled.Text`
    font-size: 16px;
    font-weight: normal;
    padding-top: 15;
    padding-left: 20;
    color: ${COLORS.DAVYSGREY};
    padding-bottom: 25;
    max-width: 380;
`;

const NotificationCard = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View>
            <Container>
                <Row>
                    <Icon
                        style={{ paddingLeft: 15, size: 24 }}
                        name='notifications'
                        color='white'
                        size={24}
                    />
                    <TitleText>Notifications</TitleText>
                </Row>
            </Container>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('NotificationPreferences')}>
                    <ItemRow>
                        <SubContainer>
                            <SubtitleText>Edit Your Notification Settings</SubtitleText>
                            <DescriptionText>Change your settings about disruption alerts, COVID safe travel notifications and others.</DescriptionText>
                        </SubContainer>
                        <Icon
                            style={{ alignSelf: 'flex-end', paddingLeft: 10, }}
                            name='keyboard-arrow-right'
                            color={COLORS.DAVYSGREY}
                            size={40}
                        />
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY} />
            </View>
        </View>
    );
};

export default NotificationCard;