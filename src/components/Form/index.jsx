import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList, ScrollView, SafeAreaView } from 'react-native';
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [imcCondition, setImcCondition] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        let weightFormat = weight.replace(",",".")

        let totalImc = ((weightFormat/(heightFormat*heightFormat)).toFixed(2));

        if(totalImc<18.5) setImcCondition("Está abaixo do peso"); 
        else if(totalImc<25) setImcCondition("Está com peso normal");
        else if(totalImc<30) setImcCondition("Está com sobrepeso");
        else if(totalImc<35) setImcCondition("Está com obesidade");
        else if(totalImc<40) setImcCondition("Está com obesidade severa");
        else if(totalImc>=40) setImcCondition("Está com obesidade morbida");

        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc }]);
        setImc(totalImc);
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMessage("* Campo obrigatório")
        }
    }

    function validationImc(){
        console.log(imcList)
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }else{
            verificationImc()
            setImc(null)
            setImcCondition(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
        }
    }

    return (
        <View style={styles.formContext}>
            { imc == null ? 
                <Pressable style={styles.form} onPress={Keyboard.dismiss}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.formInput} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric" />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.formInput} onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric" />

                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()} title={textButton}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                    {/*<Button onPress={() => validationImc()} title={textButton} />*/}
                </Pressable>
            : 
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} imcCondition={imcCondition} />
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()} title={textButton}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

            <SafeAreaView style={styles.container}>
                <FlatList style={styles.listImcs} showsVerticalScrollIndicator={false} data={imcList.reverse()} renderItem={({item}) => {
                    return (
                            <Text style={styles.resultImcItem}>
                                <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                                {item.imc}
                            </Text>
                    )
                }}
                keyExtractor={item => item.id}
                />
            </SafeAreaView>
            
        </View>
    )
}