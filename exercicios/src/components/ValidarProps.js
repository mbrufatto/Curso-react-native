import React from 'react'
import Proptypes from 'prop-types'
import { Text, SafeAreaView } from 'react-native'
import Default from '../style/Default'

const ValidarProps = props => 
    <SafeAreaView style={Default.container}>
        <Text style={{ fontSize: 35 }}>
            {props.label}
            {props.ano + 2000}
        </Text>
    </SafeAreaView>

ValidarProps.defaultProps = {
    label: 'Ano:'
}

ValidarProps.prototypes = {
    ano: Proptypes.number.isRequired
}

export default ValidarProps