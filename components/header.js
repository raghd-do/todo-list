import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> To Do list </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#7ec2be',
    },
    title: {
        textAlign: 'center',
        color: '#0d0e16',
        fontSize: 24,
        fontWeight: 'bold',
    }
})