import React from 'react';

// Navigation
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// Screens 
import Detail from "./../Detail/Detail";
import SettingsView from "./SettingsView";

function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsView} />
            <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.title, headerShown: true })} />
        </Stack.Navigator>
    );
}

export default SettingsStack;