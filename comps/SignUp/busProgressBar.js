import React, { useState } from 'react';
import styled from "styled-components/native";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { position } from 'polished';


const Container = styled.View`
    width: 100%;
    height: 62px;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const IconCont = styled.View`
    width: 40px;
    height: 60px;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    left: ${props => props.position};
`;

const Icon = styled.View`
    width: 40px;
    height: 40px;
`;

const BusCircle = styled.View`
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 30px;
`;

const Divider = styled.View`
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    top: 50px;
`;

const BusProgressBar = ({
    position = 0
}) => {
    return <Container>
        <IconCont position={position}>
            <Icon>
                <MaterialIcon
                    name="bus-side"
                    size={40}
                    color="#fff"
                />
            </Icon>
            <BusCircle />
        </IconCont>
        <Divider />
    </Container>
}

export default BusProgressBar;