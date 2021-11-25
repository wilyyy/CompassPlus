import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import NavBar from '../../comps/NavBar';
import ProfileCard from '../../comps/Profile/profileCard.js';
import NotificationCard from '../../comps/Profile/notificationCard.js';
import SupportCard from '../../comps/Profile/supportCard.js';


const ProfileScreenNew = () => {
    return (
        <>
            <ScrollView >
                <ProfileCard />
                <NotificationCard />
                <SupportCard />
            </ScrollView>
            <View style={styles.NavCont}>
                <NavBar />
            </View>
        </>
    )
}

export default ProfileScreenNew;


const styles = StyleSheet.create({
    NavCont: {
        position: 'absolute',
        bottom: 0,
    }

});