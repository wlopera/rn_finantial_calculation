import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from "./constants/style";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  const { primary500, accent500 } = GlobalStyles.colors;

  return (
    <BottonTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: primary500 },
        tabBarActiveTintColor: { backgroundColor: accent500 },
      }}
    >
      <BottonTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Gasto Reciente",
          tabBarLabel: "Reciente",
          tabBarIcon: (color, size) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottonTabs.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          title: "Todos los Gasto",
          tabBarLabel: "Gastos",
          tabBarIcon: (color, size) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottonTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
