import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/book';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function About({ navigation }) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }

    return (
        <View style={styles.container}>
            <Text>Learn about books</Text>
            <View  style={styles.main}>
            <Button title="Show data" onPress={() => addingData()} />
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == 'java') {
                        return (
                            <View key={index} >
                                <Text style={styles.text}>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <View key={ind}>
                                                <Text style={styles.text}>{a}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }
                })
            }
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E3F4',
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontWeight:'600'
    },
    main:{
        
    }
});
