import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    value: string,
    onPress: () => void
}
export function Square({value, onPress}: Props){
    return <TouchableOpacity onPress={onPress}
    style={[styles.square]}> 
    <Text>{value}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    square: {
        height: 100,
        width: 100,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})