import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, ScrollView, Switch } from 'react-native';
import { Header, Divider } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Box = styled.View `
    height: 15px;
`;

const SectionContainer = styled.View`
    width: ${windowWidth};
    height: 70px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
`;

const SectionText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding-left: 15;
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

const EditContent = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-left: 15px;
    padding-bottom: 30px;
    text-align: left;
    align-self: flex-start;
`;


const NotificationPreferences = () => {

    const [pushRoutesEnabled, setPushRoutesEnabled] = useState(false)
    const [textRoutesEnabled, setTextRoutesEnabled] = useState(false)
    const [pushNewsEnabled, setPushNewsEnabled] = useState(false)
    const [textNewsEnabled, setTextNewsEnabled] = useState(false)

    const pushRoutesSwitch = () => setPushRoutesEnabled(previousState => !previousState);
    const textRoutesSwitch = () => setTextRoutesEnabled(previousState => !previousState);
    const pushNewsSwitch = () => setPushNewsEnabled(previousState => !previousState);
    const textNewsSwitch = () => setTextNewsEnabled(previousState => !previousState);

    return (
        <ScrollView>
            <Header
                leftComponent={{ icon: 'arrow-back', color: 'white', onPress: () => {}, iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'Notification Preferences', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
                containerStyle={{backgroundColor: '#009DDC', height: 80}}
                />
            <Box />
            <SectionContainer>
                <SectionText>Route Updates</SectionText>
            </SectionContainer>
            <Row>
                <Column>
                    <EditContent>Push Notifications</EditContent>
                    <EditContent>Text Messages via Email</EditContent>
                </Column>
                <Column>
                    <View style={{paddingRight: 15}}>
                        <Switch
                            trackColor={{ false: "red", true: "#009DDC"}}
                            thumbColor={setPushRoutesEnabled ? "white" : "grey"}
                            ios_backgroundColor="DAVYSGREY"
                            onValueChange={pushRoutesSwitch}
                            value={pushRoutesEnabled}
                        />
                        <Box />
                        <Switch
                            trackColor={{ false: "white", true: "#009DDC" }}
                            thumbColor={setTextRoutesEnabled ? "white" : "grey"}
                            ios_backgroundColor="DAVYSGREY"
                            onValueChange={textRoutesSwitch}
                            value={textRoutesEnabled}
                        />
                    </View>
                </Column>
            </Row>
            <Divider orientation="horizontal" color="DAVYSGREY"/>
            <Box />
            <SectionContainer>
                <SectionText>News Updates</SectionText>
            </SectionContainer>
            <Row>
                <Column>
                    <EditContent>Push Notifications</EditContent>
                    <EditContent>Text Messages via Email</EditContent>
                </Column>
                <Column>
                    <View style={{paddingRight: 15}}>
                        <Switch
                            trackColor={{ false: "red", true: "#009DDC"}}
                            thumbColor={setPushNewsEnabled ? "white" : "grey"}
                            ios_backgroundColor="DAVYSGREY"
                            onValueChange={pushNewsSwitch}
                            value={pushNewsEnabled}
                        />
                        <Box />
                        <Switch
                            trackColor={{ false: "white", true: "#009DDC" }}
                            thumbColor={setTextNewsEnabled ? "white" : "grey"}
                            ios_backgroundColor="DAVYSGREY"
                            onValueChange={textNewsSwitch}
                            value={textNewsEnabled}
                        />
                    </View>
                </Column>
            </Row>
            <Divider orientation="horizontal" color="DAVYSGREY"/>
        </ScrollView>
    );
  };
  
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
        color: '#009DDC'
    },
    input: {
        width: 185,
        height: 55,
        borderWidth: 2,
        borderColor: '#C4C4C4',
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
