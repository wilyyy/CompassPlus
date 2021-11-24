import { borderColor } from 'polished';
import React, { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";


const Container = styled.View`
    width: 350px;
    height: 550px;
    background-color: #fff;
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
    background-color: ${COLORS.ALICEBLUE};
    border-width: 4px;
    border-style: dotted;
    border-color: ${COLORS.CAROLINABLUE};
    box-shadow:  0px 2px 4px rgba(0, 0, 0, 0.75);

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

function setVisability() {
    if (selected == 0) {
        setTempAmount(0);
    }
    if (selected == 1) {
        setTempAmount(1);
    }
    if (selected == 2) {
        setTempAmount(2);
    }
    if (selected == 3) {
        setTempAmount(3);
    }
}



export default function AddCardManager({
    AddTempTicket = () => { },
    countdown1 = '90mins...',
    countdown2 = '55mins...',
    countdown3 = '10mins...',
    ticketType1 = 'Day Pass',
    ticketType2 = '1-Zone',
    ticketType3 = '3-Zone',


}) {


    const [ticket1Amount, set1Ticket1Amount] = useState(0);
    const [ticket2Amount, set2Ticket1Amount] = useState(0);
    const [ticket3Amount, set3Ticket1Amount] = useState(0);

    //ticket 1 states
    if (ticket1Amount === 1) {
        ticketType1 = 'Day Pass';
        ticketCol1 = 'blue';
    }
    if (ticket1Amount === 2) {
        ticketType1 = '1-Zone';
        ticketCol2 = 'blue';
    }
    if (ticket1Amount === 3) {
        ticketType1 = '2-Zone';
        ticketCol3 = 'blue';
    }
    if (ticket1Amount === 4) {
        ticketType1 = '3-Zone';
        ticketCol4 = 'blue';
    }
    if (ticket1Amount === 5) {
        ticketType1 = 'Day Pass';
        ticketCol5 = 'orange';
    }
    if (ticket1Amount === 6) {
        ticketType1 = '1-Zone';
        ticketCol6 = 'orange';
    }
    if (ticket1Amount === 7) {
        ticketType1 = '2-Zone';
        ticketCol5 = 'orange';
    }
    if (ticket1Amount === 8) {
        ticketType1 = '3-Zone';
        ticketCol5 = 'orange';
    }

    //ticket 2 states
    if (ticket2Amount === 1) {
        ticketType1 = 'Day Pass';
        ticketCol1 = 'blue';
    }
    if (ticket2Amount === 2) {
        ticketType1 = '1-Zone';
        ticketCol2 = 'blue';
    }
    if (ticket2Amount === 3) {
        ticketType1 = '2-Zone';
        ticketCol3 = 'blue';
    }
    if (ticket2Amount === 4) {
        ticketType1 = '3-Zone';
        ticketCol4 = 'blue';
    }
    if (ticket2Amount === 5) {
        ticketType1 = 'Day Pass';
        ticketCol5 = 'orange';
    }
    if (ticket2Amount === 6) {
        ticketType1 = '1-Zone';
        ticketCol6 = 'orange';
    }
    if (ticket2Amount === 7) {
        ticketType1 = '2-Zone';
        ticketCol5 = 'orange';
    }
    if (ticket2Amount === 8) {
        ticketType1 = '3-Zone';
        ticketCol5 = 'orange';
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
    // }

    // if (tempAmount === 1) {
    //     //set display on for temp ticket 1
    // }

    // if (tempAmount === 2) {
    //     //set display on for temp ticket 1 & 2
    // }

    // if (tempAmount == 3) {
    //     //set display on for temp ticket 1, 2, & 3
    // }

    return (
        <Container>
            <CompassPlaceHolder />

            <ParentButtonCont>
                <Pressable style={styles.addTicket}
                    onPress={AddTempTicket}
                >
                    <Text style={styles.addButtonText}>Add Tickets</Text>
                </Pressable>
            </ParentButtonCont>
            <TicketsCont style={styles.temp1}>
                <View style={styles.ticket}>
                    <TicketPlaceHolder />
                    <Text style={styles.buttonText}>{ticketType1}: {countdown1}</Text>
                </View>
            </TicketsCont>
            <TicketsCont style={styles.temp2}>
                <View style={styles.ticket}>
                    <TicketPlaceHolder />
                    <Text style={styles.buttonText}>{ticketType2}: {countdown2}</Text>
                </View>
            </TicketsCont>
            <TicketsCont style={styles.temp3}>

                <View style={styles.ticket}>
                    <TicketPlaceHolder />
                    <Text style={styles.buttonText}>{ticketType3}: {countdown3}</Text>
                </View>
            </TicketsCont>



        </Container>
    );
}

const styles = StyleSheet.create({

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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
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
    addButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: '#009ddc',
        marginHorizontal: '5%',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0,
        color: '#009ddc',
        paddingHorizontal: '5%',
        position: 'absolute',
        left: '28%'

    },
    // temp1: {
    //     display: 'none',
    // },
    // temp2: {
    //     display: 'none',
    // },
    // temp3: {
    //     display: 'none',
    // },
})