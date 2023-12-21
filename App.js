import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((button, index) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handlePress(button)}
                key={index}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = width / 4 - 20; // تعیین عرض دکمه‌ها با توجه به اندازه صفحه

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    fontSize: 24,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    textAlign: 'right',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  button: {
    width: buttonWidth,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Calculator;
