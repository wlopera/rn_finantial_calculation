import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Ultimos 7 días" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
