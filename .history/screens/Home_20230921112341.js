import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(navigation) {
    const [number, setNumber] = useState(1);

    const check = () => {

        if (number == 1) {
            console.log("ONE");
        } else if (number == 2) {
            console.log("TWO");
        } else if (number == 3) {
            navigation.push('About');
        }
        setNumber(number + 1);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
