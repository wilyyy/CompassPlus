import { borderColor } from 'polished';
import React, { useState, useEffect } from 'react';
import { Button, Image, Pressable, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ThemeProvider, Icon } from 'react-native-elements';
import styled from 'styled-components/native';
import CountDown from 'react-native-countdown-component';
import { COLORS } from "../../constants/styles";
import { width } from 'dom-helpers';
import { TextInput } from 'react-native-gesture-handler';
import { words } from 'lodash';

// const Spacing = styled.View`

//     border-width: 2px;
//     border-color: red;
//     margin-right:20px;
// `;

const Container = styled.View`
    width: 350px;
    height:68%;
    min-height: 550px;
    background-color: #fff;
    border-radius: 15px;
    margin-top: 20px;
    /* right:2%; */
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const CompassPlaceHolder = styled.Pressable`
    width: 100%;
    height: 36%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    align-self: center;
    background-color: ${COLORS.ALICEBLUE};
    border-width: 4px;
    border-style: dotted;
    padding:5%;
    border-color: ${COLORS.CAROLINABLUE};
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);

`;

const CardTitle = styled.Text`
font-size: 18px;
    font-family: 'Ubuntu_700Bold';
    line-height: 24px;
    letter-spacing: 0;
    color: ${COLORS.SPACECADET};
`;


const ParentButtonCont = styled.View`
    height:100px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;

    /* border-width: 2px;
    border-color: red; */
`;

const TicketsCont = styled.View`
    align-items: center;
    justify-content: center;
    /* height:250px; */
    flex-direction: column;
    
    /* border-width: 2px;
    border-color: red; */
`;

const TicketPlaceHolder = styled.View`
    width:60px;
    height:40px;
    background-color: ${COLORS.CAROLINABLUE};
    border-radius:5px;
    position: absolute;
    left:2%;
`;

const Hr = styled.View`
    width:80%;
    background-color: ${COLORS.SPACECADET};
    height:2px;
    align-self: center;
`;

// function setVisability() {
//     if (selected == 0) {
//         setTempAmount(0);
//     }
//     if (selected == 1) {
//         setTempAmount(1);
//     }
//     if (selected == 2) {
//         setTempAmount(2);
//     }
//     if (selected == 3) {
//         setTempAmount(3);
//     }
// }



export default function AddCardManager({
    AddTempTicket = () => { },
    countdown1 = '90mins...',
    countdown2 = '55mins...',
    countdown3 = '10mins...',
    ticketType1 = 'Day Pass',
    ticketType2 = '1-Zone',
    ticketType3 = '3-Zone',
    name1 = 'Zoë',
    name2 = 'Will',
    name3 = 'Sarah',


}) {


    const [ticket1Amount, set1Ticket1Amount] = useState(0);
    const [ticket2Amount, set2Ticket1Amount] = useState(0);
    const [ticket3Amount, set3Ticket1Amount] = useState(0);

    const [sTicket1, setSTicket1] = useState(false);
    const [sTicket2, setSTicket2] = useState(false);
    const [sTicket3, setSTicket3] = useState(false);


    //ticket 1 states
    if (ticket1Amount === 1) {
        ticketType1 = 'Day Pass';
        ticketCol1 = 'blue';
    }
    if (ticket1Amount === 2) {
        ticketType1 = '1-Zone';
        ticketCol1 = 'blue';
    }
    if (ticket1Amount === 3) {
        ticketType1 = '2-Zone';
        ticketCol1 = 'blue';
    }
    if (ticket1Amount === 4) {
        ticketType1 = '3-Zone';
        ticketCol1 = 'blue';
    }
    if (ticket1Amount === 5) {
        ticketType1 = 'Day Pass';
        ticketCol1 = 'orange';
    }
    if (ticket1Amount === 6) {
        ticketType1 = '1-Zone';
        ticketCol1 = 'orange';
    }
    if (ticket1Amount === 7) {
        ticketType1 = '2-Zone';
        ticketCol1 = 'orange';
    }
    if (ticket1Amount === 8) {
        ticketType1 = '3-Zone';
        ticketCol1 = 'orange';
    }

    //ticket 2 states
    if (ticket2Amount === 1) {
        ticketType1 = 'Day Pass';
        ticketCol2 = 'blue';
    }
    if (ticket2Amount === 2) {
        ticketType1 = '1-Zone';
        ticketCol2 = 'blue';
    }
    if (ticket2Amount === 3) {
        ticketType1 = '2-Zone';
        ticketCol2 = 'blue';
    }
    if (ticket2Amount === 4) {
        ticketType1 = '3-Zone';
        ticketCol2 = 'blue';
    }
    if (ticket2Amount === 5) {
        ticketType1 = 'Day Pass';
        ticketCol2 = 'orange';
    }
    if (ticket2Amount === 6) {
        ticketType1 = '1-Zone';
        ticketCol2 = 'orange';
    }
    if (ticket2Amount === 7) {
        ticketType1 = '2-Zone';
        ticketCol2 = 'orange';
    }
    if (ticket2Amount === 8) {
        ticketType1 = '3-Zone';
        ticketCol2 = 'orange';
    }

    //ticket 3 states
    if (ticket3Amount === 1) {
        ticketType1 = 'Day Pass';
        ticketCol1 = 'blue';
    }
    if (ticket3Amount === 2) {
        ticketType1 = '1-Zone';
        ticketCol2 = 'blue';
    }
    if (ticket3Amount === 3) {
        ticketType1 = '2-Zone';
        ticketCol3 = 'blue';
    }
    if (ticket3Amount === 4) {
        ticketType1 = '3-Zone';
        ticketCol4 = 'blue';
    }
    if (ticket3Amount === 5) {
        ticketType1 = 'Day Pass';
        ticketCol5 = 'orange';
    }
    if (ticket3Amount === 6) {
        ticketType1 = '1-Zone';
        ticketCol6 = 'orange';
    }
    if (ticket3Amount === 7) {
        ticketType1 = '2-Zone';
        ticketCol5 = 'orange';
    }
    if (ticket3Amount === 8) {
        ticketType1 = '3-Zone';
        ticketCol5 = 'orange';
    }


    // if (tempAmount === 0) {
    //     //align add ticket button to center of card
    //     //set display none to all temp tickets
    //     setSTicket1('none');
    //     setSTicket2('none');
    //     setSTicket3('none');
    // }

    // if (tempAmount === 1) {
    //     //set display on for temp ticket 1
    //     setSTicket1('initial');
    //     setSTicket2('none');
    //     setSTicket3('none');
    // }

    // if (tempAmount === 2) {
    //     //set display on for temp ticket 1 & 2
    //     setSTicket1('initial');
    //     setSTicket2('initial');
    //     setSTicket3('none');
    // }

    // if (tempAmount == 3) {
    //     //set display on for temp ticket 1, 2, & 3
    //     setSTicket1('initial');
    //     setSTicket2('initial');
    //     setSTicket3('initial');
    // }

    const hours24 = 86400000;
    const minutes90 = 5400;

    return (
        <ThemeProvider>
            {/* <Spacing> */}
            <Container>
                <CompassPlaceHolder
                    onPress={AddTempTicket}
                >
                    <CardTitle>Temporary Tickets</CardTitle>
                    <View style={styles.iconCont}>
                        <Icon
                            name='plus'
                            type='antdesign'
                            color={COLORS.ALICEBLUE}
                            shadowOpacity={0.25}
                            shadowRadius={3}
                            shadowOffset={{ width: 0, height: 3 }}
                            shadowColor='#222222'
                            size={80}
                            style={styles.plusIcon}

                        />
                    </View>
                </CompassPlaceHolder>


                <View style={styles.body}>
                    <TicketsCont style={styles.temp1}>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.nameStyle}
                                placeholder={'Add name'}
                                onSubmitEditing={() => { setSTicket1("' ticket") }}
                                maxLength={50}
                            />
                            <Text>{sTicket1}</Text>
                        </View>

                        <View style={[styles.ticket, styles.bg1]}>
                            <Text style={styles.buttonText}>{ticketType1}:</Text>

                            <CountDown
                                until={hours24}
                                onFinish={() => alert('dlt')}
                                size={15}
                                timeToShow={['H', 'M', 'S']}
                                timeLabels={{ h: null, m: null, s: null }}
                                showSeparator
                                separatorStyle={COLORS.SPACECADET}
                                digitStyle={{ backgroundColor: COLORS.CONCESSION }}
                                digitTxtStyle={{ color: '#fff' }}
                            />
                        </View>
                    </TicketsCont>
                    <TicketsCont style={styles.temp2}>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.nameStyle}
                                placeholder={'Add name'}
                                maxLength={50}
                                onSubmitEditing={() => { setSTicket2("'s ticket") }}
                            />
                            <Text>{sTicket2}</Text>
                        </View>

                        <View style={[styles.ticket, styles.bg2]}>
                            {/* <TicketPlaceHolder /> */}
                            <Text style={styles.buttonText}>{ticketType2}: </Text>
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
                        </View>
                    </TicketsCont>
                    <TicketsCont style={styles.temp3}>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.nameStyle}
                                placeholder={'Add name'}
                                maxLength={50}
                                onSubmitEditing={() => { setSTicket3("'s ticket") }}
                            />
                            <Text>{sTicket3}</Text>
                        </View>

                        <View style={[styles.ticket, styles.bg3]}>
                            {/* <TicketPlaceHolder /> */}
                            <Text style={styles.buttonText}>{ticketType3}:</Text>
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
                        </View>
                    </TicketsCont>
                </View>
            </Container>
            {/* </Spacing> */}
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
        // borderColor: '#222222',
        // borderWidth: 2,
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
        // paddingHorizontal: '5%',

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
    //need to make background color into a state too
    // bg1: {
    //     display: { sTicket1 },
    //     backgroundColor: { ticketCol1 },
    //     borderColor: 'red',
    //     borderWidth: 2,
    // },
    // bg2: {
    //     // display: 'none',
    //     backgroundColor: { ticketCol2 },
    // },
    // bg3: {
    //     // display: 'none',
    //     backgroundColor: { ticketCol3 },
    // },


    // temp1: {
    //     display: { sTicket1 },
    // },
    // temp2: {
    //     display: { sTicket2 },
    // },
    // temp3: {
    //     display: { sTicket3 },
    // },
})



{/* <ParentButtonCont>
                <Pressable style={styles.addTicket}
                    onPress={AddTempTicket}
                >
                    <Text style={styles.addButtonText}>Add Tickets</Text>
                </Pressable>
            </ParentButtonCont> */}