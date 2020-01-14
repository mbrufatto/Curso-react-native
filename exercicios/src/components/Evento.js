import React, { Component } from 'react'
import { View, SafeAreaView, Text, TextInput } from 'react-native'

import Default from '../style/Default'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    aleterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return(
            <SafeAreaView style={Default.container}>
                <Text style={ Default.fonte40}>{this.state.texto}</Text>
                <TextInput value={ this.state.texto} style={Default.input} 
                    onChangeText={this.aleterarTexto}/>
            </SafeAreaView>
        )
        
    }
}