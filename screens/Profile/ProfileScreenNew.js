import React from 'react';
import { View, ScrollView } from 'react-native';
import NotificationCard from '../../comps/Profile/notificationCard';
import ProfileCard from "../../comps/Profile/profileCard"
import SupportCard from '../../comps/Profile/supportCard';



const ProfileScreenNew = () => {
    return (
        <ScrollView >
            <ProfileCard />
            <NotificationCard />
            <SupportCard />
        </ScrollView>
    )
}

export default ProfileScreenNew;