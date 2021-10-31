import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
    justify-content: space-between;
    align-items: center;
    width:100%;
    /* border-width: 2px;
    border-color: red; */
    padding: 5px 15px;
    
`;

const SettingsContLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* border-width: 2px;
    border-color: blue; */
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
    margin-right: 60px;
`;



export default function MobileCard({
    cardSide = false, // need to put state for this in app.js?
    onAutoReloadPress = () => { },
    onTransferPress = () => { },
    onWalletPress = () => { },
    onRemoveTicketPress = () => { }
}) {

    //set card expiration date / month
    const [expiration, setExpiration] = useState('December');

    //for SWITCH (set card to/disable default status)
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
                <SettingCont>
                    <SettingsContLeft>
                        <Icon
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                        />
                        <MenuItem>Auto reload</MenuItem>
                    </SettingsContLeft>
                    <Button
                        onPress={onAutoReloadPress}
                        title="Edit"
                        color="blue"
                        ios_backgroundColor="white"
                    />
                </SettingCont>
                <SettingCont>
                    <TouchableWithoutFeedback onPress={onTransferPress}>
                        <SettingsContLeft>
                            <Icon
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                            />
                            <MenuItem>Transfer balance</MenuItem>
                        </SettingsContLeft>
                    </TouchableWithoutFeedback>

                </SettingCont>
                <SettingCont>
                    <TouchableWithoutFeedback onPress={onWalletPress}>
                        <SettingsContLeft>
                            <Icon
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                            />
                            <MenuItem>View in Apple Wallet</MenuItem>
                        </SettingsContLeft>
                    </TouchableWithoutFeedback>
                </SettingCont>
                <SettingCont>
                    <TouchableWithoutFeedback onPress={onRemoveTicketPress}>
                        <SettingsContLeft>
                            <Icon
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                            />
                            <MenuItem>Remove ticket</MenuItem>
                        </SettingsContLeft>
                    </TouchableWithoutFeedback>
                </SettingCont>



            </Container>
        );
    }
}

const styles = StyleSheet.create({
    switch: {
    }
})