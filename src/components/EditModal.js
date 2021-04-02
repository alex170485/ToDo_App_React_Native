import React, {useState} from 'react'
import {View, StyleSheet, Button, TextInput, Modal, Alert} from 'react-native'
import {THEME} from "../../THEME";
import {AppButton} from "./ui/AppButton";


export const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка', `Длинна сообщения ${title.trim().length} символов`)
        } else {
            onSave(title)
        }
    }
    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }

    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                           placeholder='Введите название'
                           autoCapitalize='none'
                           autoCorrect={false}
                           maxLength={64}
                           value={title}
                           onChangeText={setTitle}
                />
                <View style={styles.buttons}>
                    <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}> Отменить </AppButton>
                    <AppButton onPress={saveHandler}> Сохранить</AppButton>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})