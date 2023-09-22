import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

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
            <TouchableOpacity
                onPress={() => check()}
                style={number == 1 ? styles.btnBlue :
                    number === 2 ? styles.btnRed :
                        styles.btnGreen}>
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
    btnBlue:{
        alignItems:'center',
        backgroundColor:'#633C5DA',
        borderColor: '#63C5Da',
        borderRadius:10,
        borderWidth:1,
        padding
    
    }
});
