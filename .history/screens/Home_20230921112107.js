import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function Home() {
    const [number, setNumber] = useState(1);
    const [color, setColor] = useState("red");
  
    const router = useRouter();
  
    const check = () => {
      console.log("clicked");
      if (number == 1) {
        console.log("ONE");
        setColor("blue");
      } else if (number == 2) {
        console.log("TWO");
        setColor("green");
      } else if (number == 3) {
        router.push('/dashboard');
      }
      setNumber(number + 1);
    }
  
    return (
      <>
        <main className={`${styles.main}`}>
          <button onClick={() => check()} style={{ backgroundColor: color }}>Click me!</button>
        </main>
      </>
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
