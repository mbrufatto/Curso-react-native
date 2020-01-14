import React from 'react'
import { Button, Alert, ToastAndroid, Platform, SafeAreaView } from 'react-native'
import Default from '../style/Default'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação ', msg)
        }
    }

    return (
        <SafeAreaView style={Default.container}>
            <Button title='Plataforma?' onPress={() => notificar('Parabéns')} />
        </SafeAreaView>
    )
}