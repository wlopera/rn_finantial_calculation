import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ExpensesContextProvider, {
  ExpensesContext,
} from "../store/expenses-context";

const AllExpenses = () => {
  const expenseCTX = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenseCTX.expenses}
      expensesPeriod="Total"
      fallbackText="No existen registros de gastos!"
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
