import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { capitalize } from '@utils/string';

const Login = () => {
  console.log('Login');
  return (
    <View style={styles.flexWrapper}>
      <Text>{capitalize('login')}</Text>
    </View>
  );
};

export default Login;
