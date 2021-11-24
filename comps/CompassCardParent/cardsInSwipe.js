import React, { useRef, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions
} from "react-native";

import AddCardManager from "../../comps/CompassCardParent/addCardManager";
import Pass from "./pass.js";
import Ticket from "./ticket";

const dots = new Array(3).fill();

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
        <SafeAreaView style={styles.container}>
            <ScrollView
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
                    onAddFundsPress={handleAddSheetONE}
                    onAutoReloadPress={passAutoReload}

                    triggerDefault={() => { setTicketDefault(false) }}
                    makeDefault={!ticketDefault}
                />
                <Ticket
                    onAddFundsPress={handleAddSheetTWO}
                    expiration='90 minutes'
                    onAutoReloadPress={ticketAutoReload}
                    makeDefault={ticketDefault}
                    triggerDefault={() => { setTicketDefault(true) }}

                />
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
        height: 590,
        paddingHorizontal: '2%',
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
        top: 15

    }
});

export default CardSwipeTest;