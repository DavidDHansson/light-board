import React, { useState } from "react";

// Explanation for layout, individuel stack controllers will and can be used
// https://reactnavigation.org/docs/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state


// TODO: color options on the stacks

// Assets
import { getColor } from "./components/constans";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeStack from "./screens/Home/HomeStack";
import SettingsStack from "./screens/Settings/SettingsStack";

// Navigation 
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Main() {
    const { main, white, mainFade } = getColor();

    const [tabBarOptions] = useState({
        activeTintColor: main,
        inactiveTintColor: mainFade,
    });

    return (
        <NavigationContainer>
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
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Main;