import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoCard({ item, deleteTodo }) {
    return (
        <TouchableOpacity onPress={() => deleteTodo(item.key)} >
            <View style={styles.todo}>
                <MaterialIcons name="delete" size={18} color="#333" />
                <Text style={styles.text}> {item.text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        padding: 16,
        margin: 16,
        borderRadius: 25,
        borderColor: '#bdb4c4',
        borderWidth: 1,
        borderStyle: 'dashed',
        textAlign: 'center',
        fontSize: 16,
        color: '#b85751',
        flexDirection: 'row-reverse'
    },
    text: {
        marginRight: 20,
    },
    // card: {
    //     shadowBlur: 43,
    //     shadowOffset: {w: -23, h: -23},
    //     shadowOpacity: 100,
    //     shadowColor: '#fff',
    //     shadowBlur: 50,
    //     shadowOffset: {w: 28, h: 28},
    //     shadowOpacity: 16,
    //     shadowColor: '#0d2750',
    // }
})