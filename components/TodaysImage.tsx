import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface PostImage {
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: string;
    title: string;
    url: string;
}

const TodaysImage = () => {
    const [postImage, setPostImage] = useState<PostImage | null>(null);
    const [loading, setLoading] = useState(true);

    // Reemplaza con tu API key de NASA
    const API_KEY = 'gDyvcW0u5N7A2iXadhZjUEdv9vdD9udc9Mw4kr92';

    const getTodaysImage = async () => {
        try {
            const today = new Date().toISOString().split('T')[0];
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${today}`
            );
            const data = await response.json();
            setPostImage(data);
        } catch (error) {
            console.error('Error fetching image:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getTodaysImage();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (!postImage) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>No image available</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: postImage.url }} 
                    style={styles.image}
                />
                <Text style={styles.title}>{postImage.title}</Text>
                <Text style={styles.date}>{postImage.date}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{postImage.explanation}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageContainer: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: width - 40,
        height: 300,
        borderRadius: 10,
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    date: {
        fontSize: 16,
        color: '#aaa',
        marginBottom: 10,
    },
    descriptionContainer: {
        padding: 20,
        paddingTop: 0,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 24,
        textAlign: 'justify',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    loadingText: {
        color: '#fff',
        fontSize: 18,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    errorText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default TodaysImage;