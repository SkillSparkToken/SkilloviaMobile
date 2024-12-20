import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Color } from '../../Utils/Theme';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Thank you,\nI look forward to see you",
        createdAt: new Date(),
        user: {
          _id: 1,
        },
      },
      {
        _id: 2,
        text: "Alright, I've received your order\nI'll see you tomorrow at 8pm",
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
      {
        _id: 3,
        text: "Hi, Good Morning",
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
      {
        _id: 4,
        text: "Hi, Good Morning\nI just booked you for tomorrow",
        createdAt: new Date(),
        user: {
          _id: 1,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const handleImageUpload = () => {
    console.log('Image upload pressed');
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <MaterialCommunityIcons
            name="send-circle"
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Color.secondary, // Dark green color
            borderRadius: 12,
            marginVertical: 3,
            paddingHorizontal: 2,
          },
          left: {
            backgroundColor: Color.gray, // Light gray color
            borderRadius: 12,
            marginVertical: 3,
            paddingHorizontal: 2,
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
            fontFamily: 'AlbertSans-Regular',
            fontSize: 15,
            lineHeight: 20,
          },
          left: {
            color: '#000',
            fontSize: 15,
            lineHeight: 20,
            fontFamily: 'AlbertSans-Regular',
          },
        }}
      />
    );
  };

  const renderComposer = (props) => {
    return (
      <View style={styles.composerContainer}>
        <TouchableOpacity 
          onPress={handleImageUpload}
          style={styles.uploadButton}
        >
          <Icon name="images" size={24} color="#888" style={styles.searchIcon} />
        </TouchableOpacity>
        <Composer
          {...props}
          textInputStyle={styles.composer}
        />
      </View>
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputToolbar}
        primaryStyle={styles.inputToolbarPrimary}
      />
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {renderHeader()}
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderComposer={renderComposer}
        renderInputToolbar={renderInputToolbar}
        alwaysShowSend
        renderDay={(props) => {
          return (
            <View style={styles.dayContainer}>
              <Text style={styles.dayText}>Today</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
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
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 5,
  },
  composerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    flex: 1,
  },
  uploadButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  composer: {
    backgroundColor: Color.background,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginLeft: 4,
    fontFamily: 'AlbertSans-Regular',
    fontSize: 16,
    lineHeight: 20,
    maxHeight: 100,
  },
  inputToolbar: {
    backgroundColor: Color.background,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    paddingVertical: 4,
  },
  inputToolbarPrimary: {
    alignItems: 'center',
  },
  dayContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  dayText: {
    backgroundColor: Color.gray,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    color: '#666',
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
  },
});

export default ChatScreen;