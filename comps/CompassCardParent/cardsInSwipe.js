import React, { useEffect, useRef, useState } from "react";
import {
    SafeAreaView,
    Dimensions,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions
} from "react-native";
import styled from "styled-components";

import AddCardManager from "../../comps/CompassCardParent/addCardManager";
import Pass from "./pass.js";
import Ticket from "./ticket";

const windowWidth = Dimensions.get('window').width;
const scrollWidth = windowWidth * 4;
const windowHeight = Dimensions.get('window').height;



const dots = new Array(2).fill();

const CardSwipeTest = ({
    handleAddSheetONE = () => { },
    handleAddSheetTWO = () => { },
    passAutoReload = () => { },
    ticketAutoReload = () => { },
    addTempTicket = () => { },
    paymentAnimation = () => { },
    balance=4.05
}) => {
    const scrollX = new Animated.Value(0);

    const { width: windowWidth } = useWindowDimensions();



    const [ticketDefault, setTicketDefault] = useState(false);
    //const [passDefault, setPassDefault] = useState(false);
    // console.log(ticketDefault, "Ticket D")
    return (
        <SafeAreaView style={{
            width: '100%'
            // , borderColor: 'red', borderWidth: 2 
        }}>
            <ScrollView
                contentContainerStyle={styles.container}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment={'center'}

                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }
                ])}
                scrollEventThrottle={1}
            >
                <Pass
                    reloadPass={handleAddSheetONE}
                    onAutoReloadPress={passAutoReload}
                    reloadStoredValue={handleAddSheetTWO}
                    triggerDefault={() => { setTicketDefault(false) }}
                    makeDefault={!ticketDefault}
                    onAutoReloadPress={ticketAutoReload}
                    paymentAnimation={paymentAnimation}
                    balance={balance}
                />
                {/* <Ticket
                    onAddFundsPress={handleAddSheetTWO}
                    expiration='90 minutes'
                    onAutoReloadPress={ticketAutoReload}
                    makeDefault={ticketDefault}
                    triggerDefault={() => { setTicketDefault(true) }}

                /> */}
                <View
                    style={{ width: '5%' }}
                />
                <AddCardManager
                    AddTempTicket={addTempTicket}
                    paymentAnimation={paymentAnimation}
                />

            </ScrollView>
            <View style={styles.indicatorContainer}>
                {dots.map((dot, dotIndex) => {
                    const width = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (dotIndex - 1),
                            windowWidth * dotIndex,
                            windowWidth * (dotIndex + 1)
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: "clamp"
                    });
                    return (
                        <Animated.View
                            key={dotIndex}
                            style={[styles.normalDot, { width }]}
                        />
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '200%',
        maxWidth: 750,

        // left: '5%'
        // marginLeft: '5%',
        marginLeft: '8%',
        paddingRight: '70%',

        // justifyContent: 'space-between',
        // justifyContent: 'space-between'
        // borderWidth: 2,
        // borderColor: 'pink'
    },

    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4,
        // borderWidth: 2,
        // borderColor: 'pink'
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 2,
        // borderColor: 'purple',
        // top: -205,
        bottom: '-2%',

    }
});

export default CardSwipeTest;