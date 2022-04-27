import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import ExpensesList from "./ExpensesList";
import ExpenseSummary from "./ExpenseSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Un par de zapatos",
    amount: 59.99,
    date: new Date("2022-04-16"),
  },
  {
    id: "e2",
    description: "Un par de pantalones",
    amount: 89.29,
    date: new Date("2022-04-20"),
  },
  {
    id: "e3",
    description: "Bananas y manzanas",
    amount: 5.99,
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
    date: new Date("2022-04-20"),
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
    date: new Date("2022-04-26"),
  },
  {
    id: "e10",
    description: "Otro Libro",
    amount: 18.59,
    date: new Date("2022-04-27"),
  },
];
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
