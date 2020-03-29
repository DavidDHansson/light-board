import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Detail({ route, navigation}) {
    const { id } = route.params;
    const { description } = route.params;

    return (
        <View style={styles.container}>
            <Text>Detail view {id}</Text>
            <Text>{description}</Text>
        </View>
    );
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});