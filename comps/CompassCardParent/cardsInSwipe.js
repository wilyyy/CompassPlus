import React, { useRef, useState } from "react";
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

// const SV = styled.ScrollView`
//     /* width: ${scrollWidth}; */
// `;

const dots = new Array(2).fill();

const CardSwipeTest = ({
    handleAddSheetONE = () => { },
    handleAddSheetTWO = () => { },
    passAutoReload = () => { },
    ticketAutoReload = () => { },
    addTempTicket = () => { },
}) => {
    const scrollX = new Animated.Value(0);

    const { width: windowWidth } = useWindowDimensions();

    const [ticketDefault, setTicketDefault] = useState(false);
    //const [passDefault, setPassDefault] = useState(false);
    console.log(ticketDefault, "Ticket D")
    return (
        <SafeAreaView >
            <ScrollView
                contentContainerStyle={styles.container}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
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
                />
                {/* <Ticket
                    onAddFundsPress={handleAddSheetTWO}
                    expiration='90 minutes'
                    onAutoReloadPress={ticketAutoReload}
                    makeDefault={ticketDefault}
                    triggerDefault={() => { setTicketDefault(true) }}

                /> */}
                <AddCardManager
                    AddTempTicket={addTempTicket}
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
        height: '80%',
        width: 770,
        // paddingHorizontal: '5%',
        left: '5%'
        // justifyContent: 'space-between'
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
        top: -205,

    }
});

export default CardSwipeTest;