import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image 
                    source={require('../assets/images/nasa-logo.png')}
                    style={styles.logo}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#1e1e2e',
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        width: 60,
        height: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default Header;