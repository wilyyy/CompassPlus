import styled from "styled-components/native";
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Pressable, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { position } from "polished";

//might remove props later once bus route api is added

const TransitCardCont = styled.View`
    width: 303px;
    height: 105px;
`;

const Trapezoid = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 20px;
    background-color: #575759;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

const TransitCard = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 303px;
    height: 89px;
    background-color: #575759;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const RouteIconCont = styled.View`
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background-color: #fff;
    border-radius: 15px;
`;

const RouteH1 = styled.Text`
    color: #575759;
    font-size: 24px;
    font-weight: bold;
`;

const RouteInfo = styled.View`
    justify-content: space-evenly;
    height: auto;
    width: 165px;
`;

const SaveRouteButton = styled.Pressable`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;


export default function SignUpTransitCard({
    typeOfRideText = "Bus",
    routeIconText = "019",
    stopNameText = "Metrotown Stn",
    locationText = "Eastbound W Pender @ Nicola St"
}) {

    const [fillHeart, setFillHeart] = useState(false);
    const ToggleFillHeart = () => setFillHeart(previousState => !previousState);
    const PressHeart = () => {
        ToggleFillHeart();
    }
    
    return <SafeAreaView>
        <TransitCardCont>
            <Trapezoid>
                <Icon name="bus" size={10} color="#fff" />
                <Text style={styles.type_of_ride}>{typeOfRideText}</Text>
            </Trapezoid>
            <TransitCard>
                <RouteIconCont>
                    <RouteH1>{routeIconText}</RouteH1>
                </RouteIconCont>
                <RouteInfo>
                    <Text style={styles.text_bold}>{stopNameText}</Text>
                    <Text style={styles.text_regular}>{locationText}</Text>
                </RouteInfo>
                <SaveRouteButton onPress={PressHeart}>
                    <Icon name={fillHeart ? "heart" : "heart-o"} size={40} color="#fff" />
                </SaveRouteButton>
            </TransitCard>
        </TransitCardCont>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    text_bold: {
        color: '#fff',
        fontWeight: 'bold'
    },
    type_of_ride: {
        color: '#fff',
        fontWeight: 'bold',
        position: 'relative',
        right: 10
    },
    text_regular: {
        color: '#fff'
    }
});
