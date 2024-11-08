import { StyleSheet, Text, View } from "react-native";
import { Square } from "./Square";
import { useState } from "react";
import { calculateWinner } from "../utils/boardutils";

export function GameBoard() {
    const [squares, setSquares] = useState(Array(9).fill(""))
    const [player, setPlayer] = useState("X");

    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = player;

        setPlayer(player === "X" ? "O" : "X");
        setSquares(nextSquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Vencedor: ' + winner;
    } else {
        status = 'Proximo Jogador: ' + player;
    }
    
    return <>
    <Text>{status}</Text>
    <View style={styles.wrap}>
        
        <Square value={squares[0]} onPress={() => handleClick(0)} />
        <Square value={squares[1]} onPress={() => handleClick(1)}/>
        <Square value={squares[2]} onPress={() => handleClick(2)}/>
        <Square value={squares[3]} onPress={() => handleClick(3)}/>
        <Square value={squares[4]} onPress={() => handleClick(4)}/>
        <Square value={squares[5]} onPress={() => handleClick(5)}/>
        <Square value={squares[6]} onPress={() => handleClick(6)}/>
        <Square value={squares[7]} onPress={() => handleClick(7)}/>
        <Square value={squares[8]} onPress={() => handleClick(8)}/>

    </View>
    </>
}
const styles = StyleSheet.create({
    wrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
    }
})