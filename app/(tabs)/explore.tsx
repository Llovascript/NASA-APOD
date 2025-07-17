import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Header } from '../../components/Header';

export default function ExplorePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚀 Acerca de NASA APOD</Text>
          <Text style={styles.sectionText}>
            La "Imagen Astronómica del Día" (APOD) es una de las páginas web más populares de la NASA. 
            Cada día presenta una imagen o fotografía diferente de nuestro fascinante universo, 
            junto con una breve explicación escrita por un astrónomo profesional.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌌 ¿Qué encontrarás?</Text>
          <Text style={styles.sectionText}>
            • Imágenes espectaculares del espacio profundo{'\n'}
            • Fotografías de planetas y lunas{'\n'}
            • Nebulosas y galaxias distantes{'\n'}
            • Fenómenos astronómicos únicos{'\n'}
            • Explicaciones científicas detalladas
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔬 Datos Curiosos</Text>
          <Text style={styles.sectionText}>
            APOD ha estado activo desde el 16 de junio de 1995, y ha presentado 
            miles de imágenes increíbles del cosmos. Es una ventana diaria 
            a las maravillas del universo que nos rodea.
          </Text>
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
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 16,
    color: '#e2e8f0',
    lineHeight: 24,
  },
});