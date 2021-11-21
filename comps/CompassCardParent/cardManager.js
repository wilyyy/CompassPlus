import React, { useState } from 'react';
import { Button, Image, StyleSheet, Switch, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";
import { Icon } from 'react-native-elements';



const Container = styled.View`
    width: 350px;
    height: 550px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
    margin: 80px 10px 0px 10px;
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
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);

`;


const ExpirationCont = styled.View`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin:15px;

    /* border-width: 2px;
    border-color: red; */
`;

const CompassCardNo = styled.Text`
    font-size: 12px;
    margin-bottom: 20px;
`;

const ExpirationTitle = styled.Text`
    font-size: 24px;
`;

const ExpirationDateFront = styled.Text`
    color: ${COLORS.CAROLINABLUE};
    font-size: 40px;
`;

// const ButtonCont = styled.View`
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 50%;
//     flex-direction: column;

//     /* border-width: 2px;
//     border-color: red; */
// `;

const Hr = styled.View`
    width:80%;
    background-color: ${COLORS.SPACECADET};
    height:2px;
    align-self: center;
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
    margin-top: 6%;
    
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

const BackBodyCont = styled.View`
    padding: 0 20px;
    height: 44%;

    /* border-width: 2px;
    border-color:green; */
`;

const CardFooter = styled.View`
    align-self: center;
    width: 90%;
    /* margin-top:12%; */
    height: 15%;

    /* flex-direction: row; */

    /* border-width: 2px;
    border-color:red; */
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


const H2 = styled.Text`
    color: #222222;
    font-style: italic;
    margin:15px;
    font-size: 14px;
    text-align: center;
`;


export default function MobileCard({
    // cardSide = true, // need to put state for this in app.js?
    onAutoReloadPress = () => { },
    onTransferPress = () => { },
    onWalletPress = () => { },
    onRemoveTicketPress = () => { },
    barcodeId = "Compass No: 016372 9281 9273 CVN 459",
    cardType = "Pass",
    titleCardType = "December Pass",
    expiration = "December",
    phrasing = "on",
    buttonTitle = "Reload",
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
                        <H2>{titleCardType}</H2>
                        <ExpirationTitle>Expires {phrasing}: </ExpirationTitle>
                        <ExpirationDateFront>{expiration}</ExpirationDateFront>
                    </ExpirationCont>
                    <Hr />
                </BackBodyCont>
                <CardFooter>
                    {/* <ButtonCont> */}
                    {/* <Pressable style={styles.button} onPress={goManage}>
                            <Text style={styles.buttonText}>Manage</Text>
                        </Pressable> */}
                    <Pressable style={styles.frontFundsButton} onPress={onAddFundsPress}>
                        <Text style={styles.buttonText}>{buttonTitle}</Text>
                    </Pressable>
                    {/* </ButtonCont> */}
                </CardFooter>

            </Container>
        );
    }

    //back of card
    if (cardSide === false) {
        return (
            <Container>
                {/* <Button
                    style={styles.backButton}
                    onPress={goCardFront}
                    title='<'
                /> */}
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
                    <Pressable style={styles.backFundsButton} onPress={onAddFundsPress}>
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
        // top: '80%'
    }
})




// think this stuff is unnecessary w how we should setup 


{/* TRANSFER */ }

{/* <SettingCont>
                    <TouchableWithoutFeedback onPress={onTransferPress}>
                        <SettingsContLeft>
                            <IconBack
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                            />
                            <MenuItem>Transfer balance</MenuItem>
                        </SettingsContLeft>
                    </TouchableWithoutFeedback>

                </SettingCont> */}

{/* REMOVE */ }
{/* <SettingCont>
                    <TouchableWithoutFeedback onPress={onRemoveTicketPress}>
                        <SettingsContLeft>
                            <IconBack
                                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                            />
                            <MenuItem>Remove ticket</MenuItem>
                        </SettingsContLeft>
                    </TouchableWithoutFeedback>
                </SettingCont> */}