import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NASA</Text>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/nasa-logo.png')} style={styles.logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.03,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoContainer: {
    width: width * 0.1,
    height: width * 0.1,
  },
  logoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: width * 0.05,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});