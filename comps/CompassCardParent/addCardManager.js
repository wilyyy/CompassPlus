import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeProvider, Icon } from 'react-native-elements';
import styled from 'styled-components/native';
import CountDown from '../../constants/Countdown';
import { COLORS } from "../../constants/styles";



const Container = styled.View`
    min-width: 330px;
    width:40%;
    height:68%;
    min-height: 550px;
    background-color: #fff;
    border-radius: 15px;
    margin-top: 20px;
    right:-1.5%;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const CompassPlaceHolder = styled.TouchableOpacity`
    min-width: 330px;
    width:40%;
    height: 36%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-self: center;
    background-color: ${COLORS.ALICEBLUE};
    border: 3px dashed ${COLORS.CAROLINABLUE};
    padding:5%;
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);

`;

const CardTitle = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_700Bold';
    line-height: 24px;
    letter-spacing: 0;
    color: ${COLORS.CAROLINABLUE};
`;

const TicketsCont = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TapText = styled.Text`
    color: ${COLORS.LIGHTGREY};
    left:-29%;
    top:-15%;
`;



export default function AddCardManager({
    AddTempTicket = () => { },
    paymentAnimation = () => { },
    ticketType2 = 'Ticket 2',
    ticketType3 = 'Ticket 3',
    tempTimer,
}) {


    const [sTicket1, setSTicket1] = useState(false);
    const [sTicket2, setSTicket2] = useState(false);
    const [sTicket3, setSTicket3] = useState(false);


    const [ticketType1, setTicketType1] = useState("Ticket 1");

    useEffect(() => {
        console.log("temp timer", tempTimer)
        setTicketType1('Day Pass');

    }, [tempTimer])


    return (
        <ThemeProvider>
            <Container>
                <CompassPlaceHolder
                    onPress={AddTempTicket}
                >
                    <CardTitle>Temporary Tickets</CardTitle>
                    <View style={styles.iconCont}>
                        <Icon
                            name='plus'
                            type='antdesign'
                            color={COLORS.CAROLINABLUE}
                            shadowOpacity={0.50}
                            shadowRadius={3}
                            shadowOffset={{ width: 0, height: 3 }}
                            shadowColor={COLORS.SPACECADET}
                            size={80}
                            style={styles.plusIcon}
                        />
                    </View>
                </CompassPlaceHolder>


                <View style={styles.body}>
                    <TicketsCont style={styles.temp1}>
                        <View style={styles.textInput}>
                            <Text>{sTicket1}</Text>
                        </View>

                        <Pressable style={[styles.ticket, styles.bg1]}
                            onPress={paymentAnimation}>
                            <Text style={styles.buttonText}>{ticketType1}:</Text>

                            <CountDown
                                until={tempTimer}
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
                    </TicketsCont>
                    <TicketsCont style={styles.temp2}>
                        <View style={styles.textInput}>
                            <Text>{sTicket2}</Text>
                        </View>

                        <Pressable style={[styles.ticket, styles.bg2]}
                            onPress={paymentAnimation}>
                            <Text style={styles.buttonText}>{ticketType2}: </Text>
                            <CountDown
                                until={0}
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
                    </TicketsCont>

                    <TicketsCont style={styles.temp3}>
                        <View style={styles.textInput}>
                            <Text>{sTicket3}</Text>
                        </View>

                        <Pressable style={[styles.ticket, styles.bg3]}
                            onPress={paymentAnimation}>
                            <Text style={styles.buttonText}>{ticketType3}:</Text>
                            <CountDown
                                until={0}
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
                    </TicketsCont>
                </View>
            </Container>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 'auto',
        height: '64%'
    },
    iconCont: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    plusIcon: {
        top: '-10%',
    },
    addTicket: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 15,
        height: 55,
        width: '80%',
        backgroundColor: '#fff',
        borderColor: '#009ddc',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },

    ticket: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        height: 55,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#252B42',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 0 },

    },
    addButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: COLORS.CAROLINABLUE,
        marginHorizontal: '5%',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: '#222222',
    },
    nameStyle: {
        alignSelf: 'flex-start',
        marginLeft: '11%',
        marginBottom: '2%',
        color: '#222222',
        fontStyle: 'italic',
    },
    textInput: {
        flexDirection: 'row',
        alignContent: 'center',
        width: '100%',
    },
})

