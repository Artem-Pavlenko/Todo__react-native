import React from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'

export const Todo = ({todo, deleteTodo}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={ () => console.log('Pressed', todo.id)}
            onLongPress={deleteTodo.bind(null, todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
                <Button title='delete' onPress={deleteTodo.bind(null, todo.id)}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        justifyContent: 'space-between',
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        borderStyle: 'solid'
    }
})
