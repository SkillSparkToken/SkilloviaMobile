import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const reviews = [
  { id: '1', name: 'Winifred Stamm', review: 'Lorem ipsum dolor sit amet...' },
  { id: '2', name: 'John Doe', review: 'Excellent service, highly recommend!' },
];

const SkillDetailsScreen = ({ route }) => {
  const { skill } = route.params;

  const renderReview = ({ item }) => (
    <View style={styles.review}>
      <Text style={styles.reviewer}>{item.name}</Text>
      <Text style={styles.reviewText}>{item.review}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placeimg.com/640/480/nature' }}
        style={styles.image}
      />
      <Text style={styles.title}>{skill.title}</Text>
      <Text style={styles.subtitle}>Experience level: {skill.level}</Text>
      <Text style={styles.description}>{skill.description}</Text>
      <Text style={styles.rate}>
        {skill.rate} • {skill.tokens}
      </Text>
      <Text style={styles.reviewsTitle}>Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: 'gray', marginBottom: 8 },
  description: { marginBottom: 16, color: '#666' },
  rate: { fontWeight: 'bold', marginBottom: 16 },
  reviewsTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  review: { marginBottom: 16 },
  reviewer: { fontWeight: 'bold', marginBottom: 4 },
  reviewText: { color: '#666' },
});

export default SkillDetailsScreen;
