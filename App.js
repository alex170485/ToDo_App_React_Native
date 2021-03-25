import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreens";
import {TodoScreen} from "./src/screens/TodoScreen";


export default function App() {

    const [todos, setTodos] = useState([
        {id: '1', title: 'Выучить React Native'},
        {id: '2', title: 'Повтотрить JS'}
    ]);
    const [todoId, setTodoId] = useState('2')
    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title: title
        }])
    }
    const removeTodo = (id) => {
        setTodos(prev=> prev.filter(todo => todo.id !==id))
    }
    let content = (
        <MainScreen todos = {todos} addTodo = {addTodo} removeTodo = {removeTodo} openTodo = {(id)=> {
            setTodoId(id)
        }}/>
    )
    if(todoId) {
        const todo = todos.find(el => el.id == todoId)
        content = <TodoScreen goBack={() => {setTodoId(null)}} todo={todo}/>
    }

    return (
    <View>
      <NavBar title = {'Todo App'}/>
        <View style={styles.container}>
            {content}
      <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }

});
