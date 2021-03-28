import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Alert} from "react-native";
import {THEME} from "../../THEME";
import {AntDesign, FontAwesome} from '@expo/vector-icons';


export const AddTodo = props => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            props.onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Название таски не может быть пустым')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={setValue}
                       value={value}
                       placeholder={'Введите название таски..'}
                       autoCorrect={false}
                       autoCapitalize='none'
            />
            <AntDesign.Button onPress={pressHandler} name="plussquareo">
                Добавить
            </AntDesign.Button>
            {/*<Button title='Добавить' onPress={pressHandler}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }

})