import styled from "styled-components/native";
import React from 'react';
import { Button, Input, ThemeProvider } from 'react-native-elements';

const theme = {
    colors: {
        primary: '#009DDC', //mess with this later
    },
    Button: {
      raised: true,
    },
  };

const TransferCardCont = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 343px;
    height: 343px;
    background-color: #fff;
    border-radius: 16px;
`;

const Header = styled.Text`
    font-size: 24px;
    position: relative;
    right: -20px;
    align-self: flex-start;
    color: #000000;
`;

const LinkCompassCard = () => {
    return <ThemeProvider theme={theme}>
        <TransferCardCont>
            <Header>Add a Compass Card</Header>
            <Input
                placeholder='Compass Card Number'
            />
            <Input
                placeholder='CVN'
            />
            <Button 
                onPress={() => console.log("hello world")} 
                title="Add Card" 
                style={{ color: theme.colors.primary }}

            />
        </TransferCardCont>
    </ThemeProvider>
}

export default LinkCompassCard;