// src/screens/SecurityScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecurityScreen = () => {
  const navigation = useNavigation();
  const [isBiometricEnabled, setBiometricEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Security</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Authentication options</Text>

        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('ChangePassword')}
          >
            <View>
              <Text style={styles.optionTitle}>Password</Text>
              <View style={styles.optionStatus}>
                <Text style={styles.statusText}>Password has been set</Text>
                <Text style={styles.hintText}>
                  You change your password to a more stronger one
                </Text>
              </View>
            </View>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>

          <View style={[styles.option, styles.lastOption]}>
            <View>
              <Text style={styles.optionTitle}>
                Face or fingerprint recognition
              </Text>
              <View style={styles.optionStatus}>
                <Text style={styles.statusText}>
                  {isBiometricEnabled ? 'Enabled' : 'Disabled'}
                </Text>
                <Text style={styles.hintText}>
                  Use your face or fingerprint when logging in.
                </Text>
              </View>
            </View>
            <Switch
              value={isBiometricEnabled}
              onValueChange={setBiometricEnabled}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isBiometricEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 16,
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  optionStatus: {
    marginTop: 4,
  },
  statusText: {
    color: '#4CAF50',
    fontSize: 14,
  },
  hintText: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
  editIcon: {
    fontSize: 20,
    color: '#666',
  },
});

export default SecurityScreen;



