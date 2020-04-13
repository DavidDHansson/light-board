import React from 'react';

// Navigation
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// Screens 
import Detail from "./../Detail/Detail";
import HomeView from "./HomeView";

import { getColor } from "./../../components/constans";

function HomeStack() {
    const { main } = getColor();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({
                title: route.params.title,
                headerShown: true,
                headerTintColor: main,
                headerTitleStyle: {
                    color: "#000"
                }
            })} />
        </Stack.Navigator>
    );
}

export default HomeStack;