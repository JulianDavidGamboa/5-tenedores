import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Search from "../screens/Search";

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
