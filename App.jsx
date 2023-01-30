import React from 'react';
import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
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
    <>
      <StatusBar style="light" backgroundColor="#2FCB8F" />
      <View style={styles.container}>
        <Title />
        <Main />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2FCB8F',
    paddingTop: 20,
  },
});
