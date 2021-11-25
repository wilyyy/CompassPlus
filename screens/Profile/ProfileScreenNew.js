import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import NavBar from '../../comps/NavBar';
import ProfileCard from '../../comps/Profile/ProfileCard.js';
import NotificationCard from '../../comps/Profile/NotificationCard.js';
import SupportCard from '../../comps/Profile/SupportCard.js';


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