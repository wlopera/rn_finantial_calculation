import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const ExpenseSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 18,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
