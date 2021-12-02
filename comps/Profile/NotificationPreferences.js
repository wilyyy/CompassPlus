import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, ScrollView, Switch } from 'react-native';
import { Header, Divider, Icon } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
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


const Box = styled.View`
    height: 20px;
`;

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
    font-size: 20px;
    font-family: 'Ubuntu_700Bold';
    padding-left: 7%;
    color: #ffffff;
`;

const Row = styled.View`
    flex-direction: row;
    width: ${windowWidth};
    background-color: white;
    justify-content: space-between;
`;

const Column = styled.View`
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 30px;
`;

const ColumnSwitch = styled.View`
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 20px;
`;

const EditContent = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_700Bold';
    padding-left: 7%;
    padding-bottom: 30px;
    text-align: left;
    align-self: flex-start;
`;


const NotificationPreferences = ({ navigation }) => {

    const [pushRoutesEnabled, setPushRoutesEnabled] = useState(false)
    const [textRoutesEnabled, setTextRoutesEnabled] = useState(false)
    const [pushNewsEnabled, setPushNewsEnabled] = useState(false)
    const [textNewsEnabled, setTextNewsEnabled] = useState(false)

    const pushRoutesSwitch = () => setPushRoutesEnabled(previousState => !previousState);
    const textRoutesSwitch = () => setTextRoutesEnabled(previousState => !previousState);
    const pushNewsSwitch = () => setPushNewsEnabled(previousState => !previousState);
    const textNewsSwitch = () => setTextNewsEnabled(previousState => !previousState);

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
                        iconStyle: { color: 'white' }
                    }}
                    centerComponent={{
                        text: 'Notifications',
                        style: {
                            color: 'white',
                            fontFamily: 'Ubuntu_700Bold',
                            fontSize: 24
                        }
                    }}
                    containerStyle={{
                        backgroundColor: COLORS.SPACECADET,
                        height: 100,
                        borderBottomWidth: 0,
                        justifyContent: 'center',
                    }}
                />
                <ScrollView>
                    <TopContainer>
                        <DescriptionContainer>
                            <DescriptionText> When you download CompassPlus, all notifications are disabled automatically. If you want to receive route and/or news updates switch on your notifications. Come here to change your preferences anytime. 🪄 </DescriptionText>

                        </DescriptionContainer>
                    </TopContainer>
                    <SectionContainer>
                        <SectionText>Route Updates</SectionText>
                    </SectionContainer>
                    <Row>
                        <Column>
                            <EditContent>Push Notifications</EditContent>
                            <EditContent>Text Messages via Email</EditContent>
                        </Column>
                        <ColumnSwitch>
                            <View style={{ paddingRight: '7%' }}>
                                <Switch
                                    trackColor={{ false: "red", true: COLORS.CAROLINABLUE }}
                                    thumbColor={setPushRoutesEnabled ? "white" : "grey"}
                                    ios_backgroundColor="DAVYSGREY"
                                    onValueChange={pushRoutesSwitch}
                                    value={pushRoutesEnabled}
                                />
                                <Box />
                                <Switch
                                    trackColor={{ false: "white", true: COLORS.CAROLINABLUE }}
                                    thumbColor={setTextRoutesEnabled ? "white" : "grey"}
                                    ios_backgroundColor="DAVYSGREY"
                                    onValueChange={textRoutesSwitch}
                                    value={textRoutesEnabled}
                                />
                            </View>
                        </ColumnSwitch>
                    </Row>
                    <Divider orientation="horizontal" color="DAVYSGREY" />
                    <Box />
                    <SectionContainer>
                        <SectionText>News Updates</SectionText>
                    </SectionContainer>
                    <Row>
                        <Column>
                            <EditContent>Push Notifications</EditContent>
                            <EditContent>Text Messages via Email</EditContent>
                        </Column>
                        <ColumnSwitch>
                            <View style={{ paddingRight: '7%' }}>
                                <Switch
                                    trackColor={{ false: "red", true: COLORS.CAROLINABLUE }}
                                    thumbColor={setPushNewsEnabled ? "white" : "grey"}
                                    ios_backgroundColor="DAVYSGREY"
                                    onValueChange={pushNewsSwitch}
                                    value={pushNewsEnabled}
                                />
                                <Box />
                                <Switch
                                    trackColor={{ false: "white", true: COLORS.CAROLINABLUE }}
                                    thumbColor={setTextNewsEnabled ? "white" : "grey"}
                                    ios_backgroundColor="DAVYSGREY"
                                    onValueChange={textNewsSwitch}
                                    value={textNewsEnabled}
                                />
                            </View>
                        </ColumnSwitch>
                    </Row>
                    <Divider orientation="horizontal" color="DAVYSGREY" />

                </ScrollView>

            </View>
        );
    };
}

export default NotificationPreferences;



const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 55,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.CAROLINABLUE
    },
    input: {
        width: 185,
        height: 55,
        borderWidth: 2,
        borderColor: COLORS.LIGHTGREY,
        borderRadius: 8,
        padding: 10,
    },
    buttontwo: {
        width: 300,
        height: 55,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
});
