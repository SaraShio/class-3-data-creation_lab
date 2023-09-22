import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
//import React from "react";
//import { NativeBaseProvider, IconButton, Box, Icon, Entypo } from "native-base";
//import { Box, VStack, Switch } from 'native-base';
import { Icon, Button, LinearGradient, Stack, Avatar } from '@rneui/themed';


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
            <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
            />

            <Button
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                    colors: ["#FF9800", "#F44336"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
            >
                Linear Gradient
            </Button>

            <Stack row spacing={4}>
                <Avatar
                    size={32}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                />
                <Avatar
                    size={32}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
                />
            /</Stack>
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
