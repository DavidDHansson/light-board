import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeView({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>I"m HomeView</Text>
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

export default HomeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});