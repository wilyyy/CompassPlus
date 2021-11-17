import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import BalanceHistoryCard from "../../comps/BalanceHistory/BalanceHistoryCard"

const BalanceHistoryScreen = () => {
    return (
        <ScrollView>
            <BalanceHistoryCard></BalanceHistoryCard>
        </ScrollView>
    )
}

export default BalanceHistoryScreen

const styles = StyleSheet.create({})
