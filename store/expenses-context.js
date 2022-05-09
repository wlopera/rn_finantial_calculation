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
      return state.filter((expense) => expense.id !== action.payload.id);
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
