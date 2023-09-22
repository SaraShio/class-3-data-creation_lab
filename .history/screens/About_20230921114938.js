import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/book';


export default function Dashboard() {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }

    return (
        <main className={`${styles.main}`}>
            Welcome to the dashboard
            <button onClick={() => addingData()}>Show Data</button>

            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == 'java') {
                        return (
                            <div key={index}>
                                <h1>{b.title}</h1>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <div key={ind}>
                                                {a}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                })
            }
        </main>
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
