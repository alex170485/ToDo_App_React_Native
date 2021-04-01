
import React, {useState} from "react";
import {StyleSheet, View, Alert} from 'react-native';
import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreens";
import {TodoScreen} from "./src/screens/TodoScreen";
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import {StatusBar} from "expo-status-bar";
import {THEME} from "./THEME";
import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/components/context/todo/todoState";
import {Text} from "react-native";

async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/font/Roboto-Regular.ttf'),
        'roboto-bold' : require('./assets/font/Roboto-Bold.ttf')
    })
};

export default function App() {
    const [isReady, setIsReady]=useState(false)
    if (!isReady) {
        return <AppLoading
            startAsync = {loadApplication}
            onError = {err=> console.log(err)}
            onFinish = {() => {setIsReady(true)}}
        />
    }



    return (
        <TodoState><MainLayout/></TodoState>
    );
}


