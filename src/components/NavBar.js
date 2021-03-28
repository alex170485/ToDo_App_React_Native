import React from 'react'
import {View, StyleSheet, Text} from "react-native";
import {THEME} from "../../THEME";
import {AppTextBold} from "./ui/AppTextBold";


export const NavBar = props => {
    return (
       <View style = {styles.navbar}>
           <Text style = {styles.text}>{props.title}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10

    },
    text: {
        color: 'white',
        fontSize: 20
    }
})