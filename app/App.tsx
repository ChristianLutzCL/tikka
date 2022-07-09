import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "./app/screens/CreateAccount";
import DartCounter from "./app/screens/DartCounter";
import CreateGame from "./app/screens/CreateGame";
import LogIn from "./app/screens/LogIn";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#0B1120" />
        <Stack.Navigator>
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{
              headerShown: true,
              headerTitle: "Log In",
              headerTransparent: true,
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="DartCounter"
            component={DartCounter}
            options={{
              headerShown: true,
              headerTitle: "Game",
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#0B1120" },
            }}
          />
          <Stack.Screen
            name="CreateGame"
            component={CreateGame}
            options={{
              headerStyle: {
                backgroundColor: "#0B1120",
              },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
