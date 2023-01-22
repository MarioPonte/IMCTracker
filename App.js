import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title';
import { useFonts, Inter_900Black, Inter_400Regular  } from '@expo-google-fonts/inter';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFFEE',
    paddingTop:80,
  },
});
