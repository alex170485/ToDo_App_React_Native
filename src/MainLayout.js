import React, {useContext, useState} from "react";
import {NavBar} from "./components/NavBar";
import {View, StyleSheet, Alert} from "react-native";
import {StatusBar} from "expo-status-bar";
import {THEME} from "../THEME";
import {MainScreen} from "./screens/MainScreens";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from "./components/context/screen/screenContext";


export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext)

    return (
        <View style = {styles.wrapper}>
            <NavBar title={'Todo App'}/>
            <View style={styles.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>}
                <StatusBar style="auto"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
        flex: 1
    },
    wrapper : {
        flex: 1
    }
});