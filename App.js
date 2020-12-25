import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavBar} from "./src/NavBar";
import {AddTodo} from "./src/AddTodo";

export default function App() {

    const [todos, setTodos] = useState([])

    return (
        <View>
            <NavBar title={'Todo app'}/>
            <View style={styles.container}>
                <AddTodo/>
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
