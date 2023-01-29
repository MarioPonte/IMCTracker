import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_500Medium  } from '@expo-google-fonts/inter';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_500Medium,
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
