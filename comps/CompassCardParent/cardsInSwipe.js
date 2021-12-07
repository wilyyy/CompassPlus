import React, { useState } from "react";
import {
    SafeAreaView,
    Dimensions,
    ScrollView,
    StyleSheet,
    View,
    Animated,
    useWindowDimensions
} from "react-native";

import AddCardManager from "../../comps/CompassCardParent/addCardManager";
import Pass from "./pass.js";

const windowWidth = Dimensions.get('window').width;


const dots = new Array(2).fill();

const CardSwipeTest = ({
    handleAddSheetONE = () => { },
    handleAddSheetTWO = () => { },
    passAutoReload = () => { },
    ticketAutoReload = () => { },
    addTempTicket = () => { },
    paymentAnimation = () => { },
    setMonthTimer,
    startTempTimer,
    balance = 4.05,
}) => {
    const scrollX = new Animated.Value(0);

    const { width: windowWidth } = useWindowDimensions();

    const [ticketDefault, setTicketDefault] = useState(false);

    return (
        <SafeAreaView style={{
            width: '100%'
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
                    monthlyTimer={setMonthTimer}
                    balance={balance}
                />
                <View
                    style={{ width: '5%' }}
                />
                <AddCardManager
                    AddTempTicket={addTempTicket}
                    paymentAnimation={paymentAnimation}
                    tempTimer={startTempTimer}
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
        marginLeft: '8%',
        paddingRight: '70%',
    },

    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: '-2%',
    }
});

export default CardSwipeTest;