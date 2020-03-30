import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function SettingsView({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>I'm SettingsView</Text>
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

export default SettingsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});