import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
//import React from "react";
//import { NativeBaseProvider, IconButton, Box, Icon, Entypo } from "native-base";
//import { Box, VStack, Switch } from 'native-base';
import { Icon, Button, LinearGradient } from '@rneui/themed';


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
            <View>
                <TouchableOpacity onPress={() => check()}
                    style={number === 1 ? styles.btnBlue :
                        number === 2 ? styles.btnRed :
                            styles.btnGreen}>
                    <Text>Click Here</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />
            </View>
            <View>
            <Button color="secondary">Do not click here.</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',

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