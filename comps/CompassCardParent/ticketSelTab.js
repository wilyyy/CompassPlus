import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const Amount = [
    { title: '$10.00', id: '1' },
    { title: '$20.00', id: '2' },
    { title: '$40.00', id: '3' },
    { title: '$60.00', id: '4' },
    { title: '$80.00', id: '5' },
    { title: '$100.00', id: '6' },
];
const Item = ({ item, onPress, onPressOut, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} onPressOut={onPressOut} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const TicketTab = ({
    closeAmount = () => { },
}) => {
    const [selectedId, setSelectedId] = useState(null);


    useEffect(() => {

        if (selectedId != null) {
            closeAmount(selectedId);
        }
    }, [selectedId]);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#5BCF49" : "transparent";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Amount}
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
        // padding: 30,
        overflow: 'hidden',
        alignSelf: 'center',
        // borderColor: 'red',
        // borderWidth: 2,
    },
    title: {
        fontSize: 18,
        lineHeight: 28,
        padding: 10,
    },
    test: {
        borderColor: 'red',
        borderWidth: 0.5,
    }
});

export default TicketTab;