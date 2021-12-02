
import React, { useState } from 'react';
import { Animated, Button, StyleSheet, TouchableOpacity, View, TextInput, Pressable, Dimensions } from 'react-native';
import { ThemeProvider, Icon } from 'react-native-elements';

import styled from 'styled-components/native';
import { COLORS } from "../../constants/styles";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Cont = styled.View`
    width: 375px;
    height: 600px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    color: #222222;
    margin:50px 20px 15px 20px;
`;

const Subtitle = styled.Text`
    font-size: 18px;
    text-align: left;
    padding-left: '10%;

`;

const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    align-self: center;
    font-weight: 700;
`;

const Box = styled.View`
    width: 30px;
`;

const BoxHeight = styled.View`
    height: 20px;
`;



export default function AddPaymentType({
    AddPaymentType = () => { },
}) {


    return (
        <ThemeProvider>
            {/* <Cont> */}
            {/* <Pressable
                style={styles.close}
                onPress={AddPaymentType}
            >
                <Icon
                    name='close'
                    type='antdesign'
                    color={COLORS.SPACECADET}
                    size={30}
                    reverse={false}
                    style={styles.icon}

                />
            </Pressable> */}
            {/* <Title>Add payment</Title> */}
            <Subtitle>Add a Card</Subtitle>
            <TextInput
                style={styles.input}
                placeholder='Card Number'
                keyboardType='number-pad'
                autoComplete='cc-number'
            />
            <TextInput
                style={styles.input}
                placeholder='MM/YY'
                keyboardType='number-pad'
                autoComplete='cc-exp'
            />
            <TextInput
                style={styles.input}
                placeholder='Name on Card'
                keyboardType='default'
                autoComplete='name'
                autoCapitalize
            />

            <BoxHeight />

            <Subtitle>Billing Address</Subtitle>
            <View style={styles.splitInput}>
                <TextInput
                    style={styles.inputhalf}
                    placeholder='First Name'
                    keyboardType='default'
                    autoComplete='name-given'
                    autoCapitalize
                />
                <Box />
                <TextInput
                    style={styles.inputhalf}
                    placeholder='Last Name'
                    keyboardType='default'
                    autoComplete='family-name'
                    autoCapitalize
                />
            </View>




            <TextInput
                style={styles.input}
                placeholder='Street Address'
                keyboardType='default'
                autoComplete='street-address'
                autoCapitalize
            />
            <TextInput
                style={styles.input}
                placeholder='Apt/Suite (Optional)'
                keyboardType='default'
                autoComplete='street-address'
                autoCapitalize
            />
            <TextInput
                style={styles.input}
                placeholder='City'
                keyboardType='default'
                autoComplete='postal-address-locality'
                autoCapitalize
            />

            <TextInput
                style={styles.input}
                placeholder='Country'
                keyboardType='default'
                autoComplete='postal-address-country'
                autoCapitalize
            />
            <TextInput
                style={styles.input}
                placeholder='Postal Code'
                keyboardType='default'
                autoCapitalize
                autoComplete='postal-code'
            />
            <TextInput
                style={styles.input}
                placeholder='Phone Number'
                keyboardType='phone-pad'
                autoComplete='tel'
            />
            {/* <TouchableOpacity
                onPress={AddPaymentType}
                style={styles.TransferButton}
            >
                <ButtonText>Add</ButtonText>
            </TouchableOpacity> */}
            {/* </Cont> */}
        </ThemeProvider >

    );
}


const styles = StyleSheet.create({
    close: {
        alignItems: 'flex-end',
        width: '100%',
        zIndex: 2,
        height: 'auto',
        position: 'absolute',
    },
    icon: {
        margin: 15,
    },
    TransferButton: {
        backgroundColor: COLORS.CAROLINABLUE,
        width: '40%',
        height: 55,
        borderRadius: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginTop: 15,
        marginRight: 20,
        shadowColor: COLORS.SPACECADET,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },
    placeholderFull: {
        marginHorizontal: 15,
        borderWidth: 1,
        width: '90%',
        borderColor: 'lightgrey',
        borderRadius: 5,
        marginBottom: 5,
        height: 55,
        fontSize: 18,
        padding: 15
    },
    placeholderHalf: {
        flex: 1,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        height: 55,
        fontSize: 18,
        padding: 15,
        marginBottom: 5,

    },
    placeholderHalfSingle: {
        width: '44%',
        marginLeft: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        height: 55,
        fontSize: 18,
        marginBottom: 5,
        padding: 15
    },
    splitInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    input: {
        width: windowWidth - 30,
        height: 55,
        borderWidth: 2,
        borderColor: COLORS.LIGHTGREY,
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
    },
    inputhalf: {
        width: windowWidth/2 -30,
        height: 55,
        borderWidth: 2,
        borderColor: COLORS.LIGHTGREY,
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
    },
})



//VERSION WITH CONTAINTER BELOW


// import React, { useState } from 'react';
// import { Animated, Button, StyleSheet, TouchableOpacity, View, TextInput, Pressable } from 'react-native';
// import { ThemeProvider, Icon } from 'react-native-elements';

// import styled from 'styled-components/native';
// import { COLORS } from "../../constants/styles";

// const Cont = styled.View`
//     width: 375px;
//     height: 600px;
//     background-color: #fff;
//     border-radius: 15px;
//     box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);
// `;

// const Title = styled.Text`
//     font-size: 24px;
//     font-weight: 500;
//     text-align: left;
//     color: #222222;
//     margin:50px 20px 15px 20px;
// `;

// const Subtitle = styled.Text`
//     font-size: 18px;
//     text-align: left;
//     color: #222222;
//     margin:15px 20px 15px 15px;
// `;

// const ButtonText = styled.Text`
//     font-size: 18px;
//     color: #fff;
//     align-self: center;
//     font-weight: 700;
// `;




// export default function AddPaymentType({
//     AddPaymentType = () => { },
// }) {


//     return (
//         <ThemeProvider>
//             <Cont>
//                 <Pressable
//                     style={styles.close}
//                     onPress={AddPaymentType}
//                 >
//                     <Icon
//                         name='close'
//                         type='antdesign'
//                         color={COLORS.SPACECADET}
//                         size={30}
//                         reverse={false}
//                         style={styles.icon}

//                     />
//                 </Pressable>
//                 <Title>Add payment</Title>
//                 <Subtitle>Card information</Subtitle>
//                 <TextInput
//                     style={styles.placeholderFull}
//                     placeholder='0000 0000 0000 0000'
//                     keyboardType='number-pad'
//                     autoComplete='cc-number'
//                 />
//                 <View style={styles.splitInput}>
//                     <TextInput
//                         style={styles.placeholderHalf}
//                         placeholder='0000 0000 0000 0000'
//                         keyboardType='number-pad'
//                         autoComplete='cc-exp'
//                     />
//                     <TextInput
//                         style={styles.placeholderHalf}
//                         placeholder='0000 0000 0000 0000'
//                         keyboardType='number-pad'
//                         autoComplete='cc-csc'
//                     />
//                 </View>
//                 <Subtitle>Name on card</Subtitle>
//                 <TextInput
//                     style={styles.placeholderFull}
//                     placeholder='Name'
//                     keyboardType='default'
//                     autoComplete='name'
//                 />
//                 <Subtitle>Country or region</Subtitle>
//                 <TextInput
//                     style={styles.placeholderFull}
//                     placeholder='Canada'
//                     keyboardType='default'
//                 />
//                 <TouchableOpacity
//                     onPress={AddPaymentType}
//                     style={styles.TransferButton}
//                 >
//                     <ButtonText>Add</ButtonText>
//                 </TouchableOpacity>
//             </Cont>
//         </ThemeProvider>

//     );
// }


// const styles = StyleSheet.create({
//     close: {
//         alignItems: 'flex-end',
//         width: '100%',
//         zIndex: 2,
//         height: 'auto',
//         position: 'absolute',
//     },
//     icon: {
//         margin: 15,
//     },
//     TransferButton: {
//         backgroundColor: COLORS.CAROLINABLUE,
//         width: '40%',
//         height: 55,
//         borderRadius: 10,
//         alignSelf: 'flex-end',
//         justifyContent: 'center',
//         marginTop: 15,
//         marginRight: 20,
//         shadowColor: COLORS.SPACECADET,
//         shadowOpacity: 0.5,
//         shadowOffset: { width: 0, height: 4 },
//     },
//     placeholderFull: {
//         marginHorizontal: 15,
//         borderWidth: 1,
//         borderColor: 'lightgrey',
//         borderRadius: 5,
//         height: 55,
//         fontSize: 18,
//         padding: 15
//     },
//     placeholderHalf: {
//         flex: 1,
//         marginLeft: 15,
//         borderWidth: 1,
//         borderColor: 'lightgrey',
//         borderRadius: 5,
//         height: 55,
//         fontSize: 18,
//         padding: 15
//     },
//     splitInput: {
//         flexDirection: 'row',
//         marginRight: 15,
//         marginTop: 15,
//     }
// })