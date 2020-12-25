import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export const Todo = ({todo}) => {
    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
            {/*<Text>{todo.date}</Text>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
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
