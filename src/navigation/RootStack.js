import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import UserPage from '../screens/User';
import { ScreenRoutes, NO_HEADER_OPTION } from './NavigationConstants';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name={ScreenRoutes.LOGIN} options={NO_HEADER_OPTION} />
      <Stack.Screen component={UserPage} options={NO_HEADER_OPTION} name={ScreenRoutes.USER_PAGE} />
    </Stack.Navigator>
  );
};

export default RootStack;
