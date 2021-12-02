import React from 'react';
import { View, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { COLORS } from '../../constants/styles.js';
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';


import NavAccount from '../../comps/NavBar/NavAccount.js';
import ProfileCard from '../../comps/Profile/ProfileCard';
import NotificationCard from '../../comps/Profile/notificationCard';
import SupportCard from '../../comps/Profile/supportCard';

// import { FlatList } from 'react-native-gesture-handler';
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import LottieView from 'lottie-react-native';
import BgCircle from '../../comps/Global/BgCircleScreens.js';


const TempCenter = styled.View`
align-items: center;
width: 90%;
margin-bottom: 5%;
align-self: center;
`;


const Container = styled.TouchableOpacity`
justify-content: center;
width: 100%;
height: 100px;
background-color: ${COLORS.CAROLINABLUE};
border-radius: 10px;

`;

const Row = styled.View`
flex-direction: row;
justify-content: space-evenly;
align-items: center;
height: 100px;
border-radius: 10px;
padding:5%;
`;

const TextCont = styled.View`
flex:3;
`;

const H1 = styled.Text`
font-size: 18px;
font-family: 'Ubuntu_700Bold';
line-height: 24px;
color: #fff;
`;

const H2 = styled.Text`
font-size: 16px;
font-family: 'Ubuntu_400Regular';
line-height: 24px;
letter-spacing: 0;
color: #fff;

`;
const ProfileText = styled.Text`
    font-size: 24px;
    font-family: 'Ubuntu_700Bold';
    color: ${COLORS.CAROLINABLUE};
    text-align: center;
`;

const DescriptionText = styled.Text`
    font-size: 16px;
    color: ${COLORS.SPACECADET};
    text-align: justify;
    padding-top: 15px;
    text-align: center;
    font-family: 'Ubuntu_400Regular';
`;

const Hr = styled.View`
    width:90%;
    background-color: ${COLORS.CAROLINABLUE};
    height:2px;
    margin-top: 10%;
    margin-bottom: 10%;
    align-self: center; 
`;


const ProfileScreenNew = ({navigation}) => {

    navigation = useNavigation()

    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.test}>
                <BgCircle />
                <ProfileCard />
                <ScrollView 
                contentContainerStyle={styles.scroll}
                snapToEnd={false}
                showsVerticalScrollIndicator={false}>
                    <ProfileText>Check out your personal profile</ProfileText>
                    <DescriptionText>Come back to your profile anytime to change your personal details, check your balance history, set notification settings, or get help and support. </DescriptionText>
                    <Hr />
                    <TempCenter style={styles.shadow}>
                            <Container onPress={() => navigation.navigate('NotificationPreferences')}>
                                <Row>
                                    <Icon
                                        style={{ paddingRight: 15,}}
                                        name='notifications'
                                        color='white'
                                        size={40}
                                    />
                                    <TextCont>
                                        <H1>Notification Settings</H1>
                                        <H2>Change disruption alerts, COVID safe travel notifications and others.</H2>
                                    </TextCont>
                                </Row>
                            </Container>
                        </TempCenter >
                        <TempCenter style={styles.shadow}>
                            <Container onPress={() => navigation.navigate('BalanceHistory')}>
                                <Row>
                                    <Icon
                                        style={{ paddingRight: 15,}}
                                        name='history'
                                        color='white'
                                        size={40}
                                    />
                                    <TextCont>
                                        <H1>Balance History</H1>
                                        <H2>View your last transactions, monthly trips, and other.</H2>
                                    </TextCont>
                                </Row>
                            </Container>
                        </TempCenter >
                        <TempCenter style={styles.shadow}>
                            <Container onPress={() => navigation.navigate('Support')}>
                                <Row>
                                    <Icon
                                        style={{ paddingRight: 15,}}
                                        name='help'
                                        color='white'
                                        size={40}
                                    />
                                    <TextCont>
                                        <H1>Help and Support</H1>
                                        <H2>Do you need help or feedback? No problem, we are here for you.</H2>
                                    </TextCont>
                                </Row>
                            </Container>
                        </TempCenter >
                    </ScrollView>
                <View style={styles.NavCont}>
                    <NavAccount />
                </View>
            </View>
        )
    }
}

export default ProfileScreenNew;


const styles = StyleSheet.create({
    NavCont: {
        position: 'absolute',
        bottom: 0,
    },
    test: {
        // borderColor: 'red',
        // borderWidth: 2,
        width: '100%',
        height: '100%'
    },
    spacing: {
        height: '50%',
        borderColor: 'green',
        borderWidth: 2,
    },
    scroll: {
        paddingBottom: '20%',
        left: 0,
    },
    image: {
        width: 60,
        height: 60,
    }, 
    flex: {
        flex: 1,
    },
    shadow: {
        shadowColor: COLORS.SPACECADET,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
    }

});