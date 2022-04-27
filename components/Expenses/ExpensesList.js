import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemDate) => (
  <Text>
    <ExpenseItem {...itemDate.item} />
  </Text>
);

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
