import React, {useContext, useState} from "react";
import {NavBar} from "./components/NavBar";
import {View, StyleSheet, Alert} from "react-native";
import {StatusBar} from "expo-status-bar";
import {THEME} from "../THEME";
import {MainScreen} from "./screens/MainScreens";
import {TodoScreen} from "./screens/TodoScreen";
import {TodoContext} from "./components/context/todo/todoContext";


export const MainLayout = () => {
    const {
        todos, addTodo,
        removeTodo,
        updateTodo
    } = useContext(TodoContext)

    // const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState(null)

    // const addTodo = (title) => {
    //     setTodos(prev => [...prev, {
    //         id: Date.now().toString(),
    //         title: title
    //     }])
    // }
    // const removeTodo = (id) => {
    //     const todo = todos.find(el => el.id === id)
    //     Alert.alert(
    //         "Удаление элемента",
    //         `Вы действительно хотите удалить "${todo.title}" ? `,
    //         [
    //             {
    //                 text: "Отмена",
    //                 style: "cancel",
    //             },
    //             {
    //                 text: 'Удалить',
    //                 style: 'destructive',
    //                 onPress: () => {
    //                     setTodoId(null)
    //                     setTodos(prev => prev.filter(todo => todo.id !== id))
    //                 }
    //             }
    //         ],
    //         {cancelable: false}
    //     );
    // }
    // const updateTodo = (id, title) => {
    //     setTodos(old => old.map(todo => {
    //         if (todo.id === id) {
    //             todo.title = title
    //         }
    //         return todo
    //     }))
    // }
    let content = (
        <MainScreen todos={todos}
                    addTodo={addTodo}
                    removeTodo={removeTodo}
                    openTodo={(id) => {
                        setTodoId(id)
                    }}/>
    )
    if (todoId) {
        const todo = todos.find(el => el.id == todoId)
        content = <TodoScreen goBack={() => {
            setTodoId(null)
        }} todo={todo} onRemove={removeTodo}
                              onSave={updateTodo}
        />
    }
    return (
        <View>
            <NavBar title={'Todo App'}/>
            <View style={styles.container}>
                {content}
                <StatusBar style="auto"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20
    }
});