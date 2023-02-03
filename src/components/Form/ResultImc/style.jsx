import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultImc: {
      flex: 1,
      marginTop: 20,
      paddingTop: 15,
      borderRadius: 50,
      alignItems: "center",
      width: "100%",
    },

    information: {
      fontSize: 18,
      color: "#2FCB8F",
      fontFamily: 'Inter_900Black',
      marginBottom: 10,
    },

    numberImc: {
      fontSize: 48,
      color: "#2FCB8F",
      fontFamily: 'Inter_900Black',
    },

    boxShareButton: {
      width: "100%",
      alignItems: "center",
      marginBottom: 10,
    },

    shared: {
      backgroundColor: "#2FCB8F",
      borderRadius: 50,
      paddingBottom: 5,
      paddingTop: 5,
    },

    sharedText: {
      color: "white",
      fontFamily: 'Inter_900Black',
      paddingHorizontal: 30,
    }
});

export default styles;