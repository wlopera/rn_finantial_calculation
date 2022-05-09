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
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Ultimos 7 días" />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
