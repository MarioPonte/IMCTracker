import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from 'react-native';
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

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        let weightFormat = weight.replace(",",".")

        if(((weightFormat/(heightFormat*heightFormat)).toFixed(2))<18.5) setImcCondition("Está abaixo do peso"); 
        else if(((weightFormat/(heightFormat*heightFormat)).toFixed(2))<25) setImcCondition("Está com peso normal");
        else if(((weightFormat/(heightFormat*heightFormat)).toFixed(2))<30) setImcCondition("Está com sobrepeso");
        else if(((weightFormat/(heightFormat*heightFormat)).toFixed(2))<35) setImcCondition("Está com obesidade");
        else if(((weightFormat/(heightFormat*heightFormat)).toFixed(2))<40) setImcCondition("Está com obesidade severa");
        else if(((weightFormat/(heightFormat*heightFormat)).toFixed(2))>=40) setImcCondition("Está com obesidade morbida");

        return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMessage("* Campo obrigatório")
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setImcCondition(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
    }

    return (
        <Pressable style={styles.formContext} onPress={Keyboard.dismiss}>
            <View style={styles.form}>
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
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} imcCondition={imcCondition} />
        </Pressable>
    )
}