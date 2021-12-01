import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements'
import { Header, Divider, Icon } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../screens/Authentication/firebase.js';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const BackgroundContainer = styled.View`
    width: ${windowWidth};
    background-color: ${COLORS.SPACECADET};
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const SubContainer = styled.View`
    align-items: center;
    margin-top: 5%;
`;

const NameText = styled.Text`
    font-size: 20px;
    font-weight: normal;
    padding-top: 5%;
    padding-bottom: 10%;
    color: #ffffff;
`;

const Box = styled.View `
    height: 15px;
`;


const ProfileCard = ({navigation}) => {
    navigation = useNavigation()


    const handleSignOut = () => {
        auth
        .signOut()
        .then(()=>{
            navigation.navigate('Authentication')
        }) 
        .catch(error => alert(error.message))
    }


    return (
        <View>
            <Header
                centerComponent={{ 
                    text: 'Personal Account', 
                    style: { 
                        color: 'white', 
                        fontWeight: 'bold', 
                        fontSize: 24 } }}
                rightComponent={{ 
                    icon: 'logout', 
                    color: 'white', 
                    size: 30,
                    onPress: handleSignOut,
                    iconStyle: { color: 'white' } }}
                containerStyle={{
                    backgroundColor: COLORS.SPACECADET, 
                    height: 100,
                    borderBottomWidth: 0,
                }}
                />
        <BackgroundContainer> 
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
            <Row>
                <TouchableOpacity
                        style={styles.frontFundsButton}
                        onPress={() => navigation.navigate('ChangePassword')}>
                        <Icon
                            name='idcard'
                            type='antdesign'
                            color='#777777'
                            size={25}
                            reverse={true}
                        />
                        <Text
                            style={styles.iconText}
                        >Update Account Details </Text>
                    </TouchableOpacity>
                <Text style={styles.text}> Update Account Details</Text>
            </Row>
        </BackgroundContainer>
          {/* <BackgroundContainer>
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
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePassword')}> 
                        <Text style={styles.text}>Update Account Details</Text>
                    </TouchableOpacity>
                    <Box />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BalanceHistory')}> 
                        <Text style={styles.text}>View Balance History</Text>
                    </TouchableOpacity>
                  </SubContainer>
              </Row>
          </BackgroundContainer> */}
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
        color: COLORS.CAROLINABLUE
    },
    frontFundsButton: {
        marginBottom: '5%',
    },
    iconText: {
        color: COLORS.CAROLINABLUE,
        fontWeight: 'bold',
        textAlign: 'center',
        left: '-2%',
    },
});
