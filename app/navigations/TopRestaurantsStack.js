import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import TopRestaurans from "../screens/TopRestaurants";

const Stack = createStackNavigator();

const TopRestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurans}
        options={{ title: "Top 5" }}
      />
    </Stack.Navigator>
  );
};

export default TopRestaurantsStack;
