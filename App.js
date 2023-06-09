import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';
import{
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from './src/components/GetStarted';
import RegisterOrSignup from './src/components/RegisterOrSignup';
import SignIn from './src/components/SignIn'

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    <AppLoading/>
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted}/>
        <Stack.Screen name="RegisterOrSignup" component={RegisterOrSignup} />
        <Stack.Screen name="SignIn" component={SignIn}/>
      </Stack.Navigator>
      <StatusBar style='light'/>
    </NavigationContainer>
  );
}
