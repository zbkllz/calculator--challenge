import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native'
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [resultText, setResultText] = useState('')
  const [calculationText, SetCalculationText] = useState('')
  const operations = ['AC','DEL','/', '*', '-', '+']


  function calculateResult() {
    const text = resultText
    console.log(text, eval(text))
    SetCalculationText(eval(text))
  }

  function validate() {
    const text = resultText
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  function buttonPressed(text: any) {
    // console.log(text)

    if (text == '=') {
      return validate() && calculateResult()
    }

    setResultText(resultText + text)
  }

  function operate(operation: string) {
    switch (operation) {
      case 'DEL':
        console.log(resultText)
        let text = resultText.split('')
        text.pop()
        setResultText(text.join(''))
        break
      case 'AC':
        setResultText("")
        SetCalculationText("")
        break
      case '/':
      case '*':
      case '-':
      case '+':
        const lastChar: any = resultText.split('').pop()

        if (operations.indexOf(lastChar) > 0) return

        if (resultText == '') return

        setResultText(resultText + operation);
    }
   
  }

  let rows = []
  let numbs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, '=']
  ]
  for (let i = 0; i < 4; i++) {
    let row = []
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          key={numbs[i][j]}
          onPress={() => buttonPressed(numbs[i][j])}
          style={styles.btn}
        >
          <Text style={styles.txt}>{numbs[i][j]}</Text>
        </TouchableOpacity>
      )
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>
    )
  }

  let ops = []
  for (let i = 0; i < 6; i++) {
    ops.push(
      <TouchableOpacity
        style={styles.btn}
        key={operations[i]}
        onPress={() => operate(operations[i])}
      >
        <Text style={styles.txt}>{operations[i]}</Text>
      </TouchableOpacity>
    )
  }
  //O QUE APARECE NA TELA
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calculationText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>
        <View style={styles.operations}>{ops}</View>
      </View>
    </SafeAreaView>
  )
}
