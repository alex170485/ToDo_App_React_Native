import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, TouchableNativeFeedback, Platform} from 'react-native'
import {THEME} from "../../../THEME";


export const AppButton = ({children, onPress, color = THEME.MAIN_COLOR}) => {
   const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return (
        <Wrapper onPress = {onPress} activeOpacity = {0.7}>
            <View style = {{...styles.button, backgroundColor: color}}>
                <Text style = {styles.text}>{children}</Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create ({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: '#fff'
    }
})