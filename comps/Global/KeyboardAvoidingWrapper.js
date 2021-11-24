import React from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const KeyBoardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style= {{flex:1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyBoardAvoidingWrapper;
