import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseCard({ course }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.fee}>{course.fee}</Text>
      <Text style={styles.description}>{course.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  title: { fontSize: 18, fontWeight: '700', color: '#d96b9c' },
  fee: { fontWeight: '700', marginBottom: 5 },
  description: { color: '#444' },
});