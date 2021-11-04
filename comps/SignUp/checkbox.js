import { View, Dimensions, StyleSheet, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styled from "styled-components/native";


const Checkbox = styled.Pressable`
    width: 40px;
    height: 40px;
    border: 3px solid #fff;
    justify-content: center;
    border-radius: 7px;
    align-items: center;
    margin-right: 10px;
`;

const CheckboxSelected = styled.Pressable`
    width: 25px;
    height: 25px;
    border-radius: 7px;
    background-color: #fff;
    position: absolute;
    display: ${props=>props.checkbox_disp};
`;

const SignUpCheckBox = () => {
    const [clickCheckbox, setClickCheckbox] = useState(false);
    const ToggleCheckboxSelect = () => setClickCheckbox(previousState => !previousState);
    const PressCheckBox = () => {
        ToggleCheckboxSelect();
    }

    return <Checkbox onPress={PressCheckBox}>
        <CheckboxSelected onPress={PressCheckBox} checkbox_disp={clickCheckbox ? "flex" : "none"} />
    </Checkbox>

}

export default SignUpCheckBox;