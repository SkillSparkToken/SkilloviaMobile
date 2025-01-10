import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../Utils/Theme';
import EmptyMessagesScreen from './EmptyMessagesScreen ';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

const MessagesListScreen = ({ navigation }) => {
  const [messages] = useState([
    {
      id: '1',
      name: 'Schowalter LLC',
      message: 'You: Thank you,...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      unreadCount: 0,
    },
    {
      id: '2',
      name: 'Wuckert - Price',
      message: 'Soluta natus quisquam omnis...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      unreadCount: 4,
    },
    {
      id: '3',
      name: 'Johnston and Sons',
      message: 'Doloremque fugiat maxime r...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      unreadCount: 4,
    },
    {
      id: '4',
      name: 'Treutel Group',
      message: 'Pariatur perferendis corporis...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      unreadCount: 4,
    },
    {
      id: '5',
      name: 'Bradtke Group',
      message: 'Fugiat eligendi et cumque do...',
      time: '11:37am',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      unreadCount: 4,
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
      </View>
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{item.time}</Text>
            {item.unreadCount > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadCount}>{item.unreadCount}</Text>
              </View>
            )}
          </View>
        </View>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chats</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
   
          <TextInput
            style={styles.searchInput}
            placeholder="Search messages"
            placeholderTextColor="#666"
          />
        </View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyMessagesScreen}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: 40
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Regular',
    color: '#000',
  },


  searchContainer: {
    padding: 16,
    paddingTop:20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 32,
    paddingHorizontal: 12,
    borderWidth:1
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontFamily: 'AlbertSans-Regular',
    fontSize: 16,
    color: '#333',
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontFamily: 'AlbertSans-Medium',
    fontSize: 16,
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'AlbertSans-Regular',
    fontSize: 13,
    color: '#666',
    marginRight: 8,
  },
  unreadBadge: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  unreadCount: {
    fontFamily: 'AlbertSans-Medium',
    fontSize: 13,
    color: '#fff',
  },
  messageText: {
    fontFamily: 'AlbertSans-Regular',
    fontSize: 14,
    color: '#666',
  },
  list: {
    flex: 1,
  },
});

export default MessagesListScreen;