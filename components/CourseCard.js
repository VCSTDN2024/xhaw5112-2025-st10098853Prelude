import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CourseCard({ course }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.fee}>{course.fee}</Text>
      <Text style={styles.description}>{course.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2
  },
  image: { width: '100%', height: 150, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: '700', color: '#d96b9c' },
  fee: { fontWeight: '600', marginVertical: 4 },
  description: { color: '#444' }
});