import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/header';
import TodaysImage from '../../components/TodaysImage';

const Home = () => {
    return(
        <View style={styles.container}>
            <Header />
            <TodaysImage />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

export default Home;