import React, { useEffect, useState, useRef } from 'react';
import { Button, Image, StyleSheet, Switch, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";
import { Icon } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import CountDown from 'react-native-countdown-component';


import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu'
    ;
import { TouchableOpacity } from 'react-native-gesture-handler';

const Spacing = styled.View`

    border-width: 2px;
    /* border-color: red;
    padding-right:20px; */
`;

const Container = styled.View`
    min-width: 330px;
    width:40%;
    height: 68%;
    min-height: 550px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
    margin-top: 20px;
    left:-1%;
    /* margin-right:5%; */
    /* margin-left:5px; */
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const TapText = styled.Text`
    color: ${COLORS.LIGHTGREY};
    left:-38%;
    top:2%;
`;

const ManageDesc = styled.Text`
    color: ${COLORS.LIGHTGREY};
    top:2%;
    margin-bottom:2%;
`;

const CompassPlaceHolder = styled.View`
     min-width: 330px;
    width:40%;
    height: 200px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-self: center;
    padding:5%;
    background-color: ${COLORS.CAROLINABLUE};
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);
    overflow:hidden;
`;

const CardTitle = styled.Text`
    font-size: 24px;
    font-family: 'Ubuntu_500Medium';
    color: #fff;
`;

const H1 = styled.Text`
font-size: 24px;
    font-family: 'Ubuntu_700Bold';
    color: ${COLORS.SPACECADET};
    margin-top: 6%;

    /* margin-bottom: 5%; */
`;

const H1Back = styled.Text`
font-size: 24px;
    font-family: 'Ubuntu_700Bold';
    color: ${COLORS.SPACECADET};
    margin-bottom: 5%;
    
`;

const H3 = styled.Text`
    font-size: 16px;
    font-family: 'Ubuntu_400Regular';
    line-height: 24px;
    letter-spacing: 0;
    color: ${COLORS.SPACECADET};

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
const SettingsContLeft = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
/* 
    border-width: 2px;
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

const FrontBodyCont = styled.View`
    margin: 0 50px;
    height: 20%;
    justify-content: space-evenly;
    align-items: flex-end;
    /* border-width: 2px;
    border-color:green; */
    flex-direction: row;
`;

const BackBodyCont = styled.View`
    padding: 15px 20px 0;
    height: 40%;
    justify-content: flex-start;
    align-items: center;
    /* border-width: 2px;
    border-color:green; */
`;

const CardHeader = styled.View`
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    height: 40%;

     /* border-width: 2px;
    border-color:red;  */
`;

const CardFooterBack = styled.View`
    flex-direction: row;
    align-items: center;
    height: 20%;

    margin: 0 50px;
    /* height: 20%; */
    justify-content: space-evenly;
    align-items: flex-end;
/* 
      border-width: 2px;
    border-color:red;   */
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
    color: #fff;
    font-style: italic;
    margin:15px;
    font-size: 14px;
    text-align: center;
    top:130px;
`;


export default function Pass({
    // cardSide = true, // need to put state for this in app.js?
    onWalletPress = () => { },
    balance = 4.05,
    barcodeId = "Compass No: 016372 9281 9273 CVN 459",
    expiration = "December ",
    // onManagePress = () => { },
    reloadPass = () => { },
    reloadStoredValue = () => { },
    makeDefault = false,
    triggerDefault = () => { },
    onAutoReloadPress = () => { },
    paymentAnimation = () => { },

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
    const [defaultCard, setDefaultCard] = useState(true);
    const toggleDefaultCard = () => setDefaultCard(previousState => !previousState);

    useEffect(() => {
        setDefaultCard(makeDefault);
    }, [makeDefault]);

    useEffect(() => {
        if (defaultCard) {
            console.log(defaultCard, "pass");
            triggerDefault();
        }
    }, [defaultCard]);

    const [autoReload, setAutoReload] = useState(true);
    const toggleAutoReload = () => setAutoReload(previousState => !previousState);



    var anim = useRef();
    const minutes90 = 5400;
    const month = 2419200;
    //front of card
    if (cardSide === true) {
        return (
            // <Spacing>
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
                <CompassPlaceHolder>
                    <CardTitle>$ {balance}</CardTitle>
                    <Image source={require('../../assets/compassPattern.png')}
                        style={styles.placeholderBg}
                    />
                    <LottieView
                        ref={(ref) => {
                            anim = ref;
                        }}
                        source={require('../../assets/lottie/seabusLottie.json')}
                        autoPlay
                        loop
                        style={styles.lottie}
                    />
                </CompassPlaceHolder>
                <CardHeader>
                    <H1>Time Remaining:</H1>
                    <Pressable style={[styles.ticket, styles.bg1]}
                        onPress={paymentAnimation}
                    >
                        <Text style={styles.buttonText}>Active Trip:</Text>

                        <CountDown
                            until={minutes90}
                            onFinish={() => alert('dlt')}
                            size={15}
                            timeToShow={['H', 'M', 'S']}
                            timeLabels={{ h: null, m: null, s: null }}
                            showSeparator
                            separatorStyle={COLORS.SPACECADET}
                            digitStyle={{ backgroundColor: COLORS.MIDWAYBLUE }}
                            digitTxtStyle={{ color: '#fff' }}
                        />
                    </Pressable>
                    <TapText>Tap to Pay</TapText>
                    <Pressable style={[styles.ticket, styles.bg1]}
                        onPress={paymentAnimation}>
                        <Text style={styles.buttonText}>Pass:</Text>

                        <CountDown
                            until={month}
                            onFinish={() => alert('dlt')}
                            size={15}
                            timeToShow={['D', 'H', 'M', 'S']}
                            timeLabels={{ d: null, h: null, m: null, s: null }}
                            showSeparator
                            separatorStyle={COLORS.SPACECADET}
                            digitStyle={{ backgroundColor: COLORS.MIDWAYBLUE }}
                            digitTxtStyle={{ color: '#fff' }}
                        />
                    </Pressable>
                    <TapText>Tap to Pay</TapText>

                </CardHeader>
                <FrontBodyCont>

                    <TouchableOpacity
                        style={styles.frontFundsButton}
                        onPress={reloadPass}>

                        <Icon
                            name='idcard'
                            type='antdesign'
                            color={COLORS.SPACECADET}
                            size={25}
                            reverse={true}
                        />
                        <Text
                            style={styles.iconText}
                        >Reload Pass</Text>
                    </TouchableOpacity>
                    <ExpirationCont>
                        {/* <H3>Pass expires {expiration}</H3> */}

                    </ExpirationCont>
                    <TouchableOpacity
                        style={styles.frontFundsButton}
                        onPress={reloadStoredValue}>

                        <Icon
                            name='attach-money'
                            type='materialicons'
                            color={COLORS.SPACECADET}
                            size={25}
                            reverse={true}
                        />
                        <Text
                            style={styles.iconText}
                        >Add Funds</Text>
                    </TouchableOpacity>
                    {/* <H3>Pass expires {expiration}</H3> */}

                </FrontBodyCont>

            </Container>
            // </Spacing>
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

                <CompassPlaceHolder>
                    <H2>{barcodeId}</H2>
                </CompassPlaceHolder>

                <BackBodyCont>

                    <H1Back>Manage Auto Reload</H1Back>
                    <SettingCont>
                        <SettingsContLeft>
                            <Icon
                                name='add-task'
                                type='materialicons'
                                color={COLORS.SPACECADET}
                                size={30}
                            />
                            <MenuItem>Monthly Pass</MenuItem>

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
                    <ManageDesc>When auto reload is enable, pass reloads on the first day of every month</ManageDesc>
                    <SettingCont>
                        <SettingsContLeft>
                            <Icon
                                name='add-task'
                                type='materialicons'
                                color={COLORS.SPACECADET}
                                size={30}
                            />
                            <MenuItem>Stored Value</MenuItem>
                        </SettingsContLeft>
                        <Button
                            onPress={onAutoReloadPress}
                            title="Edit"
                            color="blue"
                        />

                    </SettingCont>


                    {/* <SettingCont>
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
                    </SettingCont> */}
                </BackBodyCont>
                <CardFooterBack>
                    <TouchableOpacity
                        style={styles.frontFundsButton}
                        onPress={reloadPass}>

                        <Icon
                            name='idcard'
                            type='antdesign'
                            color={COLORS.SPACECADET}
                            size={25}
                            reverse={true}
                        />
                        <Text
                            style={styles.iconText}
                        >Reload Pass</Text>
                    </TouchableOpacity>
                    <ExpirationCont>
                        {/* <H3>Pass expires {expiration}</H3> */}

                    </ExpirationCont>
                    <TouchableOpacity
                        style={styles.frontFundsButton}
                        onPress={reloadStoredValue}>

                        <Icon
                            name='attach-money'
                            type='materialicons'
                            color={COLORS.SPACECADET}
                            size={25}
                            reverse={true}
                        />
                        <Text
                            style={styles.iconText}
                        >Add Funds</Text>
                    </TouchableOpacity>
                </CardFooterBack>
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
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: COLORS.SPACECADET,
    },
    toggleSideIcon: {
        alignItems: 'flex-end',
        width: '100%',
        zIndex: 10,
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
        marginBottom: '5%',
    },
    lottie: {
        top: '5%',
        left: '-0.5%',
        opacity: 1,
        position: 'absolute',
        width: 360,
    }, placeholderBg: {
        width: 400,
        height: 300,
        right: 40,
        top: -50,
        opacity: 0.10,
    },
    ticket: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        height: 55,
        width: '100%',
        backgroundColor: '#fff',
        // borderColor: '#222222',
        // borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 0 },

    },
    iconText: {
        color: COLORS.CAROLINABLUE,
        fontWeight: 'bold',
        textAlign: 'center',
        left: '-2%',
    },
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


                // <SettingCont>
                //         <SettingsContLeft>
                //             <Icon
                //                 name='reload1'
                //                 type='antdesign'
                //                 color={COLORS.SPACECADET}
                //                 size={30}
                //             />
                //             <MenuItem>Auto reload</MenuItem>
                //         </SettingsContLeft>
                //         {/* <Button
                //             onPress={onAutoReloadPress}
                //             title="Edit"
                //             color="blue"
                //         /> */}
                //         <Switch
                //             trackColor={{ false: '#222222', true: '#009DDC' }}
                //             thumbColor={autoReload ? '#fff' : '#fff'}
                //             ios_backgroundColor='#222222'
                //             onValueChange={toggleAutoReload}
                //             value={autoReload}
                //             style={styles.switch}
                //         />
                //     </SettingCont>