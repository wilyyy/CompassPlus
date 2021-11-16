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
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

const width = useWindowDimensions().width;
const height = useWindowDimensions().height

const Page = styled.view`
    width: ${width}px;
    height: ${height}px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-items: center;
`;

const Square = styled.View`
    width: 50px;
    height: 50px;
`;

const WillyTestSwipe = () => {
    return <Page>
        <Square />
    </Page>
}

export default WillyTestSwipe;