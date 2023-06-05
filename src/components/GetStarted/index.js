import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
  Title,
  TouchableOpacity,
} from 'react-native';

import fundo from '../../assets/fundo.png';
import Spotify from '../../assets/spotify.svg'

export default function GetStarted() {
 return (
   <View style={styles.container}>
        <Image style={styles.fundo} source={fundo} />
        <Spotify style={styles.logo}/>

        <View style={styles.titulos}>
          <Text style={styles.tituloPrincipal}>Enjoy listening to music</Text>
          <Text style={styles.subTitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.</Text>

          <TouchableOpacity style={styles.btnGetStarted}>
              <Text style={styles.btnName}>Get Started</Text>
          </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center'
  },
  fundo : {
    position: 'absolute',
    width: 450,
    height: 900,
  },
  logo : {
    marginTop: 50,
  },
  titulos : {
    marginTop: 480,
    alignItems: 'center'
  },
  tituloPrincipal : {
    textAlign: 'center',
    color: '#DADADA',
    lineHeight: 50,
    fontWeight: 'bold',
    fontSize: 25,
  },
  subTitulo: {
    textAlign: 'center',
    color: '#797979',
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '400',
    marginRight: 20,
    marginLeft: 20,
    width: 400
  },
  btnGetStarted : {
    marginTop: 30,
    backgroundColor: '#42C83C',
    height: 92,
    width: 329,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  btnName : {
    fontSize: 22,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#F6F6F6',
  }
})