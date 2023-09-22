import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import About from './screens/About';

export default function App() {
  const Stack = createNativeStackNavigator();

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
                                    <Text style={styles.bookTitle}>{b.title}</Text>
                                    {
                                        b.authors && b.authors.map((a, ind) => {
                                            return (
                                                <Text key={ind} style={styles.authorText}>{a}</Text>
                                            )
                                        })
                                    }
                                </View>
                            )
                        }
                    })
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        elevation: 3, // This will give a shadow effect for Android
        shadowOffset: { width: 0, height: 2 }, // These lines are for shadow effect for iOS
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
});