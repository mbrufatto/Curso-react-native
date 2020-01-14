import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import Default from '../style/Default'

const fonte = { style: { fontSize: 30 } }

export const Filho = props => 
        <View>
            <Text { ...fonte } >Filho: { props.nome } { props.sobrenome }</Text>
        </View>

export const Pai = props =>
        <View>
            <Text { ...fonte } >Pai: { props.nome } { props.sobrenome }</Text>
            {/* {props.children} */}
            {React.Children.map(props.children,
                c => React.cloneElement(c, { ...props, ...c.props }))}
        </View>

export const Avo = props => 
    <SafeAreaView style={Default.container}>
        <View>
            <Text { ...fonte } >Avo: { props.nome } { props.sobrenome }</Text>
            <Pai nome='André' sobrenome={props.sobrenome}>
                <Filho nome='Ana' />
                <Filho nome='Gui' />
                <Filho nome='Davi' />
            </Pai>
            <Pai {...props} nome='Henrique'>
                <Filho nome='Rebeca' />
                <Filho nome='Renato' />
            </Pai>
        </View>
    </SafeAreaView>