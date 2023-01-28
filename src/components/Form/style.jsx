import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      alignItems: "center",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },

    form: {
      width: "100%",
      height: "auto",
      marginTop: 30,
      padding: 10,
    },

    formLabel: {
      fontSize: 18,
      paddingLeft: 20,
      fontFamily: 'Inter_400Regular',
    },

    formInput: {
      width: "90%",
      height: 40,
      borderRadius: 50,
      backgroundColor: "#F7FFF9",
      margin: 12,
      paddingLeft: 10,
      fontFamily: 'Inter_400Regular',
    },

    buttonCalculator: {
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      backgroundColor: "#2FCB8F",
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 12,
      marginTop: 30,
    },

    textButtonCalculator: {
      fontSize: 20,
      color: "white",
      fontFamily: 'Inter_500Medium',
    },

    errorMessage: {
      fontSize: 12,
      color: "#dc3545",
      fontFamily: 'Inter_900Black',
      paddingLeft: 20,
    },

    exhibitionResultImc: {
      width: "100%",
      height: "50%",
    },

    listImcs: {
      marginTop: 20,
    },

    resultImcItem: {
      fontSize: 26,
      fontFamily: "Inter_500Medium",
      color: "red",
      height: 50,
      width: "100%",
      paddingRight: 20,
    },

    textResultItemList: {
      fontSize: 16,
    },
});

export default styles;