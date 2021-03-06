import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Account from "../screens/Account";

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
