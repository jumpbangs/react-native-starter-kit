import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Home Page
 *
 * @returns Home Page component
 */
const HomePage = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <View style={styles.flex}>
      <Text>Home Page </Text>

      <Button title="Go to List Page" onPress={() => navigation.push('ListPage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
