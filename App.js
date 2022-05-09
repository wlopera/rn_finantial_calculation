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
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();
const { primary500, accent500 } = GlobalStyles.colors;

const ExpensesOverview = () => {
  return (
    <BottonTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: primary500 },
        tabBarActiveTintColor: { backgroundColor: accent500 },
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon="add"
              color={tintColor}
              size={24}
              onPress={() => navigation.navigate("ManageExpense")}
            />
          );
        },
      })}
    >
      <BottonTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Gasto Reciente",
          tabBarLabel: "Reciente",
          tabBarLabelStyle: { color: "yellow", fontSize: 14 },
          tabBarIcon: (color, size) => (
            <Ionicons name="hourglass" color="white" size={24} />
          ),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarActiveBackgroundColor: "red",
          tabBarInactiveBackgroundColor: primary500,
        }}
      />
      <BottonTabs.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          title: "Todos los Gasto",
          tabBarLabel: "Gastos",
          tabBarLabelStyle: { color: "yellow", fontSize: 14 },
          tabBarIcon: (color, size) => (
            <Ionicons name="calendar" color="white" size={24} />
          ),
          tabBarActiveBackgroundColor: "red",
          tabBarInactiveBackgroundColor: primary500,
        }}
      />
    </BottonTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
