import React, { cloneElement } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import SpotifyP from '../../assets/spotifyP.svg';
import Google from '../../assets/google.svg';
import Apple from '../../assets/apple.svg';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignIn({navigation}) {
    const registerNow = () => {
        navigation.navigate({name: "Register"})
    }

    const homePage = () => {
        navigation.navigate({name: "HomePage"})
    }
    return (
        <View style={styles.container}>
            <SpotifyP style={styles.logo} />
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

            <TextInput
                style={styles.email}
            >
                <Text style={styles.emailText}>Enter Username or Email</Text>
            </TextInput>

            <TextInput
                style={styles.senha}
            >
                <Text style={styles.senhaText}>Password</Text>
            </TextInput>

            <Text
                style={styles.redefinir}
            >
                Recovery Password
            </Text>

            <TouchableOpacity
                style={styles.entrar}
                onPress={() => homePage()}
            >
                <Text style={styles.entrarBtn}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.traco}>
                <View style={styles.traco1}></View>
                <Text style={styles.textOr}>Or</Text>
                <View style={styles.traco2}></View>
            </View>

            <View style={styles.redesLogin}>
                <Google style={styles.google} />
                <Apple style={styles.apple} />
            </View>

            <View style={styles.naoMembro}>
                <Text style={styles.membro}>Not A Member ? {''}
                    <Text
                        style={styles.registerNow}
                        onPress={() => registerNow()}
                    >
                        Register Now
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        height: "100%",
        alignItems: 'center'
    },
    logo: {
        top: 50
    },
    titulos: {
        alignItems: 'center',
        top: 149
    },
    tituloPrincipal: {
        fontWeight: '700',
        fontSize: 30,
        color: '#F2F2F2',
        lineHeight: 40
    },
    subTitulo: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        top: 22,
        color: '#E1E1E1'
    },
    hyperlinkStyle: {
        color: '#38B432'
    },
    email: {
        width: 334,
        top: 220,
        height: 80,
        borderWidth: 1,
        borderColor: '#A7A7A7',
        borderStyle: 'solid',
        borderRadius: 30,
        color: '#A7A7A7',
        paddingLeft: 30,
        fontSize: 16,
        fontWeight: '700',
    },
    emailText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#A7A7A7',
        opacity: 0.6,
        fontStyle: 'normal'
    },
    senha: {
        width: 334,
        top: 235,
        height: 80,
        borderWidth: 1,
        borderColor: '#A7A7A7',
        borderStyle: 'solid',
        borderRadius: 30,
        color: '#A7A7A7',
        paddingLeft: 30,
        fontSize: 16,
        fontWeight: '700',
    },
    senhaText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#A7A7A7',
        opacity: 0.6,
        fontStyle: 'normal'
    },
    redefinir: {
        fontSize: 14,
        fontWeight: '700',
        color: '#AEAEAE',
        top: 255,
        marginLeft: 45,
        marginRight: 218
    },
    entrar: {
        width: 325,
        height: 80,
        backgroundColor: '#42C83C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        top: 277,
    },
    entrarBtn: {
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#FFFFFF'
    },
    traco: {
        alignItems: 'center',
        flexDirection: 'row',
        top: 300
    },
    traco1: {
        width: 146,
        borderWidth: 1,
        borderColor: '#5B5B5B'
    },
    traco2: {
        width: 146,
        borderWidth: 1,
        borderColor: '#5B5B5B'
    },
    textOr: {
        fontWeight: '400',
        fontSize: 12,
        textTransform: 'capitalize',
        color: '#DCDCDC',
        marginRight: 5,
        marginLeft: 5
    },
    redesLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 330,
    },
    google: {
        top: 4,
        marginLeft: 30,
        marginRight: 30
    },
    apple: {
        marginLeft: 30,
        marginRight: 30
    },
    naoMembro: {
        top: 380
    },
    membro: {
        fontSize: 14,
        fontWeight: '700',
        color: '#DBDBDB', 
        textTransform: 'capitalize'
    },
    registerNow : {
        fontSize: 14,
        fontWeight: '700',
        color: '#288CE9',
        textTransform: 'capitalize'
    }
})