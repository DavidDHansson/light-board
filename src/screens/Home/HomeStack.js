import React from 'react';

// Navigation
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// Screens 
import Detail from "./../Detail/Detail";
import HomeView from "./HomeView";

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeView} />
            <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.title, headerShown: true })} />
        </Stack.Navigator>
    );
}

export default HomeStack;