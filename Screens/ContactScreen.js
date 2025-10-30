import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.info}>Email: info@skillsforsuccess.org</Text>
      <Text style={styles.info}>Phone: +27 76 172 7639</Text>
      <Text style={styles.info}>Locations:</Text>
      <Text style={styles.info}>• Johannesburg Central</Text>
      <Text style={styles.info}>• Soweto Campus</Text>
      <Text style={styles.info}>• Sandton Hub</Text>

      {/* Social Media Section */}
      <Text style={[styles.title, { marginTop: 25 }]}>Follow Us</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>📘 Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>📸 Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>🐦 Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>💼 LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fbf7f4' },
  title: { fontSize: 24, fontWeight: '700', color: '#d96b9c', marginBottom: 10 },
  info: { fontSize: 16, marginBottom: 5, color: '#333' },

  // Social styles
  socialContainer: { marginTop: 10, gap: 10 },
  socialButton: {
    backgroundColor: '#d96b9c',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  socialText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});