import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";



const Zones = [
    { title: '1-Zone', id: '1' },
    { title: '2-Zone', id: '2' },
    { title: '3-Zone', id: '3' },
];



const Item = ({ item, onPress, onPressOut, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} onPressOut={onPressOut} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

export const ZonesTab = ({
    closeZone = () => { },

}) => {
    const [selectedId, setSelectedId] = useState({});

    useEffect(() => {

        if (selectedId != null) {
            closeZone(selectedId);
        }
    }, [selectedId]);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId.id ? "#5BCF49" : "transparent";
        const color = item.id === selectedId.id ? 'white' : 'black';



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
                data={Zones}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                scrollEnabled={false}
                style={styles}

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
        alignSelf: 'center'
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

export default ZonesTab;