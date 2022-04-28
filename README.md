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




