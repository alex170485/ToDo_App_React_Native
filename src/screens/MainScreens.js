import React, {useCallback, useContext, useEffect, useState} from 'react'
import {FlatList, StyleSheet, View, Image, Dimensions, Text} from 'react-native'
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../../THEME";
import {TodoContext} from "../components/context/todo/todoContext";
import {ScreenContext} from "../components/context/screen/screenContext";
import {AppLoader} from "../components/ui/AppLoader";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";


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
    if (loading) {
        return <AppLoader/>
    }
    if (error) {
        return <View style={styles.center}>
            <Text style={styles.error}>{error}</Text>
            <AppButton onPress={loadTodos}>Повторить</AppButton>
        </View>
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
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        fontSize: 20,
        color: THEME.DANGER_COLOR
    }
})