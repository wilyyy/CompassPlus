import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';


export default function PaymentAnimOverlay({
    lottieAnim = false,
}) {
    var anim = useRef();

    if (lottieAnim === true) {
        return (
            <View style={styles.lottieCont}>
                <LottieView
                    style={styles.lottiePay}
                    ref={(ref) => {
                        anim = ref;
                    }}
                    source={require('../../assets/lottie/confirm.json')}
                    autoPlay={true}
                />
            </View>
        );
    } return (
        <>
        </>
    )

}

const styles = StyleSheet.create({
    lottieCont: {
        zIndex: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.50)',
        position: 'absolute'

    },
    lottiePay: {
        width: 170,
        height: 170,

    },

});