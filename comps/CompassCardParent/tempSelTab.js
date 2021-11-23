import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";



const Zones = [
    { title: 'Day Pass', id: '1' },
    { title: 'Single: 1-Zone', id: '2' },
    { title: 'Single: 2-Zone', id: '3' },
    { title: 'Single: 3-Zone', id: '4' },
];



const Item = ({ item, onPress, onPressOut, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} onPressOut={onPressOut} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

export const TempTab = ({
    //need to pass item.id
    closeZone = () => { },

}) => {
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {

        if (selectedId != null) {
            closeZone(selectedId);
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

export default TempTab;