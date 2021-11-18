import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import NotificationPreferences from "../../comps/Profile/NotificationPreferences"

const BalanceHistoryScreen = () => {
    return (
        <ScrollView>
            <NotificationPreferences></NotificationPreferences>
        </ScrollView>
    )
}

export default BalanceHistoryScreen

const styles = StyleSheet.create({})
