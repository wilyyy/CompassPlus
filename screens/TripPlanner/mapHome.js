import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';

import styled from "styled-components/native";

import { COLORS } from '../../constants/styles.js';
import TripPlannerTab from '../../comps/SignUp/tripPlannerTab.js'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    align-items: center;
`;

const MapHome = () => {
    
}