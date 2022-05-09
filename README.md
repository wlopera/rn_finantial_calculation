# rn_finantial_calculation
React-Native App Gastos Financieros

## NAVEGACION 
* Agregar Librerias: https://reactnavigation.org/docs/getting-started/
   - npm install @react-navigation/native
   - expo install react-native-screens react-native-safe-area-context
   - npm install @react-navigation/native-stack (Native Stack)
   - npm install @react-navigation/bottom-tabs(Bottom Tabs)
 
## Navegación inicial
![Captura](https://user-images.githubusercontent.com/7141537/165587121-1e99cbb2-2333-4e29-8714-eebff5920593.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/165587118-104f64f0-8a9d-4c9a-85fc-92729a373682.PNG)

## Navegación - configurar - estilos
![Captura](https://user-images.githubusercontent.com/7141537/165591975-04b16f75-9c3a-458b-aefc-50b2424c5e20.PNG)

## Lista de items - estilos
![Captura](https://user-images.githubusercontent.com/7141537/165639026-b9b8e14f-f57b-42fe-a85e-1d539a1c1149.PNG)

## Formato fecha y redondeo de montos
* Se agrego un utilitario: util.js
````
export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
````
![Captura](https://user-images.githubusercontent.com/7141537/165641725-30eb4551-9727-4f6b-aaf7-92112791435c.PNG)

## Agregar IconButton para agregar o modificar registro 
![image](https://user-images.githubusercontent.com/7141537/165787932-25010967-ff59-4b42-9263-239d47ba9466.png)

## Realizar navegación entre pantallas mediante programación
* El Objeto screenOptions 
```
 <BottonTabs.Navigator
      screenOptions={{
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
              onPress={() => {}}
            />
          );
        },
      }}
    >
```

* Agregar función que retorna un objeto en el Objeto screenOptions 
```
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
```
![Captura](https://user-images.githubusercontent.com/7141537/165791414-aa2fb578-d80b-420c-a3c0-04f8b20f0d94.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/165791410-5214d97c-d492-44b5-9ae2-099a72e8e74c.PNG)


## Agregar button,js para agregar o modificar registro
```
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});

```

## Configurar pantalla de Administración de Gastos
 * Agregar tipos de botones IconButton y Button
 * Estilos
 * Boton Cancelar (navigation.goBack())

![Captura](https://user-images.githubusercontent.com/7141537/167225281-ec70f203-9e59-40ff-9421-2299cf8dcbd7.PNG)


## Uso de Contexto de React
```
import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Un par de zapatos",
    amount: 59,
    date: new Date("2022-04-16"),
  },
  {
    id: "e2",
    description: "Un par de pantalones",
    amount: 89.5,
    date: new Date("2022-04-20"),
  },
  {
    id: "e3",
    description: "Bananas y manzanas",
    amount: 5.9,
    date: new Date("2022-04-25"),
  },
  {
    id: "e4",
    description: "Un Libro",
    amount: 14.99,
    date: new Date("2022-04-26"),
  },
  {
    id: "e5",
    description: "Otro Libro",
    amount: 18.59,
    date: new Date("2022-04-27"),
  },
  {
    id: "e6",
    description: "Un par de zapatos",
    amount: 59.99,
    date: new Date("2022-04-16"),
  },
  {
    id: "e7",
    description: "Un par de pantalones",
    amount: 89.29,
    date: new Date("2022-05-03"),
  },
  {
    id: "e8",
    description: "Bananas y manzanas",
    amount: 5.99,
    date: new Date("2022-04-25"),
  },
  {
    id: "e9",
    description: "Un Libro",
    amount: 14.99,
    date: new Date("2022-05-04"),
  },
  {
    id: "e10",
    description: "Otro Libro",
    amount: 18.59,
    date: new Date("2022-05-05"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ id, ...action.payload }, ...state];

    case "UPDATE":
      const updatebleExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatebleExpense = state[updatebleExpenseIndex];
      const updatedItem = { ...updatebleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatebleExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  // Reductor: Primer Parametro, Data Inicial: Segundo parametro
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
```

## Consumir el Contexto
```
import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expenseCTX = useContext(ExpensesContext);

  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = expenseCTX.expenses.filter((expense) => {
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Ultimos 7 días"
      fallbackText="No existen registros para los últimos 7 días"
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
```
## Salida final
![Captura](https://user-images.githubusercontent.com/7141537/167504473-dc7001e4-46f9-43bf-aa4a-71f9855e5108.PNG)




