import React from "react";
import { View, Text, SectionList, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 
import { Color } from "../../Utils/Theme";

const SettingsScreen = ({ navigation }) => {
  const sections = [
    {
      title: "My Skillovia",
      data: [
        { title: "My skills", icon: "book", route: "myskill" },
        { title: "Edit profile", icon: "person", route: "editprofile" },
        { title: "KYC", icon: "id-card", route: "KYC" },
        { title: "Invite friends", icon: "share-social", route: "InviteFriends" },
      ],
    },
    {
      title: "General",
      data: [
        { title: "Security", icon: "shield-checkmark", route: "Security" },
        { title: "Payment settings", icon: "card", route: "PaymentSettings" },
        { title: "Notifications settings", icon: "notifications", route: "NotificationSettings" },
        { title: "Linked Devices", icon: "laptop", route: "LinkedDevices" },
        { title: "Appearance", icon: "color-palette", route: "Appearance" },
      ],
    },
    {
      title: "Legal & Support",
      data: [
        { title: "Terms of Service", icon: "document-text", route: "TermsOfService" },
        { title: "Privacy Policy", icon: "lock-closed", route: "PrivacyPolicy" },
        { title: "Help Center", icon: "help-circle", route: "HelpCenter" },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle="dark-content" hidden={false} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}>
        <View style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </View>
        <Text style={styles.header}>Settings</Text>
      </TouchableOpacity>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.route)} // Navigate to the route
          >
            <Icon name={item.icon} size={20} color="#6B7280" style={styles.icon} />
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: "row", 
    paddingHorizontal: 16,
    paddingVertical: 10, 
  },
  header: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Bold',
    paddingHorizontal: 5,
    color: Color.text,
  },
  sectionHeader: {
    fontSize: 14,
    padding: 6,
    paddingHorizontal: 16,
    fontFamily: 'AlbertSans-Bold',
    marginVertical: 8,
    color: Color.text,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: Color.gray,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  itemText: {
    fontSize: 15,
    color: "#374151",
    fontFamily: 'AlbertSans-Medium',
  },
});

export default SettingsScreen;
