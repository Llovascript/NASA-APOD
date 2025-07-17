import React from 'react';
import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
  safeArea: {
    backgroundColor: '#1e293b',
    // Solo aplica paddingTop en Android, iOS ya lo maneja SafeAreaView
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    minHeight: 60,
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
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
