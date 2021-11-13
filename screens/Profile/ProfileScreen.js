import React from 'react';
import { View, ScrollView } from 'react-native';
import NotificationCard from '../../comps/Profile/NotificationCard';
import ProfileCard from '../../comps/Profile/ProfileCard';
import SupportCard from '../../comps/Profile/Profile/SupportCard.js'


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