import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '/Users/sarahhusslein/Desktop/CompassCard/CompassPlus/constants/styles.js';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BackgroundContainer = styled.View`
    width: ${windowWidth};
    height: 300px;
    background-color: ${COLORS.DAVYSGREY};
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

const NameText = styled.Text`
    font-size: 20px;
    font-weight: normal;
    padding-top: 10;
    color: #ffffff;
`;

const Box = styled.View `
    height: 15px;
`;


const ProfileCard = () => {

    return (
        <View>
          <BackgroundContainer>
              <TitleText>Personal Account</TitleText>
              <Row>
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
                    <NameText>Jenny Clark</NameText>
                  </SubContainer>
                  <SubContainer>
                    <TouchableOpacity style={styles.button} onPress={() => console.log("hello world")}> 
                        <Text style={styles.text}>Update Account Details</Text>
                    </TouchableOpacity>
                    <Box />
                    <TouchableOpacity style={styles.button} onPress={() => console.log("hello world")}> 
                        <Text style={styles.text}>View Balance History</Text>
                    </TouchableOpacity>
                  </SubContainer>
              </Row>
          </BackgroundContainer>
      </View>
    );
  };
  
  export default ProfileCard;


  const styles = StyleSheet.create({
    button: {
        width: 240,
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
});
