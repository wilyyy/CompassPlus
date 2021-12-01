import React from 'react';

import { View, ScrollView, StyleSheet, FlatList } from 'react-native';

import NavAccount from '../../comps/NavBar/NavAccount.js';
// import ProfileCard from '../../comps/Profile/profileCard.js';
// import NotificationCard from '../../comps/profile/notificationCard.js';
// import SupportCard from '../../comps/Profile/supportCard.js';

import ProfileCard from '../../comps/Profile/ProfileCard';
import NotificationCard from '../../comps/Profile/NotificationCard';
import SupportCard from '../../comps/Profile/SupportCard';

// import { FlatList } from 'react-native-gesture-handler';


const ProfileScreenNew = () => {
    return (
        <View
            style={styles.test}
        >

            <ProfileCard />
            <ScrollView
                contentContainerStyle={styles.scroll}
                snapToEnd={false}
                showsVerticalScrollIndicator={false}

            >
                <NotificationCard />
                <SupportCard />
            </ScrollView>
            <View style={styles.NavCont}>
                <NavAccount />
            </View>
        </View>
    )
}

export default ProfileScreenNew;


const styles = StyleSheet.create({
    NavCont: {
        position: 'absolute',
        bottom: 0,
    },
    test: {
        // borderColor: 'red',
        // borderWidth: 2,
        width: '100%',
        height: '100%'
    },
    spacing: {
        height: '50%',
        borderColor: 'green',
        borderWidth: 2,
    },
    scroll: {
        paddingBottom: '20%',
        left: 0,
    },

});