import React, { useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Header, Icon, Divider } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
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


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const TopContainer = styled.View`
    width: ${windowWidth};
    height: 150px;
    background-color: #fff;
`;

const DescriptionContainer = styled.View`
    width: 85%;
    height: 150px;
    justify-content: center;
    align-self: center;
`;

const DescriptionText = styled.Text`
    font-size: 16px;
    font-family: 'Ubuntu_400Regular';
    text-align: center;
    align-items: center;
    color: ${COLORS.DAVYSGREY};
`;

const SectionContainer = styled.View`
    width: ${windowWidth};
    height: 70px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
`;

const SectionText = styled.Text`
    font-size: 22px;
    font-family: 'Ubuntu_700Bold';
    padding-left: 7%;
    color: #ffffff;
`;
const Box = styled.View`
    height: 20px;
`;

const Container = styled.View`
    width: 30px;
`;

const ItemRow = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    flex: 1;
    justify-content: space-evenly;
    padding-bottom: 20px;
    padding-top: 15;
`;

const SubtitleText = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_700Bold';
    padding-top: 20;
    padding-left: 7%;
    background-color: #fff;
`;

const InformationText = styled.Text`
    font-size: 17px;
    font-family: 'Ubuntu_400Regular';
    padding-left: 5px;
    margin-right: 30px;
    color: ${COLORS.DAVYSGREY};
    max-width: 75%;
`;

const SupportCard = ({navigation}) => {

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
            <View>
                <Header
                    leftComponent={{
                        icon: 'arrow-back',
                        color: 'white',
                        size: 30,
                        onPress: () => { navigation.navigate('Account') },
                        iconStyle: { color: 'white', }
                    }}
                    centerComponent={{
                        text: 'Help and Feedback',
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
                <ScrollView
                contentContainerStyle={styles.scroll}
                snapToEnd={false}
                showsVerticalScrollIndicator={false}>
                <TopContainer>
                    <DescriptionContainer>
                        <DescriptionText> When you download CompassPlus, all notifications are disabled automatically. If you want to receive route and/or news updates switch on your notifications. Come here to change your preferences anytime. 🪄 </DescriptionText>
                    </DescriptionContainer>
                </TopContainer>
                <SectionContainer>
                    <SectionText>Contact Information</SectionText>
                </SectionContainer>
                
                <TouchableOpacity onPress={() => { Linking.openURL('https://www.compasscard.ca/ContactUs') }}>
                    <SubtitleText>General Contact</SubtitleText>
                    <ItemRow>
                        <Container>
                            <Icon
                                style={{ paddingLeft: '12%', alignSelf: 'center' }}
                                name='id-card'
                                type='font-awesome-5'
                                color={COLORS.SPACECADET}
                                size={25}
                            />
                        </Container>
                        <InformationText>General contact information for Translink and operating companies.</InformationText>
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY} />

                <TouchableOpacity onPress={() => { Linking.openURL('https://www.compasscard.ca/ContactUs') }}>
                    <SubtitleText>Talk to a Representative</SubtitleText>
                    <ItemRow>
                        <Icon
                            style={{ paddingLeft: '12%' }}
                            name='phone'
                            type='font-awesome-5'
                            color={COLORS.SPACECADET}
                            size={25}
                        />
                        <InformationText>Do you have a question? Chat with our virtual assistant.</InformationText>
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY} />

                
                <Box />

                <SectionContainer>
                    <SectionText>Other Support</SectionText>
                </SectionContainer>

                <TouchableOpacity onPress={() => { Linking.openURL('https://www.translink.ca/-/media/translink/documents/transit-fares/compass-card/compass_refund_request_form.pdf') }}>
                    <SubtitleText>Lost and Found</SubtitleText>
                    <ItemRow>
                        <Container>
                            <Icon
                                style={{ paddingLeft: '12%' }}
                                name='search-location'
                                type='font-awesome-5'
                                color={COLORS.SPACECADET}
                                size={25}
                            />
                        </Container>
                        <InformationText>Did you loose your compass card or another item? Click here to report it.</InformationText>
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY} />
                
                <TouchableOpacity onPress={() => { Linking.openURL('https://www.compasscard.ca/Help') }}>
                    <SubtitleText>File a Claim</SubtitleText>
                    <ItemRow>
                        <Container>
                            <Icon
                                style={{ paddingLeft: '12%' }}
                                name='exclamation-circle'
                                type='font-awesome-5'
                                color={COLORS.SPACECADET}
                                size={25}
                            />
                        </Container>
                        <InformationText>From time to time, incidents occur in our system. Click to file a claim.</InformationText>
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY} />
            
                </ScrollView>
                
            </View>
        );
    }
}

export default SupportCard


const styles = StyleSheet.create({
    scroll: {
        paddingBottom: '20%',
        left: 0,
    },
});