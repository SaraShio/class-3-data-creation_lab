import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/book';

export default function About({navigation}) {
    const [data,setData]=useState();

const addingData()=>{
    console.log
}

    return (
        <View style={styles.container}>
            <Text>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
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
});
