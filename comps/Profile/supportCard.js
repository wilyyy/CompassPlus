import React, { useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, Linking } from 'react-native';
import { Icon, Divider } from 'react-native-elements'
import styled from "styled-components/native";
import { COLORS } from '/Users/sarahhusslein/Desktop/CompassCard/CompassPlus/constants/styles.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
    width: ${windowWidth};
    height: 70px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-self: center;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;
const ItemRow = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
`;

const TitleText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    padding-left: 15;
    color: #ffffff;
`;

const SubContainer = styled.View`
`;

const SubtitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-top: 20;
    padding-left: 20;
`;

const DescriptionText = styled.Text`
    font-size: 16px;
    font-weight: normal;
    padding-top: 15;
    padding-left: 20;
    color: ${COLORS.DAVYSGREY}
    padding-bottom: 25;
    max-width: 365;
`;

const SupportCard = () => {
    return (
        <View>
            <Container>
                <Row>
                    <Icon 
                        style={{paddingLeft: 15}} 
                        name='question' 
                        color='white'
                        size={24}
                    />
                    <TitleText>Help and Feedback</TitleText>
                </Row>
            </Container>
            <View >
                <TouchableOpacity onPress={()=>{Linking.openURL('https://www.compasscard.ca/ContactUs')}}>
                    <ItemRow>
                        <SubContainer>
                            <SubtitleText>Contact Information</SubtitleText>
                            <DescriptionText>General contact information for Translink and operating companies.</DescriptionText>
                        </SubContainer>
                        <Icon 
                            style={{alignSelf:'flex-end', paddingLeft: 10,}} 
                            name='link' 
                            color={COLORS.DAVYSGREY}
                            size={30}
                        />
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY}/>
            </View>
            <View >
                <TouchableOpacity onPress={()=>{Linking.openURL('https://www.translink.ca/-/media/translink/documents/transit-fares/compass-card/compass_refund_request_form.pdf')}}>
                    <ItemRow>
                        <SubContainer>
                            <SubtitleText>Lost and Found</SubtitleText>
                            <DescriptionText>Did you loose your compass card or another item? Click here to report it.</DescriptionText>
                        </SubContainer>
                        <Icon 
                            style={{alignSelf:'flex-end', paddingLeft: 10,}} 
                            name='link' 
                            color={COLORS.DAVYSGREY}
                            size={30}
                        />
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY}/>
            </View>
            <View >
                <TouchableOpacity onPress={()=>{Linking.openURL('https://www.compasscard.ca/Help')}}>
                    <ItemRow>
                        <SubContainer>
                            <SubtitleText>File a Claim</SubtitleText>
                            <DescriptionText>From time to time, incidents occur in our system.</DescriptionText>
                        </SubContainer>
                        <Icon 
                            style={{alignSelf:'flex-end', marginRight:0, paddingLeft: 10,}} 
                            name='link' 
                            color={COLORS.DAVYSGREY}
                            size={30}
                        />
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY}/>
            </View>
            <View >
                <TouchableOpacity onPress={()=>{Linking.openURL('https://www.compasscard.ca/ContactUs')}}>
                    <ItemRow>
                        <SubContainer>
                            <SubtitleText>Talk to a Representative</SubtitleText>
                            <DescriptionText>Have a question? Chat with our virtual assistant.</DescriptionText>
                        </SubContainer>
                        <Icon 
                            style={{alignSelf:'flex-end', marginRight:0, paddingLeft: 10,}} 
                            name='link' 
                            color={COLORS.DAVYSGREY}
                            size={30}
                        />
                    </ItemRow>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.DAVYSGREY}/>
            </View>
        </View>
    );
}

export default SupportCard