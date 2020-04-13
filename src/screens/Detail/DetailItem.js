import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { getColor } from "./../../components/constans";

function DetailItem(props) {
    const { title, description, url } = props.item;

    function eventHandler() {
        // fetch(url);
    }

    return (
        <View style={[styles.container, props.spacer && (styles.spacer)]}>
            <View style={styles.wrapper}>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => eventHandler()}>
                        <Text style={styles.buttonText}>BRUG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 10,
        width: Dimensions.get("window").width - 40
    },
    spacer: {
        borderBottomWidth: 1,
        borderBottomColor: getColor().gray, 
    },
    wrapper: {
        display: "flex",
        flexDirection: "row"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        width: (Dimensions.get("window").width - 40) * 0.75,
    },
    buttonView: {
        width: (Dimensions.get("window").width - 40) / 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: getColor().lightGray,
    },
    buttonText: {
        color: "rgb(54, 116, 254)",
        fontWeight: "600"
    },
    title: {
        fontSize: 18,
        color: "#000",
        paddingBottom: 4
    },
    description: {
        fontSize: 12,
        color: getColor().gray,
        paddingBottom: 10
    }
});

export default DetailItem;