import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {StyleSheet, View, Button} from 'react-native'
import {NavBar} from "./src/NavBar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {

    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prevTodos => [...prevTodos, {id: Date.now().toString(), date: Date.now(), title}])
    }
    const clearTodos = () => {
        setTodos([])
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(t => t.id !== todoId))
        // setTodos(prevTodo => [prevTodo.filter(todo => todo.id !== todoId)])
    }

    return (
        <View>
            <NavBar title={'Todo app'}/>
            <View style={styles.container}>
                <AddTodo onAdd={addTodo}/>
                <View>{todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={removeTodo}/>)}</View>
                {todos.length !== 0 && <Button color={'#ee0b0b'} title='clear all' onPress={clearTodos}/>}
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    button: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3449ab',
    }
})
