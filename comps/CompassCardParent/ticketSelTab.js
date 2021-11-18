import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const Amount = [
    {
        id: "1",
        title: "Ticket 1",
    },
    {
        id: "2",
        title: "Ticket 2",
    },
    {
        id: "3",
        title: "Add Ticket",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const TicketTab = ({
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
                data={Amount}
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

export default TicketTab;