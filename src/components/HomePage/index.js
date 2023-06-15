import React from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SpotifyP from '../../assets/spotifyP.svg';


export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <SpotifyP></SpotifyP>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        height: '100%',
        alignItems: 'center'
    }
})