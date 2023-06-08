import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Spotify from '../../assets/spotify.svg';
import billie from '../../assets/billie.png';
import Vetor1 from '../../assets/vetorRS1.svg';
import Vetor2 from '../../assets/vetorRS2.svg';

export default function RegisterOrSignup() {
    return (
        <View style={styles.container}>
            <Spotify style={styles.logo} />

            <View style={styles.titulos}>
                <Text style={styles.tituloPrincipal}>Enjoy listening to music</Text>
                <Text style={styles.subTitulo}>Spotify is a proprietary Swedish audio streaming and media services provider</Text>
            </View>

            <View style={styles.gpBtn}>
                <TouchableOpacity
                    style={styles.btnRegister}
                >
                    <Text style={styles.btnName}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnSign}
                >
                    <Text style={styles.btnName}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <Image style={styles.billie} source={billie} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        height: 1000,
        alignItems: 'center',
    },
    logo: {
        marginTop: 175,
    },
    titulos: {
        marginTop: 55,
        alignItems: 'center'
    },
    tituloPrincipal: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F2F2F2',
    },
    subTitulo: {
        color: '#A0A0A0',
        fontWeight: '400',
        marginRight: 22,
        marginLeft: 22,
        marginTop: 21,
        lineHeight: 25,
        fontSize: 17,
        textAlign: 'center'
    },
    gpBtn: {
        width: "100%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    btnRegister: { 
        backgroundColor: '#42C83C',
        width: 147,
        height: 73,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    btnSign: {
        width: 147,
        height: 73,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    btnName: {
        fontSize: 19,
        color: '#FFFFFF',
        fontWeight: '700'
    },
    billie: {
        right: 50,
        bottom: 85,
        position: 'relative'
    }
    
})