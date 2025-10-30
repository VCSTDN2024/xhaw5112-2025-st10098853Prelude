import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function CalculatorScreen() {
  const [sixMonthQty, setSixMonthQty] = useState('0');
  const [sixWeekQty, setSixWeekQty] = useState('0');
  const [total, setTotal] = useState(null);

  const calculateFees = () => {
    const months = parseInt(sixMonthQty) || 0;
    const weeks = parseInt(sixWeekQty) || 0;
    const subtotal = months * 1500 + weeks * 750;
    const discount = subtotal * 0.1;
    const vat = (subtotal - discount) * 0.15;
    setTotal(subtotal - discount + vat);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <Text>Number of Six-Month Courses (R1500 each):</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={sixMonthQty} onChangeText={setSixMonthQty} />
      <Text>Number of Six-Week Courses (R750 each):</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={sixWeekQty} onChangeText={setSixWeekQty} />
      <TouchableOpacity style={styles.btn} onPress={calculateFees}>
        <Text style={styles.btnText}>Calculate Total</Text>
      </TouchableOpacity>
      {total !== null && <Text style={styles.result}>Total Fees (10% discount + 15% VAT): R{total.toFixed(2)}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fbf7f4' },
  title: { fontSize: 22, fontWeight: '700', color: '#d96b9c', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginVertical: 10 },
  btn: { backgroundColor: '#d96b9c', padding: 12, borderRadius: 10, marginVertical: 10 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
  result: { fontSize: 16, fontWeight: '700', marginTop: 10, color: '#444' },
});