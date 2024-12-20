import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Notify = ({ navigation }) => {
  const [notifications] = useState([
    // {
    //   id: '1',
    //   title: 'New Feature Alert!',
    //   message: "We're pleased to introduce the latest enhancements in our templating experience.",
    //   time: '15h',
    //   icon: 'https://yourapp.com/notification-icon.png', // Replace with your actual icon
    //   date: 'Today'
    // },
    // {
    //   id: '2',
    //   title: 'New Feature Alert!',
    //   message: "We're pleased to introduce the latest enhancements in our templating experience.",
    //   time: '15h',
    //   icon: 'https://yourapp.com/notification-icon.png', // Replace with your actual icon
    //   date: 'Today'
    // }
  ]);

  const EmptyState = () => (
    <View style={styles.emptyContainer}>
      <Image
        source={{uri: ""}} // Replace with your actual bell icon
        style={styles.bellIcon}
      />
      <Text style={styles.emptyTitle}>No notifications yet</Text>
      <Text style={styles.emptySubtitle}>We'll let you know when updates arrive!</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Notification</Text>
      <TouchableOpacity>
        <Text style={styles.markAllText}>Mark all as read</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationContent}>
        <Image
          source={{ uri: item.icon }}
          style={styles.notificationIcon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{item.time}</Text>
          <TouchableOpacity>
            <Icon name="more-vert" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {renderHeader()}
      {notifications.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={() => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>Today</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
},
backButton: {
    padding: 8,
},
headerTitle: {
      fontFamily: 'AlbertSans-Medium',
    fontSize: 18,

    color: '#000',
  },
  markAllText: {
    fontSize: 14,
    color: '#4CAF50',
    fontFamily: 'AlbertSans-Medium',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  bellIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
    tintColor: '#CCCCCC',
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
    color: '#000',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'AlbertSans-Medium',
  },
  listContent: {
    flexGrow: 1,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F8F8F8',
    fontFamily: 'AlbertSans-Medium',
  },
  sectionHeaderText: {
    fontSize: 14,

    color: '#666',
    fontFamily: 'AlbertSans-Medium',
  },
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
    
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    fontFamily: 'AlbertSans-Medium',
  },
});

export default Notify;