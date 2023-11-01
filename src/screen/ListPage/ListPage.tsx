import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ROOT_ROUTES, ROUTES } from '@navigation/RoutesConstant';

const ListPage = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <View style={styles.flex}>
      <Text>List Page</Text>
      <Button
        title="Go to Settings Page"
        onPress={() => navigation.navigate(ROOT_ROUTES.TAB, { screen: ROUTES.SETTING_PAGE })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default ListPage;
