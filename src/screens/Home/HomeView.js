import React from "react";
import { View, Text, StyleSheet, Button, ScrollView, Dimensions, SafeAreaView } from "react-native";

import Element from "./HomeElementBig";
import { getMonth, getDayName } from "./../../components/constans";

function HomeView({ navigation }) {
    const mock = [
        {
            id: 0,
            title: "Bæredygtig energi",
            description: "Lad Danmarks energi produktion ha' en positiv indflydelse på din hverdag",
            titleColor: "#fff",
            descriptionColor: "#fff",
            content: [
                {
                    title: "Vindmølle energi produceret",
                    description: "Den mængde energi produceret i dag i kW/h",
                    url: "192.182.21.2/mode=1"
                },
                {
                    title: "Solcelle energi produceret",
                    description: "Den mængde energi produceret i dag i kW/h",
                    url: "192.182.21.2/mode=2"
                }
            ]
        },
        {
            id: 1,
            title: "Finans Pakken",
            description: "Hold dig opdateret på kurser som \nSPY500, AAPL, TSLA, BTC og mere.",
            titleColor: "#fff",
            descriptionColor: "#fff",
            content: [
                {
                    title: "SPY500",
                    description: "USA's 500 index",
                    url: "192.182.21.2/mode=3"
                },
                {
                    title: "AAPL",
                    description: "Tech giganten Apple",
                    url: "192.182.21.2/mode=4"
                },
                {
                    title: "TSLA",
                    description: "Bil producent Tesla med Elon Musk bag sig",
                    url: "192.182.21.2/mode=5"
                },
                {
                    title: "BTC",
                    description: "Den mest kendte kryptovaluta Bitcoin",
                    url: "192.182.21.2/mode=6"
                }
            ]
        }
    ]

    return (
        <SafeAreaView style={styles.back}>
            <ScrollView contentContainerStyle={styles.container}>
                <TopTitle />
                <View>
                    {mock.map(item => <Element navigate={navigation.navigate} item={item} minimized={false} key={item.id} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function TopTitle() {
    const dayName = getDayName().toLocaleUpperCase();
    const month = getMonth().toLocaleUpperCase();
    const day = new Date().getDate();

    return (
        <View style={styles.topContainer}>
            <Text style={styles.subTitle}>{`${dayName} ${day}. ${month}`}</Text>
            <Text style={styles.title}>I dag</Text>
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
    },
    topContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: Dimensions.get("window").width - 40,
        paddingTop: 40
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