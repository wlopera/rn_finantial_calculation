import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const { error500, primary200, primary800 } = GlobalStyles.colors;

const ManageExpense = ({ route, navigation }) => {
  const expenseCTX = useContext(ExpensesContext);

  const editedExpeAseId = route.params?.expenseId;
  const isEditing = !!editedExpeAseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Modificar Gasto" : "Agregar Gasto",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCTX.deleteExpense(editedExpeAseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expenseCTX.updateExpense(editedExpeAseId, {
        description: "Prueba De Modificar registro",
        amount: 29.99,
        date: new Date("2022-05-09"),
      });
    } else {
      expenseCTX.addExpense({
        description: "Prueba",
        amount: 19.99,
        date: new Date("2022-05-20"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancelar
        </Button>

        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Modificar" : "Agregar"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    backgroundColor: primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: primary200,
    alignItems: "center",
  },
});
