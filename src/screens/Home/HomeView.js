import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView, Dimensions, SafeAreaView } from "react-native";

import Element from "./HomeElementBig";
import { getHomeContent, getMonth, getDayName } from "./../../components/constans";

function HomeView({ navigation }) {
    const [data, setData] = useState([])

    useEffect(() => {
        // getHomeContent().then(data => setData(data))
        getHomeContent().then(data => { setData(data); console.log(data)})
    }, []);

    return (
        <SafeAreaView style={styles.back}>
            <ScrollView contentContainerStyle={styles.container}>
                <TopTitle loading={data.length === 0} />
                <View>
                    {data.map(item => <Element navigate={navigation.navigate} data={data} item={item} minimized={false} key={item.id} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function TopTitle(props) {
    const dayName = getDayName().toLocaleUpperCase();
    const month = getMonth().toLocaleUpperCase();
    const day = new Date().getDate();

    if (!props.loading) {
        return (
            <View style={styles.topContainer}>
                <Text style={styles.subTitle}>{`${dayName} ${day}. ${month}`}</Text>
                <Text style={styles.title}>I dag</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.topContainer}>
                <Text style={styles.subTitle}>{`${dayName} ${day}. ${month}`}</Text>
                <Text style={styles.title}>Indlæser</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    topContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: Dimensions.get("window").width - 40,
        paddingTop: 40,
    },
    title: {
        color: "#000",
        fontWeight: "700",
        fontSize: 30
    },
    subTitle: {
        color: "rgb(120, 120, 120)",
        fontWeight: "700",
        fontSize: 18
    },
    back: {
        backgroundColor: "#fff",
    }
});

export default HomeView;