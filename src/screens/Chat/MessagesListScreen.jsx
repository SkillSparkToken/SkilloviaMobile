import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
} from 'react-native';

const MessagesListScreen = ({ navigation }) => {
  const [messages] = useState([
    {
      id: '1',
      name: 'Schowatter LLC',
      message: 'You: Thank you...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      hasNewMessage: false,
    },
    {
      id: '2',
      name: 'Wuckert - Price',
      message: 'Soluta rerum quibusdam omnis...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      hasNewMessage: true,
    },
    {
      id: '3',
      name: 'Johnston and Sons',
      message: 'Doloremque fugiat maxime r...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      hasNewMessage: true,
    },
    {
      id: '4',
      name: 'Treutel Group',
      message: 'Pariatur perferendis corporis...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      hasNewMessage: true,
    },
    {
      id: '5',
      name: 'Bradtke Group',
      message: 'Fugiat eligendi et cumque do...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      hasNewMessage: false,
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() =>
        navigation.navigate('message', {
          name: item.name,
          avatar: item.avatar,
          message: item.message,
        })
      }
    >
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        {item.hasNewMessage && <View style={styles.dotIndicator} />}
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages"
          placeholderTextColor="#666"
        />
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  messageItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  dotIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  messageContent: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageText: {
    color: '#666',
  },
  time: {
    color: '#666',
    fontSize: 12,
  },
  list: {
    flex: 1,
  },
});

export default MessagesListScreen;
