import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export const Todo = ({todo, deleteTodo}) => {

    const removeTodo = () => {
        deleteTodo(todo.id)
    }

    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
            <Button title='delete' onPress={removeTodo}/>
        </View>
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
