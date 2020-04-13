import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Top from "./../Home/HomeElementBig";

function Detail({ route, navigation }) {
    const { id, description, title, content } = route.params.props;

    return (
        <View style={{ backgroundColor: "#fff" }}>
            <ScrollView contentContainerStyle={styles.container}>        
                <Top item={route.params.props} minimized={true}/>

            </ScrollView>
        </View>
    );
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});