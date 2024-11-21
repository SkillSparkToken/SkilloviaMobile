import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const EmptySkillsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a skill</Text>
      <Text style={styles.subtitle}>Add your skills to get clients and get paid.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddSkill')}
      >
        <Text style={styles.buttonText}>Add a skill</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#32CD32', padding: 16, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default EmptySkillsScreen;
