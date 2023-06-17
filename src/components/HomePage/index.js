import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SpotifyP from '../../assets/spotifyP.svg';
import billie from '../../assets/billieHomePage.png';
import efeitoTop from '../../assets/efeitoOndaTop.png'


export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Feather style={styles.btnIcon} name="search" size={24} color="white" />
                <SpotifyP></SpotifyP>
                <Feather style={styles.btnIcon} name="more-vertical" size={24} color="white" />
            </View>

            <View style={styles.painel}>
                <View style={styles.textPainel}>
                    <Text style={styles.album}>
                        New Album
                    </Text>
                    <Text style={styles.albumHappie}>
                        Happier Than Ever
                    </Text>
                    <Text style={styles.albumCantora}>
                        Billie Eilish
                    </Text>
                </View>
                <Image style={styles.efeitoTop} source={efeitoTop}/>
                <Image style={styles.billie} source={billie}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        height: '100%',
        alignItems: 'center'
    },
    content: {
        top: 50,
        flexDirection: 'row',
        gap: 90
    },
    btnIcon: {
        top: 5.5
    },
    painel: {
        width: 334,
        height: 118,
        top: 106,
        backgroundColor: "#42C83C",
        borderRadius: 30,
        zIndex: 10
    },
    textPainel : {
        top: 17
    },
    album: {
        fontSize: 10,
        color: '#FBFBFB',
        marginLeft: 19,
        fontWeight: 700
    },
    albumHappie: {
        fontSize: 19,
        color: '#FBFBFB',
        marginLeft: 19,
        fontWeight: 700,
        width: 147,
        lineHeight: 26
    },
    albumCantora: {
        fontSize: 13,
        color: '#FBFBFB',
        marginLeft: 19,
        fontWeight: 700,
        lineHeight: 18
    },
    billie : {
        top: "-237%",
        right: 15
    },
    efeitoTop: {
        top: "-70%",
        left: 160,
        position: 'relative'
    }
})