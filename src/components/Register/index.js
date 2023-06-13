import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SpotifyP from '../../assets/spotifyP.svg';
import Google from '../../assets/google.svg';
import Apple from '../../assets/apple.svg';

export default function Register() {

    const signIn = () => {
        console.log('SignIn')
    }
    return (
        <View style={styles.container}>
            <SpotifyP style={styles.logoSpot} />
            <View style={styles.titulos}>
                <Text style={styles.titulosReg}>Register</Text>
                <Text style={styles.subTitulo}>
                    If You Need Any Support {''}
                    <Text
                        style={styles.linkSupport}
                        onPress={() => Linking.openURL('https://support.spotify.com/br-pt/')}
                    >
                        Click Here
                    </Text>
                </Text>

            </View>
            <TextInput
                style={styles.name}
            >
                <Text style={styles.nameText}>Enter Username or Email</Text>
            </TextInput>

            <TextInput
                style={styles.email}
            >
                <Text style={styles.emailText}>Enter Email</Text>
            </TextInput>

            <TextInput
                style={styles.senha}
            >
                <Text style={styles.senhaText}>Password</Text>
            </TextInput>

            <TouchableOpacity
                style={styles.entrar}
            >
                <Text style={styles.entrarBtn}>Creat Account</Text>
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

            <View style={styles.naoTemConta}>
                <Text style={styles.conta}>Do You Have An Account ? {''}
                    <Text
                        style={styles.entre}
                        onPress={() => signIn()}
                    >
                        Sign In
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: '#1C1B1B',
        alignItems: 'center',
    },
    logoSpot: {
        top: 50,
    },
    titulos: {
        alignItems: 'center',
        top: 149
    },
    titulosReg: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        textTransform: 'capitalize',
        top: -47
    },
    subTitulo: {
        color: '#E1E1E1',
        fontWeight: '400',
        fontSize: 14,
        top: -20,
        lineHeight: 16,
        textTransform: 'capitalize'
    },
    linkSupport: {
        color: '#38B432'
    },
    name: {
        width: 334,
        top: 160,
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
    nameText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#A7A7A7',
        opacity: 0.6,
        fontStyle: 'normal'
    },
    email: {
        width: 334,
        top: 180,
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
        top: 200,
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
    entrar: {
        width: 332,
        height: 80,
        backgroundColor: '#42C83C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        top: 240,
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
        top: 265
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
        top: 295,
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
    naoTemConta: {
        top: 340
    },
    conta: {
        fontSize: 14,
        fontWeight: '700',
        color: '#DBDBDB', 
        textTransform: 'capitalize'
    },
    entre : {
        fontSize: 14,
        fontWeight: '700',
        color: '#288CE9',
        textTransform: 'capitalize'
    }
});