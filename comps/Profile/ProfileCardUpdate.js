import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Pressable, TextInput, ScrollView} from 'react-native';
import { Avatar, Header, Divider, Icon } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageContainer = styled.View`
    width: ${windowWidth};
    height: 200px;
    background-color: ${COLORS.SPACECADET};
    justify-content: space-evenly;
`;

const TitleText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding-top: 60px; 
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 35px; 
    justify-content: space-evenly;
`;

const SubContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;

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

const EditRow = styled.View`
    flex-direction: row;
    width: ${windowWidth};
    background-color: white;
    justify-content: space-evenly;
`;

const EditColumn = styled.View`
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

const EditContent = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-left: 5px;
    padding-top: 20px;
    padding-bottom: 15px;
    text-align: left;
    align-self: flex-start;
`;

const BackgroundContainer = styled.View`
    width: ${windowWidth};
    height: 100x;
    background-color: ${COLORS.DAVYSGREY};
`;

const SectionContainerRow = styled.View`
    width: ${windowWidth};
    height: 70px;
    background-color: ${COLORS.CAROLINABLUE};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ProfileCardUpdate = () => {

    return (
            <ScrollView>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: 'white', onPress: () => {}, iconStyle: { color: 'white' } }}
                    centerComponent={{ text: 'Update Account Details', style: { color: 'white', fontWeight: 'bold', fontSize: 20 } }}
                    containerStyle={{backgroundColor: COLORS.CAROLINABLUE, height: 80}}
                    />
                <ImageContainer>
                    <SubContainer>
                        <Avatar
                                size="large"
                                rounded
                                title="JC"
                                titleStyle={{color: '#777777'}}
                                onPress={() => console.log("Works!")}
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                activeOpacity={0.7}
                            />
                        <Box/>
                        <TouchableOpacity style={styles.button} onPress={() => console.log("hello world")}> 
                            <Text style={styles.text}>Change Image</Text>
                        </TouchableOpacity>
                    </SubContainer>
                </ImageContainer>
                <SectionContainer>
                    <SectionText>Name</SectionText>
                </SectionContainer>
                <EditRow>
                    <EditColumn>
                        <EditContent>First Name</EditContent>
                        <TextInput
                            style={styles.input}
                            placeholder='Jenny'
                            underlineColorAndroid="transparent"
                        />
                    </EditColumn>
                    <EditColumn>
                        <EditContent>Last Name</EditContent>
                        <TextInput
                            style={styles.input}
                            placeholder='Clark'
                            underlineColorAndroid="transparent"
                        />
                    </EditColumn>
                </EditRow>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY}/>
                <Box />
                <SectionContainer>
                    <SectionText>Contact Information</SectionText>
                </SectionContainer>
                <EditRow>
                    <EditColumn>
                        <EditContent>Email</EditContent>
                        <TextInput
                            style={styles.input}
                            placeholder='Jenny@gmail.com'
                            underlineColorAndroid="transparent"
                        />
                    </EditColumn>
                    <EditColumn>
                        <EditContent>Phone Number</EditContent>
                        <TextInput
                            style={styles.input}
                            placeholder='+1 (604) 423-5761'
                            underlineColorAndroid="transparent"
                        />
                    </EditColumn>
                </EditRow>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY}/>
                <Box />
                <TouchableOpacity style={styles.buttontwo} onPress={() => console.log("hello world")}> 
                    <Text style={styles.text}>Save Changes</Text>
                </TouchableOpacity>
                <Box />
                <SectionContainerRow>
                    <SectionText>Payment Methods</SectionText>
                    <Icon 
                        style={{paddingRight: 15}} 
                        name='arrow-forward' 
                        color='white'
                        size={24}
                        onPress={() => console.log("hello world")}
                    />
                </SectionContainerRow>
                <Box />
                <SectionContainerRow>
                    <SectionText>Security / Password</SectionText>
                    <Icon 
                        style={{paddingRight: 15}} 
                        name='arrow-forward' 
                        color='white'
                        size={24}
                        onPress={() => console.log("hello world")}
                    />
                </SectionContainerRow>
            </ScrollView>
    );
  };
  
  export default ProfileCardUpdate;


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
