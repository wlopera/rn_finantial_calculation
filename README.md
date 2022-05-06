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


