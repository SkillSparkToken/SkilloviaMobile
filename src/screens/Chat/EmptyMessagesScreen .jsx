// src/screens/EmptyMessagesScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EmptyMessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "" }}
        style={styles.emptyImage}
      />
      <Text style={styles.emptyText}>Nothing to see here!</Text>
      <Text style={styles.subText}>You have no messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    tintColor: '#4CAF50', // Green color matching the chat bubbles
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
});

export default EmptyMessagesScreen;