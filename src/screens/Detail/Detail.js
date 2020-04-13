import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Top from "./../Home/HomeElementBig";
import Item from "./DetailItem";

function Detail({ route, navigation }) {
    const { id, description, title, content } = route.params.props;

    return (
        <View style={{ backgroundColor: "#fff" }}>
            <ScrollView contentContainerStyle={styles.container}>        
                <Top item={route.params.props} minimized={true}/>
                {content.map((item, index) => <Item item={item} spacer={content.length !== index + 1} key={index}/> )}
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
        height: Dimensions.get("window").height
    },
});