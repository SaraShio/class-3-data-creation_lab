import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
//import React from "react";
//import { NativeBaseProvider, IconButton, Box, Icon, Entypo } from "native-base";
import { Button, VStack } from 'native-base';


export default function Home({ navigation }) {

    const [number, setNumber] = useState(1);

    const check = () => {

        if (number == 1) {
            console.log("ONE")
        } else if (number == 2) {
            console.log("TWO")
        } else if (number == 3) {
            navigation.push('About')
        }
        setNumber(number + 1)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => check()}
                style={number === 1 ? styles.btnBlue :
                    number === 2 ? styles.btnRed :
                        styles.btnGreen}>
                <Text>Click me</Text>
            </TouchableOpacity>
            <Box alignSelf="center" // bg="primary.500"
                _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "#FDe2ed",
                    padding: '1em',
                    letterSpacing: "lg"
                }} bg={["#000000"]}
            >
                What is your favourite kind of ice cream?
            </Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#800000',
        borderColor: '#800000',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#00563B',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    }
});