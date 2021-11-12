import React from 'react';
import { View, ScrollView } from 'react-native';
import NotificationCard from './NotificationCard';
import ProfileCard from './ProfileCard';
import SupportCard from './SupportCard';


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