import React from 'react';
import { Home, Settings } from 'react-native-feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@styles/Colors';

import { ROUTES } from '@navigation/RoutesConstant';
import HomePage from '@screen/HomePage';
import SettingPage from '@screen/SettingPage';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomePage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            return <Home stroke={Colors.black} />;
          },
        }}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate(ROUTES.HOME);
          },
        })}
      />
      <Tab.Screen
        name={ROUTES.SETTING_PAGE}
        component={SettingPage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Settings stroke={Colors.black} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate(ROUTES.SETTING_PAGE);
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
