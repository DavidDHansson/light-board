import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function SettingsScene({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>I'm SettingsScene</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Detail", {
                    id: Math.random(),
                    title: "Test",
                    description: "Test"
                })}
            />
        </View>
    );
}

export default SettingsScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});