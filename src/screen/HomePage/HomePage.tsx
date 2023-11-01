import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors } from '@styles/Colors';

import { ROOT_ROUTES, ROUTES } from '@navigation/RoutesConstant';

/**
 * Home Page
 *
 * @returns Home Page component
 */
const HomePage = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <View style={styles.flex}>
      <StatusBar animated={true} backgroundColor={Colors.themeGrey} barStyle={'default'} />
      <Text>Home Page </Text>
      <View style={styles.container}>
        <Button
          title="Go to List Page"
          onPress={() => navigation.navigate(ROOT_ROUTES.MAIN, { screen: ROUTES.LIST_PAGE })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
  },
});

export default HomePage;
