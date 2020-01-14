import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text} from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={ styles.container}>
          <Text style={ styles.welcome}>Iniciando o Mines!</Text>
          <Text>Tamanho da grade:
            {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>

            <Field />
            <Field opened />
            <Field opened nearMines={1}/>
            <Field opened nearMines={2}/>
            <Field opened nearMines={3}/>
            <Field opened nearMines={6}/>
            <Field mined />
            <Field mined opened />
            <Field mined opened exploded />
            <Field flagged />
            <Field flagged opened />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  safeArea: {
    flex: 1,
    marginTop: 40,
  },
})