import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";



const Payment = [
    { title: 'Mastercard', id: '1' },
    { title: 'Visa', id: '2' },
    // { title: 'Add Payment', id: '3' },

];

const Item = ({ item, onPress, onPressOut, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} onPressOut={onPressOut} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const PaymentTab = ({
    //need to pass item.id
    closePay = () => { },
}) => {
    const [selectedId, setSelectedId] = useState(null);


    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#5BCF49" : "transparent";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                onPressOut={closePay}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Payment}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 30,
        overflow: 'hidden',
        // borderColor: 'red',
        // borderWidth: 2
    },
    item: {
        paddingTop: 5,
    },
    title: {
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: 0.1,
        textAlign: 'left',
        padding: 10,
    },
});

export default PaymentTab;