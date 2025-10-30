import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const courses = [
  { title: 'First Aid', fee: 'R1500', description: 'Basic first aid skills.',  },
  { title: 'Sewing', fee: 'R1500', description: 'Alterations and new garment tailoring.',  },
  { title: 'Landscaping', fee: 'R1500', description: 'Garden landscaping and maintenance.', },
  { title: 'Life Skills', fee: 'R1500', description: 'Daily life skills including literacy and banking.',  },
  { title: 'Child Minding', fee: 'R750', description: 'Care for children and toddlers.',},
  { title: 'Cooking', fee: 'R750', description: 'Prepare nutritious family meals.', },
  { title: 'Garden Maintenance', fee: 'R750', description: 'Watering, pruning, planting basics.', }
];

export default function CourseScreen() {
  return (
    <ScrollView style={styles.container}>
      {courses.map((course, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseFee}>{course.fee}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fbf7f4' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#d96b9c',
  },
  courseFee: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 14,
    color: '#444',
  },
});
