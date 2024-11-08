import { Button, StyleSheet, Text, View } from 'react-native';
import { GameBoard } from './components/GameBoard';
import { Square } from './components/Square';
import { useState } from 'react';

export default function Game() {
  const [key, setKey] = useState(0);
  const [xJoga, setXJoga] = useState(true) 
  const restartGame = () => {
    setKey(key => key + 1);
  }
  

  return (
    <View style={styles.container}>
      <Text>Jogo da velha</Text>
      
      <GameBoard key={key} />
      <Button title="Recomeçar o jogo" onPress={restartGame} />
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
