import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Header } from '../../components/Header';

const { width, height } = Dimensions.get('window');

// Definir el tipo de datos para APOD
interface APODData {
  title: string;
  date: string;
  url: string;
  explanation: string;
  media_type: string;
}

// Componente de Tarjeta Individual
const APODCard = ({ item, onPress }: { item: APODData, onPress: (item: APODData) => void }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Image 
        source={{ uri: item.url }} 
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HomePage() {
  const [apodData, setApodData] = useState<APODData[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCards, setShowCards] = useState(false);

  // Función para obtener datos de la API de la NASA
  const fetchAPODData = async () => {
    setLoading(true);
    try {
      // Obtener los últimos 10 días de APOD
      const promises = [];
      const today = new Date();
      
      for (let i = 0; i < 10; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        
        // Tu API key de la NASA
        const url = `https://api.nasa.gov/planetary/apod?api_key=gDyvcW0u5N7A2iXadhZjUEdv9vdD9udc9Mw4kr92&date=${dateString}`;
        promises.push(fetch(url));
      }
      
      const responses = await Promise.all(promises);
      const data = await Promise.all(
        responses.map(response => response.json())
      );
      
      // Filtrar solo imágenes (no videos)
      const imageData = data.filter((item: APODData) => item.media_type === 'image');
      setApodData(imageData);
      setShowCards(true);
    } catch (error) {
      console.error('Error fetching APOD data:', error);
      Alert.alert('Error', 'No se pudieron cargar las imágenes de la NASA');
    } finally {
      setLoading(false);
    }
  };

  const handleCardPress = (item: APODData) => {
    router.push({
      pathname: '/detail',
      params: {
        title: item.title,
        date: item.date,
        url: item.url,
        explanation: item.explanation
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        {!showCards ? (
          // Vista inicial con logo de la NASA
          <View style={styles.initialView}>
            <TouchableOpacity 
              style={styles.nasaLogoContainer}
              onPress={fetchAPODData}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="large" color="#1e40af" />
              ) : (
                <View style={styles.nasaLogo}>
                  <Text style={styles.nasaLogoText}>🌍</Text>
                  <Text style={styles.nasaText}>NASA APOD</Text>
                  <Text style={styles.tapText}>Toca para explorar</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          // Vista de tarjetas deslizables
          <ScrollView 
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer}
          >
            {apodData.map((item: APODData, index: number) => (
              <View key={index} style={styles.cardWrapper}>
                <APODCard item={item} onPress={handleCardPress} />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    flex: 1,
  },
  initialView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  nasaLogoContainer: {
    alignItems: 'center',
    padding: 40,
    borderRadius: 20,
    backgroundColor: '#1e293b',
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  nasaLogo: {
    alignItems: 'center',
  },
  nasaLogoText: {
    fontSize: 80,
    marginBottom: 20,
  },
  nasaText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  tapText: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
  },
  cardsContainer: {
    paddingVertical: 20,
  },
  cardWrapper: {
    width: width,
    paddingHorizontal: 20,
    paddingTop: height * 0.07,
    alignItems: 'center',
  },
  card: {
    width: width * 0.9,
    backgroundColor: '#1e293b',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: '100%',
    height: height * 0.4,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 14,
    color: '#94a3b8',
  },
});