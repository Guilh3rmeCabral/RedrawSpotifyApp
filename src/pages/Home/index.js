import React from 'react';
import { View, Text } from 'react-native';
import GetStarted from '../../components/GetStarted';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
 return (
    <View>
        <GetStarted/>
        <StatusBar style='light'/>
    </View>
  );
}