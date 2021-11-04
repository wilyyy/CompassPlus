import styled from "styled-components/native";
import React from 'react';
import { TextInput, StyleSheet, Dimensions } from "react-native";
import { Icon } from 'react-native-elements';

//needs onpress search and onpress close 

const windowWidth = Dimensions.get('window').width;

const Container = styled.View`
    width: auto;
    height: 30px;
`;

const LeftIconCont = styled.Pressable`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
`;

const RightIconCont = styled.Pressable`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    right: 0px;
`;

const SignUpInput = () => {
    return <Container>
        <LeftIconCont>
            <Icon
                name='search'
                type='evilicon'
                color='#fff'
                size={30}
            />
        </LeftIconCont>
        <RightIconCont>
            <Icon
                name='close'
                type='evilicon'
                color='#fff'
                size={30}
            />
        </RightIconCont>
        <TextInput 

        placeholder="Search for Address"
        placeholderTextColor="#fff"
        style={styles.input} 
        />
    </Container>
}

export default SignUpInput;

const styles = StyleSheet.create({
    input: {
        color: '#fff',
        borderColor: '#fff',
        height: 40,
        width: windowWidth - windowWidth / 6,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        paddingLeft: 30,
    }
});