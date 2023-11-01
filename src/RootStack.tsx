/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainRoutes from '@navigation/MainRoutes';
import { ROOT_ROUTES } from '@navigation/RoutesConstant';
import TabRoutes from '@navigation/TabRoutes';

const Stack = createStackNavigator();

/**
 *
 * @returns
 */
const App = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROOT_ROUTES.TAB} component={TabRoutes} />
      <Stack.Screen name={ROOT_ROUTES.MAIN} component={MainRoutes} />
    </Stack.Navigator>
  );
};

export default App;
