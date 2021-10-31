import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 350px;
    height: 585px;
    background-color: #C4C4C4;
    border-radius: 15px;
`;

const CompassPlaceHolder = styled.View`
    width: 340px;
    height: 215px;
    border-color: red;
    border-width: 2px;
    align-self: center;
`;

const Expiration = styled.Text`
    font-size: 18px;
    color: #222222;
    align-self: center;
    margin: 10px 0px;
`;

/* setting cont will hold:
    -> icon
    -> text option w/onClick 
    -> Optional: other button/interactable (i.e. switch)
*/
const SettingCont = styled.View`
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    width:100%;
    border-width: 2px;
    border-color: red;
    padding: 2px 5px;
`;

const SettingsContLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-width: 2px;
    border-color: blue;
`;

const MenuItem = styled.Text`
    font-size: 18px;
    color: #222222;
    margin: 0px 5px;
    left: -50px;
`;

const Icon = styled.Image`
    width:50px;
    height:50px;
`;



export default function MobileCard({
    cardSide = false,
}) {

    //set card expiration date / month
    const [expiration, setExpiration] = useState('December');

    //set card to/disable default status
    const [defaultCard, setDefaultCard] = useState(false);
    const toggleDefaultCard = () => setDefaultCard(previousState => !previousState);



    //front of card
    if (cardSide === true) {
        return (
            <Container>
                <CompassPlaceHolder />
                <Expiration>{expiration}</Expiration>

            </Container>
        );
    }

    //back of card
    if (cardSide === false) {
        return (
            <Container>
                <CompassPlaceHolder />
                <Expiration>{expiration}</Expiration>
                <SettingCont>
                    <SettingsContLeft>
                        <Icon
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                        />
                        <MenuItem>Make default</MenuItem>
                    </SettingsContLeft>
                    <Switch
                        trackColor={{ false: '#222222', true: '#009DDC' }}
                        thumbColor={defaultCard ? '#fff' : '#fff'}
                        ios_backgroundColor='#222222'
                        onValueChange={toggleDefaultCard}
                        value={defaultCard}
                        style={styles.switch}
                    />
                </SettingCont>



            </Container>
        );
    }
}

const styles = StyleSheet.create({
    switch: {
        justifySelf: 'flex-end'
    }
})