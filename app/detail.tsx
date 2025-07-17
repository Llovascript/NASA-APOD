import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

const { height } = Dimensions.get('window');

export default function DetailPage() {
  const { title, date, url, explanation } = useLocalSearchParams();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>← Volver</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <Image 
          source={{ uri: url as string }} 
          style={styles.image}
          resizeMode="contain"
        />
        
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.description}>{explanation}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  closeButton: {
    paddingVertical: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#3b82f6',
    fontWeight: '600',
  },
  content: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: height * 0.4,
    backgroundColor: '#1e293b',
  },
  info: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#e2e8f0',
    lineHeight: 24,
  },
});