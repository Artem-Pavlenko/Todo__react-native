import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavBar} from "./src/NavBar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {

    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prevTodos => [...prevTodos, {id: Date.now().toString(), date: Date.now(), title}])
    }

    return (
        <View>
            <NavBar title={'Todo app'}/>
            <View style={styles.container}>
                <AddTodo onAdd={addTodo}/>
                <View>{todos.map(todo => <Todo key={todo.id} todo={todo}/>)}</View>
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
})
