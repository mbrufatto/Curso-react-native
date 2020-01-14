import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import Default from '../style/Default'

export default class Cantador extends Component {
    state = {
        numero: 0
    }

    maisUm = () => { 
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render() {
        return (
            <View>
                <Text style={ Default.ex }>{this.state.numero}</Text>
                <TouchableHighlight onPress={ this.maisUm } onLongPress={ this.limpar }>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}