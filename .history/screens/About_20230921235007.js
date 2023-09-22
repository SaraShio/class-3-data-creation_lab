import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { bookStore } from '../data/book';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@rneui/themed';




export default function About({ navigation }) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Learn about books</Text>
            <View style={styles.main}>
                <Button title="Click for more information" onPress={() => addingData()} />
                {
                    data && data.books.map((b, index) => {
                        if (b.category.toLowerCase() == 'java') {
                            return (
                                <View key={index} style={styles.bookContainer}>
                                    <Text style={styles.bookTitle}>Book Title: {b.title}</Text>
                                    {
                                        b.authors && b.authors.map((a, ind) => {
                                            return (
                                                <Text key={ind} style={styles.authorText}>Author: {a}</Text>
                                            )
                                        })
                                    }
                                </View>
                            )
                        }
                    })
                }

                <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Home')}>
               
                    <Text style={styles.buttonText}>Go to Home</Text>
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='white'
                        style={styles.iconStyle} 
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#677DB7',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    main: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    bookContainer: {
        marginBottom: 16,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    authorText: {
        fontSize: 16,
        marginLeft: 8,
        color: '#555',
    },
    customButton:{
        flexDirection: 'row', 
        alignItems: 'center',  
        paddingVertical: 10,  
        paddingHorizontal: 20,
        backgroundColor: '#677DB7', 
        borderRadius: 5,  
        marginBottom: 4
    },
    iconStyle: {
        marginRight: 10,  
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
});