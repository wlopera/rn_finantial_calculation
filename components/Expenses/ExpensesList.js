import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemDate) => <ExpenseItem {...itemDate.item} />;

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
