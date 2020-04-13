import React from "react";
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

import { getAsset } from "./../../components/constans";

function HomeElementsBig(props) {
    const navigate = props.navigate
    const minimized = props.minimized;

    if (!minimized) {
        return (
            <TouchableOpacity onPress={() => navigate("Detail", { props: props.item })}>
                <Content item={props.item} minimized={false}/>
            </TouchableOpacity>
        );
    } else {
        return (
            <Content item={props.item} minimized={true}/>
        );
    }
}

function Content(props) {
    const { width, height } = Dimensions.get("window");
    const { id, title, description, content, titleColor, descriptionColor } = props.item;
    const minimized = props.minimized;
    const descriptionTop = ((height / 3) * (minimized ? 1 : 2) - ((height / 3) * (minimized ? 1 : 2)) / 10) - (minimized ? 30 : 10);

    return (
        <View style={styles.container} key={id}>
            <Image
                style={{
                    width: width - 40,
                    height: (height / 3) * (minimized ? 1 : 2),
                    borderRadius: 10,
                    overflow: "hidden"
                }}
                source={{ uri: getAsset(id) }}
                resizeMode={"cover"}
            />
            <Text style={[styles.center, styles.title, { color: titleColor }]}>{title}</Text>
            <Text style={[styles.center, styles.description, { color: descriptionColor, top: descriptionTop }]}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 40
    },
    center: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        fontSize: 30,
        fontWeight: "700"
    },
    description: {
        left: 20,
        right: 20,
        bottom: 20,
        height: 100,
        width: Dimensions.get("window").width - 40
    }
});

export default HomeElementsBig;