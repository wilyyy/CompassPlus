import React, { useState } from 'react';
import styled from "styled-components/native";
import { Divider } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const BusTrackerCont = styled.View`
    width: 100%;
    height: 51px;
`;

const IconCont = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
    left: ${props=>props.busPosition};
`;

const BusCircle = styled.View`
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    top: -10px;
    border-radius: 30px;
    left: ${props=>props.circlePosition};
`;

const BusProgressBar = ({
    busPosition = "0px",
    circlePosition = "10px"
}) => {
    return <BusTrackerCont>
        <IconCont
            busPosition={busPosition}
        >
            <MaterialIcon 
                name="bus-side" 
                size={40}
                color="#fff"
            />
        </IconCont>
        <Divider 
            orientation="horizontal" 
            width={2}
            color={'#fff'}
        >
            <BusCircle 
                circlePosition={circlePosition}
            />
        </Divider>
    </BusTrackerCont>
}

export default BusProgressBar;