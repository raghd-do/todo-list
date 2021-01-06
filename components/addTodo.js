import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ addTodo }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder = 'new todo ...'
            onChangeText = {changeHandler} // (val) => changeHandler(val)
            />
            <Button title='add' onPress={() => addTodo(text)} color='#7ec2be' />
        </View>
    )
}

const styles  = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})