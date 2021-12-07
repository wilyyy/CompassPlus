import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Switch, Pressable, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";
import { Icon } from 'react-native-elements';



const Container = styled.View`
    width: 350px;
    height: 550px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
    margin: 80px 15px 0px 15px;
    top:-6%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const CompassPlaceHolder = styled.View`
    width: 350px;
    height: 200px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-self: center;
    background-color: ${COLORS.CAROLINABLUE};
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);
`;

const ExpirationCont = styled.View`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin:15px;
`;

const ExpirationTitle = styled.Text`
    font-size: 24px;
`;

const ExpirationDateFront = styled.Text`
    color: ${COLORS.CAROLINABLUE};
    font-size: 40px;
`;

const Hr = styled.View`
    width:80%;
    background-color: ${COLORS.SPACECADET};
    height:2px;
    align-self: center;
`;

const SettingCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin-top: 6%;  
`;

const SettingsContLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MenuItem = styled.Text`
    font-size: 18px;
    color: #222222;
    margin: 0px 5px;
`;

const CompassCardBarcode = styled.Image`
    width:90%;
    height:100px;
    align-self: center;
    resizeMode:cover;
    border-radius: 15px;
`;

const BackBodyCont = styled.View`
    padding: 0 20px;
    height: 44%;
`;

const CardFooter = styled.View`
    align-self: center;
    width: 90%;
    height: 15%;
`;

const IconsFrontCont = styled.View`
    width: auto;
    align-items: center;
`;

const IconFront = styled.Image`
    width:50px;
    height:50px;
    margin: 5px;
`;

const H2 = styled.Text`
    color: #222222;
    font-style: italic;
    margin:15px;
    font-size: 14px;
    text-align: center;
`;


export default function Ticket({
    onAutoReloadPress = () => { },
    onWalletPress = () => { },
    barcodeId = "Compass No: 016372 9281 9273 CVN 459",
    expiration = "90 minutes",
    reloadStoredValue = () => { },
    makeDefault = false,
    triggerDefault = () => { },
}) {

    //to manage toggling between front and back of card
    const [cardSide, setCardSide] = useState(true)
    const goManage = () => {
        setCardSide(false);
    }
    const goCardFront = () => {
        setCardSide(true);
    }


    //for SWITCH (set card to/disable default status)
    const [defaultCard, setDefaultCard] = useState(true);
    const toggleDefaultCard = () => setDefaultCard(previousState => !previousState);


    useEffect(() => {
        setDefaultCard(makeDefault);
    }, [makeDefault]);

    useEffect(() => {
        if (defaultCard) {
            triggerDefault();
        }
    }, [defaultCard]);

    //front of card
    if (cardSide === true) {
        return (
            <Container>
                <Pressable
                    onPress={goManage}
                    style={styles.toggleSideIcon}
                >
                    <Icon
                        name='setting'
                        type='antdesign'
                        color={COLORS.SPACECADET}
                        size={25}
                        reverse={true}
                    />
                </Pressable>
                <CompassPlaceHolder />
                <BackBodyCont>
                    <ExpirationCont>
                        <H2>Stored Value Ticket</H2>
                        <ExpirationTitle>Expires in: </ExpirationTitle>
                        <ExpirationDateFront>{expiration}</ExpirationDateFront>
                    </ExpirationCont>
                    <Hr />
                </BackBodyCont>
                <CardFooter>
                    {/* <ButtonCont> */}
                    {/* <Pressable style={styles.button} onPress={goManage}>
                            <Text style={styles.buttonText}>Manage</Text>
                        </Pressable> */}
                    <Pressable style={styles.frontFundsButton} onPress={reloadStoredValue}>
                        <Text style={styles.buttonText}>Add Funds</Text>
                    </Pressable>
                </CardFooter>

            </Container>
        );
    }

    //back of card
    if (cardSide === false) {
        return (
            <Container>
                <Pressable
                    style={styles.toggleSideIcon}
                    onPress={goCardFront}
                >
                    <Icon
                        name='retweet'
                        type='antdesign'
                        color={COLORS.SPACECADET}
                        size={25}
                        reverse={true}
                    />
                </Pressable>

                <CompassPlaceHolder />

                <BackBodyCont>
                    <H2>{barcodeId}</H2>
                    <SettingCont>
                        <SettingsContLeft>
                            <Icon
                                name='add-task'
                                type='materialicons'
                                color={COLORS.SPACECADET}
                                size={30}
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
                                name='reload1'
                                type='antdesign'
                                color={COLORS.SPACECADET}
                                size={30}
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
                        <TouchableWithoutFeedback onPress={onWalletPress}>
                            <SettingsContLeft>
                                <Icon
                                    name='wallet'
                                    type='antdesign'
                                    color={COLORS.SPACECADET}
                                    size={30}
                                />
                                <MenuItem>View in Apple Wallet</MenuItem>
                            </SettingsContLeft>
                        </TouchableWithoutFeedback>
                    </SettingCont>
                </BackBodyCont>
                <CardFooter>
                    <Pressable style={styles.backFundsButton} onPress={reloadStoredValue}>
                        <Text style={styles.buttonText}>Add Funds</Text>
                    </Pressable>
                </CardFooter>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    switch: {
    },
    button: {
        margin: 10,
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
    toggleSideIcon: {
        alignItems: 'flex-end',
        width: '100%',
        zIndex: 2,
        height: 'auto',
        position: 'absolute',
    },
    backFundsButton: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: '75%',
        backgroundColor: '#fff',
        borderColor: '#009ddc',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },
    frontFundsButton: {
        alignSelf: 'flex-end',
        // marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 55,
        backgroundColor: '#fff',
        borderColor: '#009ddc',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    }
})


