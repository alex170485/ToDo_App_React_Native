import React from 'react'
import {FlatList, StyleSheet, View, Image} from 'react-native'
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";


export const MainScreen = props => {
    let content = (
        <FlatList
            keyExtractor = {item => item.id.toString() }
            data = {props.todos}
            renderItem = {({item})=>(<Todo todo={item} onRemove = {props.removeTodo} onOpen= {props.openTodo}/>)}
        />
    )
    if (props.todos.length === 0) {
        content = <View style = {styles.imageWrap}>
            <Image style = {styles.image} source = {require('../../assets/adaptive-icon.png')}/>
        </View>
    }
    return <View>
        <AddTodo onSubmit = {props.addTodo}/>
        {content}


    </View>
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})