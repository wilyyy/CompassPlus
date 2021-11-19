import React, { useRef } from "react";
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
import MobileCard from '../../comps/CompassCardParent/cardManager.js';

const dots = new Array(3).fill();

const CardSwipeTest = ({
    handleAddSheetONE = () => { },
    handleAddSheetTWO = () => { },
}) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();

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
                <MobileCard
                    onAddFundsPress={handleAddSheetONE}
                />
                <MobileCard
                    onAddFundsPress={handleAddSheetTWO}
                    titleCardType='Stored Value Ticket'
                    cardType="Ticket"
                    expiration='90 minutes'
                    phrasing='in'
                    buttonTitle='Add Funds'
                />
                <AddCardManager />

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
        marginHorizontal: 2.5
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
        // borderColor: 'purple'

    }
});

export default CardSwipeTest;