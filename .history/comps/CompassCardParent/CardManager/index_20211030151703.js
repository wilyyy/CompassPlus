import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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


const IconBack = styled.Image`
    width:50px;
    height:50px;
    margin-right: 60px;
`;

// start - items for card front

const CompassCardBarcode = styled.Image`
width:90%;
height:150px;
border-color: red;
border-width: 2px;
align-self: center;
margin: 30px 0px 10px 0px;
`;

const CompassCardNo = styled.Text`
    font-size: 8px;
    align-self: center;
`;

const CardFooter = styled.View`
    align-self: center;
    justify-content: space-around;
    width: 90%;
    padding: 30px 0px 0px 0px;
    flex-direction: row;
`;

const IconsFrontCont = styled.View`
    width: auto;
    border-width: 2px;
    border-color:green;
    align-items: center;

`;


const IconFront = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
`;

// end - items for card front



export default function MobileCard({
    cardSide = true, // need to put state for this in app.js?
    onAutoReloadPress = () => { },
    onTransferPress = () => { },
    onWalletPress = () => { },
    onRemoveTicketPress = () => { },
    BarcodeId = "ak-18-15 Compass No: 016372 9281 9273 CVN 459"
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
                <CompassCardBarcode
                    source={{ uri: 'https://placekitten.com/300/400', }}
                />
                <CompassCardNo>{BarcodeId}</CompassCardNo>
                <CardFooter>
                    <IconsFrontCont>
                        <IconFront
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                        />
                        <Text>Manage</Text>
                    </IconsFrontCont>
                    <IconsFrontCont>
                        <IconFront
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                        />
                        <Text>Add Funds</Text>
                    </IconsFrontCont>
                </CardFooter>

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
                        <IconBack
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
                        <IconBack
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                        />
                        <MenuItem>Auto reload</MenuItem>
                    </SettingsContLeft>
                    <Button
                        onPress={onAutoReloadPress}
                        title="Edit"
                        color="blue"
                    />
                </SettingCont>
                <SettingCont>
                    <TouchableWithoutFeedback onPress={onTransferPress}>
                        <SettingsContLeft>
                            <IconBack
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                            />
                            <MenuItem>Transfer balance</MenuItem>
                        </SettingsContLeft>
                    </TouchableWithoutFeedback>

                </SettingCont>
                <SettingCont>
                    <TouchableWithoutFeedback onPress={onWalletPress}>
                        <SettingsContLeft>
                            <IconBack
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                            />
                            <MenuItem>View in Apple Wallet</MenuItem>
                        </SettingsContLeft>
                    </TouchableWithoutFeedback>
                </SettingCont>
                <SettingCont>
                    <TouchableWithoutFeedback onPress={onRemoveTicketPress}>
                        <SettingsContLeft>
                            <IconBack
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