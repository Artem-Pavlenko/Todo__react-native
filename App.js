import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {StyleSheet, View, Button, ScrollView, FlatList} from 'react-native'
import {NavBar} from "./src/NavBar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {

    const [todos, setTodos] = useState([
        // {id: '1', date: Date.now(), title: 'example'},
        // {id: '2', date: Date.now(), title: 'example'},
        // {id: '3', date: Date.now(), title: 'example'},
        // {id: '4', date: Date.now(), title: 'example'},
        // {id: '5', date: Date.now(), title: 'example'},
        // {id: '6', date: Date.now(), title: 'example'},
        // {id: '7', date: Date.now(), title: 'example'},
        // {id: '8', date: Date.now(), title: 'example'},
        // {id: '9', date: Date.now(), title: 'example'},
        // {id: '10', date: Date.now(), title: 'example'},
        // {id: '11', date: Date.now(), title: 'example'},
        // {id: '12', date: Date.now(), title: 'example'},
        // {id: '13', date: Date.now(), title: 'example'},
        // {id: '14', date: Date.now(), title: 'example'}
    ])

    const addTodo = (title) => {
        setTodos(prevTodos => [...prevTodos, {id: Date.now().toString(), date: Date.now(), title}])
    }
    const clearTodos = () => {
        setTodos([])
    }

    const removeTodo = (todoId) => {
        setTodos(prevTodos => prevTodos.filter(t => t.id !== todoId))
    }


    return (
        <View>
            <NavBar title={'Todo app'}/>
            <View style={styles.container}>
                <AddTodo onAdd={addTodo}/>
                <FlatList
                    data={todos}
                    renderItem={({item}) => <Todo todo={item} deleteTodo={removeTodo}/>}
                    keyExtractor={item => item.id}
                />
                {/*<View>{todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={removeTodo}/>)}</View>*/}
                {todos.length !== 0 && <Button color={'#ee0b0b'} title='clear all' onPress={clearTodos}/>}
            </View>

            {/*<StatusBar style="auto"/>*/}
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
