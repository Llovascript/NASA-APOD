import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>NASA</Text>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/nasa-logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoContainer: {
    width: 40,
    height: 40,
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#3b82f6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});