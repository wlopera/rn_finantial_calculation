import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screen/ManageExpense";
import AllExpenses from "./screen/AllExpenses";
import RecentExpenses from "./screen/RecentExpenses";

const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottonTabs.Navigator>
      <BottonTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottonTabs.Screen name="AllExpense" component={AllExpenses} />
    </BottonTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
