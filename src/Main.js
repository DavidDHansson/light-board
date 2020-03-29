import React, { useState } from "react";

// Explanation for layout, indivudel stack controllers will and can be used
// https://reactnavigation.org/docs/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state

// Assets
import { getColor } from "./components/constans";
import { Ionicons } from "@expo/vector-icons";

// Screens
import Home from "./screens/Home/Home";
import Settings from "./screens/Settings/Settings";
import Detail from "./screens/Detail/Detail";

// Navigation 
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Tabs() {
    const { main, mainFade } = getColor()

    const [tabBarOptions] = useState({
        activeTintColor: main,
        inactiveTintColor: mainFade,
    });

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused
                            ? "ios-information-circle"
                            : "ios-information-circle-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "ios-list-box" : "ios-list";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={tabBarOptions}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

function Main() {
    const { main, white } = getColor();

    const [screenOptions] = useState({
        headerStyle: {
            backgroundColor: main,
        },
        headerTintColor: white,
        headerShown: false
    });

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                {/* Tabbar */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Priority Screens */}
                <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.title, headerShown: true })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;