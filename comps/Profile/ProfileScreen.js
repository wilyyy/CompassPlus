import React from 'react';
import { View, ScrollView } from 'react-native';
import NotificationCard from './notificationCard';
import ProfileCard from './profileCard';
import SupportCard from './supportCard';


const ProfileScreen = () =>{
    return (
        <ScrollView>
            <ProfileCard />
            <NotificationCard />
            <SupportCard />
        </ScrollView>
    );
}

export default ProfileScreen;