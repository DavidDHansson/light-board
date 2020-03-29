import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeScene({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>I"m HomeScene</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Detail", {
                    id: Math.random(),
                    title: "Finans Pakken",
                    description: "Hold dig opdateret på kurser som SPY500, Gold, BTC og mere."
                })}
            />
        </View>
    );
}

export default HomeScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});