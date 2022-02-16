import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Homescreen from './screens/homescreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import ContactUs from './screens/ContactUs'
import Feedback from './screens/Feedback';




export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <Provider store={store}>
     <NavigationContainer>
    <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component= {Homescreen} options={{headerShown: false,}} />
      <Stack.Screen name="MapScreen" component= {MapScreen} options={{headerShown: false,}} />
      <Stack.Screen name="ContactUs" component= {ContactUs} options={{headerShown: false,}} />
      <Stack.Screen name="Feedback" component= {Feedback} options={{headerShown: false,}} />
    </Stack.Navigator>



    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
