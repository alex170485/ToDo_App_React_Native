import React, {useCallback, useContext, useEffect, useState} from 'react'
import {FlatList, StyleSheet, View, Image, Dimensions} from 'react-native'
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../../THEME";
import {TodoContext} from "../components/context/todo/todoContext";
import {ScreenContext} from "../components/context/screen/screenContext";
import {AppLoader} from "../components/ui/AppLoader";


export const MainScreen = () => {
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])
    useEffect(() => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update)
        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })
    if(loading) {
        return <AppLoader/>
    }

    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}/>)}/>

        </View>
    )
    if (todos.length === 0) {
        content = <View style={styles.imageWrap}>
            <Image style={styles.image} source={require('../../assets/adaptive-icon.png')}/>
        </View>
    }
    return <View>
        <AddTodo onSubmit={addTodo}/>
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