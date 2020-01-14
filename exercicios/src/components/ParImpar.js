import React from 'react'
import { View, Text } from 'react-native'
import Default from '../style/Default'

function parOuImpar(num) {
    return num %2 == 0 ? <Text style={ Default.ex }>Par</Text> : <Text style={ Default.ex }>Ímpar</Text>
}

export default props => 
    <View>
        { parOuImpar(props.numero) }
        {/* {
            props.numero % 2 == 0 ? <Text style={ Default.ex }>Par</Text> 
            : <Text style={ Default.ex }>Ímpar</Text>
        } */}
    </View>
