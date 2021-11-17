import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";



const Tickets = [
    { title: '$10.00', id: '1' },
    { title: '$15.00', id: '2' },
    { title: '$20.00', id: '3' },
    { title: '$50.00', id: '4' },
    { title: '$75.00', id: '5' },
    { title: '$100.00', id: '6' },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const AmountTab = ({
    selectThis = () => { },
}) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#5BCF49" : "transparent";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Tickets}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                onPress={selectThis}
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
        marginTop: StatusBar.currentHeight || 0,
        overflow: 'hidden',
    },
    title: {
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: 0.1,
        textAlign: 'left',
        padding: 10,
    },
});

export default AmountTab;