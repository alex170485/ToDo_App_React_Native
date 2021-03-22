import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";


export const MainScreen = props => {
    return <View>
        <AddTodo onSubmit = {props.addTodo}/>

        <FlatList
            keyExtractor = {item => item.id.toString() }
            data = {props.todos}
            renderItem = {({item})=>(<Todo todo={item} onRemove = {props.removeTodo} onOpen= {props.openTodo}/>)}
        />
    </View>
}

const style = StyleSheet.create({})