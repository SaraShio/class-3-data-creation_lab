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
            <View >
                <Icon style={styles.icon}
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => check()}
                    style={number === 1 ? styles.btnBlue :
                        number === 2 ? styles.btnPurple :
                            styles.btnBrown}>
                    <Text>Click Here</Text>
                </TouchableOpacity>
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
        backgroundColor: '#E1E3F4',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#677DB7',
        borderColor: '#677DB7',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnPurple: {
        alignItems: 'center',
        backgroundColor: '#677DB7',
        borderColor: '#677DB7',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnBrown: {
        alignItems: 'center',
        backgroundColor: '#322A26',
        borderColor: '#322A26',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    icon: {
        border: '1px solid black',
        backgroundColor: 'red'
    }
});
