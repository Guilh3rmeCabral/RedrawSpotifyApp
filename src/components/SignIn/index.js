import React, { cloneElement } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import SpotifyP from '../../assets/spotifyP.svg'

export default function SignIn() {
 return (
   <View style={styles.container}>
        <SpotifyP style={styles.logo}/>
        <View style={styles.titulos}>
            <Text style={styles.tituloPrincipal}>Sign In</Text>
            <Text style={styles.subTitulo}>If You Need Any Support {''}  
                <Text
                    style={styles.hyperlinkStyle}
                    onPress={() => Linking.openURL('https://support.spotify.com/br-pt/')}
                >
                    Click Here
                </Text>
            </Text>

        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#1C1B1B',
        height: "100%",
        alignItems: 'center'
    },
    logo : {
        top: 50
    },
    titulos : { 
        alignItems: 'center',
        top: 149
    },
    tituloPrincipal : {
        fontWeight: '700',
        fontSize: 30,
        color: '#F2F2F2',
        lineHeight: 40
    },
    subTitulo : {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        top : 22,
        color: '#E1E1E1'
    },
    hyperlinkStyle : {
        color: '#38B432'
    }


})