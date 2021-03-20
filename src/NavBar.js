import React from 'react'
import {Text, View, StyleSheet} from "react-native";


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
        backgroundColor: '#3949ab',
        paddingBottom: 10

    },
    text: {
        color: 'white',
        fontSize: 20
    }
})