import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
         />
        <Text style={styles.title}>Skills for Success</Text>
        <Text style={styles.subtitle}>Empower yourself with practical skills for the future</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Courses')}>
          <Text style={styles.btnText}>View Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => navigation.navigate('Calculator')}>
          <Text style={styles.btnTextOutline}>Calculate Fees</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.btnTextOutline}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf7f4' },
  hero: { alignItems: 'center', padding: 20 },
  heroImage: { width: '100%', height: 200, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '700', color: '#d96b9c', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#444', textAlign: 'center', marginVertical: 10 },
  btn: { backgroundColor: '#d96b9c', padding: 12, borderRadius: 10, marginVertical: 5, width: '70%' },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
  btnOutline: { borderWidth: 1, borderColor: '#d96b9c', padding: 12, borderRadius: 10, marginVertical: 5, width: '70%' },
  btnTextOutline: { color: '#d96b9c', textAlign: 'center', fontWeight: '700' },
});