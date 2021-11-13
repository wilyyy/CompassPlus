import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NotificationCard from '../../comps/Profile/notificationCard';
import ProfileCard from "../../comps/Profile/profileCard"
import SupportCard from '../../comps/Profile/supportCard';
import NavBar from '../../comps/NavBar';



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