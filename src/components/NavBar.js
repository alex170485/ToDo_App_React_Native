import React from 'react'
import {View, StyleSheet, Text, Platform} from "react-native";
import {THEME} from "../../THEME";
import {AppTextBold} from "./ui/AppTextBold";


export const NavBar = props => {
    return (
       <View style = {{...styles.navbar, ...Platform.select({
               android: styles.navbarAndroid,
               ios: styles.navbarIOS
           })}}>
           <Text style = {styles.text}>{props.title}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10

    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIOS: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20
    }
})