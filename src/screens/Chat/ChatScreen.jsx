import React, { useState, useEffect, useCallback } from 'react';
import { View, Platform, TouchableOpacity, Image, StyleSheet, PermissionsAndroid } from 'react-native';
import { GiftedChat, Bubble, Send, InputToolbar, Composer, Actions } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    requestPermission();
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        system: true
      }
    ]);
  }, []);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          {
            title: 'Image Permission',
            message: 'App needs access to your images to send them in chat.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const onSend = useCallback((newMessages = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessages)
      );
    }, 1000);
  }, []);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 4,
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        return;
      }

      if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        return;
      }

      if (response.assets && response.assets[0]) {
        const newMessage = {
          _id: Math.round(Math.random() * 1000000),
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'User',
            avatar: 'https://placeimg.com/140/140/people'
          },
          image: response.assets[0].uri,
        };
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, [newMessage])
        );
      }
    });
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
            borderRadius: 15,
            padding: 5,
          },
          left: {
            backgroundColor: '#f0f0f0',
            borderRadius: 15,
            // padding: 5,
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          },
          left: {
            color: '#000'
          }
        }}
      />
    );
  };

  const renderInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#f8f8f8',
          paddingTop: 6,
          paddingHorizontal: 8,
          borderTopWidth: 1,
          borderTopColor: '#E8E8E8',
          marginHorizontal: 0,
        }}
        primaryStyle={{ alignItems: 'center' }}
      />
    );
  };

  const renderComposer = props => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          color: '#222B45',
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderRadius: 20,
          borderColor: '#E8E8E8',
          paddingTop: 8.5,
          paddingHorizontal: 12,
          marginLeft: 0,
          fontSize: 14,
        }}
      />
    );
  };

  const renderSend = props => {
    return (
      <Send
        {...props}
        disabled={!props.text && !props.image}
        containerStyle={{
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 4,
        }}
      >
        <MaterialCommunityIcons
          name="send-circle"
          size={32}
          color={props.text ? '#2e64e5' : '#999'}
        />
      </Send>
    );
  };

  const renderActions = props => {
    return (
      <Actions
        {...props}
        containerStyle={{
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 4,
          marginRight: 4,
          marginBottom: 0,
        }}
        icon={() => (
          <MaterialCommunityIcons
            name="image-plus"
            size={28}
            color="#2e64e5"
          />
        )}
        onPressActionButton={pickImage}
      />
    );
  };

  const renderMessageImage = props => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: props.currentMessage.image }}
          style={styles.messageImage}
          resizeMode="cover"
         
        />
      </View>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
        name: 'User',
        avatar: 'https://placeimg.com/140/140/people'
      }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      renderComposer={renderComposer}
      renderSend={renderSend}
      renderActions={renderActions}
      renderMessageImage={renderMessageImage}
      isTyping={isTyping}
      alwaysShowSend
      scrollToBottom
      showUserAvatar
      showAvatarForEveryMessage={false}
      renderAvatarOnTop
      placeholder="Type a message..."
      timeFormat="LT"
      dateFormat="LL"
      multiline
      textInputProps={{
        maxHeight: 80,
      }}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 15,
    // padding: 2,
    marginVertical: 3,
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 13,
  },
});

export default ChatScreen;