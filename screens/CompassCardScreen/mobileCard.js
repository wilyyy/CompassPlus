import React, { useState, useRef } from 'react';
import styled from "styled-components/native";
import { ThemeProvider } from 'react-native-elements';
import { Dimensions, StyleSheet, Text, useWindowDimensions, View, } from 'react-native';
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import * as Haptics from 'expo-haptics';



import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { getAuth } from '@firebase/auth';



import { COLORS } from '../../constants/styles.js';
import NavCard from '../../comps/NavBar/NavCard.js';
import BgCircle from '../../comps/Global/BgCircleScreens';


//for animations
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import CardSwipeTest from '../../comps/CompassCardParent/cardsInSwipe';
import AddFundsTabPass from '../../comps/CompassCardParent/addFunds.js';
import AddFundsTabTicket from '../../comps/CompassCardParent/addFundsTicket.js';
import AutoReloadTab from '../../comps/CompassCardParent/autoReload.js';
import TempTicket from '../../comps/CompassCardParent/tempTicket.js';
import PaymentAnimOverlay from '../../comps/CompassCardParent/PayAnimOverlay.js';
import TapAnimOverlay from '../../comps/CompassCardParent/TapAnimOverlay.js';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//page elements 
const Page = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
    background-color: ${COLORS.ALICEBLUE};
    align-items: center;
`;

const TopContainer = styled.View`
    top: 15%;
    width: 90%;
    height: 50px; 
    justify-content: space-between;
    flex-direction: row;
`;

const Container = styled.ScrollView`
    position: relative;
    width: 90%;
    height: 85%;
    justify-content: space-evenly;
    align-items: center;
    margin-top:30px;
    flex-direction: row;
`;

const H1 = styled.Text`
    font-size: 24px;
    color: #fff;
    margin-left:auto;
    margin-right:auto;
    align-self: flex-start;
    font-family: 'Ubuntu_700Bold';
`;

const H2 = styled.Text`
    font-size: 24px;
    color: #fff;
`;

//ANIMATIONS
// reusable spring config
const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
};

export default function CompassCardScreen({ }) {
    const dimensions = useWindowDimensions();
    navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });



    // ====== 🌟🌟🌟🌟🌟🌟 ANIMATIONS START 🌟🌟🌟🌟🌟🌟 ======


    // ---------- RELOAD pass ANIMATIONS START ----------
    const topPass = useSharedValue(
        (dimensions.height + 400)
    );
    const stylePass = useAnimatedStyle(() => {
        return {
            top: withSpring(topPass.value, SPRING_CONFIG),
        };
    });
    const gestureHandlerPass = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = topPass.value;
        },
        onActive(event, context) {
            topPass.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (topPass.value > dimensions.height / 2 + 150) {
                topPass.value = withSpring(dimensions.height + 300);
            } else {
                topPass.value = withSpring(dimensions.height / 2.25);
            }
        }
    });
    function ReloadPass() {
        // need to set states to save new balances
        topPass.value = withSpring(dimensions.height + 300);
    }
    function handlePassReload() {
        topPass.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );

    }
    // ---------- Reload pass ANIMATIONS END ----------


    // ---------- RELOAD ticket ANIMATIONS START ----------
    const topTicket = useSharedValue(
        (dimensions.height + 400)
    );
    const styleTicket = useAnimatedStyle(() => {
        return {
            top: withSpring(topTicket.value, SPRING_CONFIG),
        };
    });
    const gestureHandlerTicket = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = topTicket.value;
        },
        onActive(event, context) {
            topTicket.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (topTicket.value > dimensions.height / 2 + 150) {
                topTicket.value = withSpring(dimensions.height + 300);
            } else {
                topTicket.value = withSpring(dimensions.height / 2.25);
            }
        }
    });
    function ReloadTicket() {
        topTicket.value = withSpring(dimensions.height + 300);
    }
    function handleTicketReload() {
        topTicket.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }
    // ----------  RELOAD ticket ANIMATIONS END ----------


    // ---------- TICKET Auto Reload ANIMATIONS START ----------
    const topAutoTicket = useSharedValue(
        (dimensions.height + 400)
    );
    const styleAutoTicket = useAnimatedStyle(() => {
        return {
            top: withSpring(topAutoTicket.value, SPRING_CONFIG),
        };
    });
    const gestureHandlerAutoTicket = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = topAutoTicket.value;
        },
        onActive(event, context) {
            topAutoTicket.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (topAutoTicket.value > dimensions.height / 2 + 200) {
                topAutoTicket.value = withSpring(dimensions.height + 300);
            } else {
                topAutoTicket.value = withSpring(dimensions.height / 2.5);
            }
        }
    });

    function confirmAutoReload() {
        topAutoTicket.value = withSpring(dimensions.height + 300);
    }

    function handleTicketAuto() {
        topAutoTicket.value = withSpring(
            dimensions.height / 2.25,
            SPRING_CONFIG
        );
    }

    // ---------- TICKET Auto Reload ANIMATIONS END ----------


    // ---------- TICKET Temp ANIMATIONS START ----------
    // (best explanations here)

    //i am top value
    const topTemp = useSharedValue(
        (dimensions.height + 400)
    );

    //i queue tab open!
    function handleTempTicket() {
        topTemp.value = withSpring(
            dimensions.height / 3,
            SPRING_CONFIG
        );
    }

    //i assign animated top value to tab
    const styleTemp = useAnimatedStyle(() => {
        return {
            top: withSpring(topTemp.value, SPRING_CONFIG),
        };
    });

    // i assign animation values (start, active, end)
    const gestureHandlerTempTicket = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = topTemp.value;
        },
        onActive(event, context) {
            topTemp.value = context.startTop + event.translationY;
        },
        onEnd() {
            if (topTemp.value > dimensions.height / 2 + 150) {
                topTemp.value = withSpring(dimensions.height + 300);
            } else {
                topTemp.value = withSpring(dimensions.height / 3);
            }
        }
    });

    // i close tab!
    function confirmTempTicket(passPaymentType, zoneAmount, zoneType) {
        topTemp.value = withSpring(dimensions.height + 300);
        // console.log(zoneType);
    }

    // ---------- TICKET Temp ANIMATIONS END ----------

    var anim = useRef();
    const [lottieAnim, setLottieAnim] = useState(false);
    const [lottieAnimTap, setLottieAnimTap] = useState(false);
    function paymentAnimation() {
        Haptics.selectionAsync();
        setLottieAnim(true);
        setTimeout(function () { Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) }, 500);
        setTimeout(function () { setLottieAnim(false); }, 1200);
    }

    function tapAnimation() {
        Haptics.selectionAsync();
        setLottieAnimTap(true);
        setTimeout(function () { setLottieAnimTap(false); }, 3000);
        setTimeout(function () { setLottieAnim(true); }, 3100);
        setTimeout(function () { setLottieAnim(false); }, 4500);
        setTimeout(function () { Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) }, 3100);
    }

    function pressOutAnim() {
        setLottieAnimTap(false);
    }



    // ====== 🌟🌟🌟🌟🌟🌟 ANIMATIONS END 🌟🌟🌟🌟🌟🌟 ======


    const [passTimer, setPassTimer] = useState(0);
    const [dailyTimer, setDailyTimer] = useState(0);



    function startPass() {
        setPassTimer(2419200);
        console.log("time started: ", passTimer)
    }

    function startDaily() {
        setDailyTimer(86400);
        console.log("daily time started: ", dailyTimer)
    }


    /* 🪓🪓🪓 AXIOS STUFF  🪓🪓🪓 */

    //Get Comp Card info and set balance to w/e is on database (default $0)
    const [compBalance, setCompBalance] = useState(null);

    const GetCompassCard = async () => {
        const associateAuth = getAuth();
        const fb_uid = associateAuth.currentUser.uid;
        const result = await axios.get('/compass_card.php', { params: { fb_uid: fb_uid } });

        console.log(result.data[0].balance);
        setCompBalance(result.data[0].balance);
    }
    useFocusEffect(
        React.useCallback(() => {
            GetCompassCard();
        })
    )
    /* 🪓🪓🪓 AXIOS STUFF END 🪓🪓🪓 */

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <ThemeProvider>
                <Page>
                    <PaymentAnimOverlay
                        lottieAnim={lottieAnim}
                    />
                    <TapAnimOverlay
                        lottieAnimTap={lottieAnimTap}
                        closeAnim={pressOutAnim}
                    />

                    <BgCircle />
                    <TopContainer>
                        <H1>My Cards</H1>

                    </TopContainer>
                    <Text style={styles.TapQueue}>Tap, reload, and manage your Compass Card</Text>
                    <CardSwipeTest
                        handleAddSheetONE={handlePassReload}
                        handleAddSheetTWO={handleTicketReload}
                        ticketAutoReload={handleTicketAuto}
                        addTempTicket={handleTempTicket}
                        paymentAnimation={tapAnimation}
                        setMonthTimer={passTimer}
                        startTempTimer={dailyTimer}
                        balance={compBalance}
                    />

                </Page>

                {/* RELOAD pass ANIMATION TAB  */}
                <PanGestureHandler
                    onGestureEvent={gestureHandlerPass}
                >
                    <Animated.View
                        style={[styles.overlayTabCont, stylePass]}>
                        <AddFundsTabPass
                            month='December'
                            AddFundsConfirm={ReloadPass}
                            startAnimation={paymentAnimation}
                            StartMonthTimer={startPass}

                        />
                    </Animated.View>
                </PanGestureHandler>


                {/* RELOAD ticket ANIMATION TAB  */}
                <PanGestureHandler
                    onGestureEvent={gestureHandlerTicket}
                >
                    <Animated.View style={[styles.overlayTabCont, styleTicket]} >
                        <AddFundsTabTicket
                            ticketBalance={compBalance} //this will come from the database
                            AddFundsConfirm={ReloadTicket}
                            startAnimation={paymentAnimation}
                        />
                    </Animated.View>
                </PanGestureHandler>

                {/* TICKET auto reload ANIMATION TAB  */}
                <PanGestureHandler
                    onGestureEvent={gestureHandlerAutoTicket}
                >
                    <Animated.View style={[styles.overlayTabCont, styleAutoTicket]} >
                        <AutoReloadTab
                            autoReloadConfirm={confirmAutoReload}
                            startAnimation={paymentAnimation}
                        />
                    </Animated.View>
                </PanGestureHandler>

                {/* TICKET temp ANIMATION TAB  */}

                <PanGestureHandler
                    onGestureEvent={gestureHandlerTempTicket}
                >
                    <Animated.View style={[styles.overlayTabCont, styleTemp]} >
                        <TempTicket
                            tempTicketConfirm={confirmTempTicket}
                            startAnimation={paymentAnimation}
                            startTimer={startDaily}
                        />
                    </Animated.View>
                </PanGestureHandler>

                <View style={styles.NavCont}>
                    <NavCard />
                </View>

            </ThemeProvider>
        );
    }
}



const styles = StyleSheet.create({
    payment: {
        color: '#fff',
        fontWeight: 'bold',
    },
    plusIcon: {
        paddingLeft: 5,
    },
    TapQueue: {
        alignSelf: 'center',
        marginTop: '12%',
        marginBottom: '5%',
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Ubuntu_400Regular'
    },
    NavCont: {
        position: 'absolute',
        bottom: 0,

    },
    overlayTabCont: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        shadowColor: '#222222',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    overlayPay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingVertical: '30%',
        backgroundColor: 'rgba(37, 43, 66, 0.75)',
        shadowColor: '#222222',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    lottieCont: {
        zIndex: 10,
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: 'red',
        borderWidth: 2,
        top: '30%',

    },
    lottiePay: {
        width: '100%',
        height: '100%',
    },
});
