import React from 'react';
import { View, ScrollView } from 'react-native';
import NotificationCard from '../../comps/Profile/NotificationCard';
import ProfileCard from "../../comps/Profile/ProfileCard"
import SupportCard from '../../comps/Profile/SupportCard';



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