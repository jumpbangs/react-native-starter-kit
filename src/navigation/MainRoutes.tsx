import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from './RoutesConstant';
import HomePage from '@screen/HomePage';
import ListPage from '@screen/ListPage';

const Stack = createNativeStackNavigator();

const NO_HEADER_OPTIONS = {
  headerShown: false,
};

const MainRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomePage} options={NO_HEADER_OPTIONS} />
      <Stack.Screen name={ROUTES.LIST_PAGE} component={ListPage} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
