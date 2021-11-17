import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";


const Container = styled.View`
    width: 350px;
    height: 550px;
    background-color: #fff;
    border-radius: 15px;
    margin: 100px 0px 0px 25px;
    top:-6%;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const CompassPlaceHolder = styled.View`
    width: 350px;
    height: 200px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-self: center;
    background-color: ${COLORS.CAROLINABLUE};
`;

const ButtonCont = styled.View`
    display: flex;
    margin: 0;
    top: 30;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 55%;
    flex-direction: column;
`;

const Expiration = styled.Text`
    color: #252b42;
    align-self: center;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    text-align: center;
    top: 20;

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
    height:100px;
    align-self: center;
    resizeMode:cover;
    border-radius: 15px;

`;
const CompassCardNo = styled.Text`
    font-size: 12px;
    align-self: center;
    top: 20;
`;
const CardFooter = styled.View`
    align-self: center;
    justify-content: space-around;
    width: 90%;
    padding: 65px 0px 0px 0px;
    flex-direction: row;
`;
const IconsFrontCont = styled.View`
    width: auto;
    align-items: center;

    /* border-width: 2px;
    border-color:green; */
`;
const IconFront = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
`;
// end - items for card front



export default function MobileCard({
    // cardSide = true, // need to put state for this in app.js?
    onAutoReloadPress = () => { },
    onTransferPress = () => { },
    onWalletPress = () => { },
    onRemoveTicketPress = () => { },
    barcodeId = "ak-18-15 Compass No: 016372 9281 9273 CVN 459",
    cardType = "December Pass",
    // onManagePress = () => { },
    onAddFundsPress = () => { }
}) {

    //to manage toggling between front and back of card
    const [cardSide, setCardSide] = useState(true)
    const goManage = () => {
        setCardSide(false);
    }
    const goCardFront = () => {
        setCardSide(true);
    }


    //set card expiration date / month
    // const [expiration, setExpiration] = useState('December Pass');

    //for SWITCH (set card to/disable default status)
    const [defaultCard, setDefaultCard] = useState(false);
    const toggleDefaultCard = () => setDefaultCard(previousState => !previousState);



    //front of card
    if (cardSide === true) {
        return (
            <Container>
                <CompassPlaceHolder />
                <Expiration>{cardType}</Expiration>
                {/* <CompassCardBarcode
                    source={require('#')}
                /> */}
                <CompassCardNo>{barcodeId}</CompassCardNo>

                <CardFooter>
                    <ButtonCont>
                        <Pressable style={styles.button} onPress={goManage}>
                            <Text style={styles.buttonText}>Manage</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={onAddFundsPress}>
                            <Text style={styles.buttonText}>Add Funds</Text>
                        </Pressable>
                    </ButtonCont>
                </CardFooter>

            </Container>
        );
    }

    //back of card
    if (cardSide === false) {
        return (
            <Container>
                <Button
                    style={styles.backButton}
                    onPress={goCardFront}
                    title='<'
                />
                <CompassPlaceHolder />
                <Expiration>{cardType}</Expiration>
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
    },
    backButton: {
        zIndex: 2,
        height: '30px',
        position: 'absolute',
    },
    button: {
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 55,
        backgroundColor: '#fff',
        borderColor: '#009ddc',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: '#009ddc',
    },
})