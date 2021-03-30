import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, View, Image, Dimensions} from 'react-native'
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../../THEME";


export const MainScreen = props => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width -THEME.PADDING_HORIZONTAL *2)

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width -THEME.PADDING_HORIZONTAL *2
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update)
        return () => {Dimensions.removeEventListener('change', update)}
    })

    let content = (
        <View style = {{width: deviceWidth}}>
        <FlatList
            keyExtractor = {item => item.id.toString() }
            data = {props.todos}
            renderItem = {({item})=>(<Todo todo={item} onRemove = {props.removeTodo} onOpen= {props.openTodo}/>)} />

        </View>
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