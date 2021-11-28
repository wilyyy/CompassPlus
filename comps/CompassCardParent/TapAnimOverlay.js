import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import LottieView from 'lottie-react-native';


export default function TapAnimOverlay({
    lottieAnimTap = false,
    closeAnim = () => { },
}) {
    var anim = useRef();

    if (lottieAnimTap === true) {
        return (
            <Pressable style={styles.lottieCont}
                onPress={closeAnim}
            >
                <LottieView
                    style={styles.lottiePay}
                    ref={(ref) => {
                        anim = ref;
                    }}
                    source={require('../../assets/lottie/tapToPay.json')}
                    autoPlay={true}
                />
            </Pressable>
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
        position: 'absolute',


    },
    lottiePay: {
        width: 400,
        height: 400,
    },

});