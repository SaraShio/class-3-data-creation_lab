import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from "react";
import { NativeBaseProvider, IconButton, Box, Icon, Entypo } from "native-base";

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
           <Text>
           <Box alignItems="center">
                <IconButton icon={<Icon as={Entypo} name="emoji-happy" />} borderRadius="full" _icon={{
                    color: "orange.500",
                    size: "md"
                }} _hover={{
                    bg: "orange.600:alpha.20"
                }} _pressed={{
                    bg: "orange.600:alpha.20",
                    _icon: {
                        name: "emoji-flirt"
                    },
                    _ios: {
                        _icon: {
                            size: "2xl"
                        }
                    }
                }} _ios={{
                    _icon: {
                        size: "2xl"
                    }
                }} />
            </Box>;
           </Text>
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
