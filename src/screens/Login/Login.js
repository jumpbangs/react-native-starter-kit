import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginPending } from '../../features/data/userSlice';

import styles from './styles';
import { capitalize } from '@utils/string';

const Login = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.data.userReducer);

  dispatch(loginPending());

  return (
    <View style={styles.flexWrapper}>
      <Text>{capitalize('login')}</Text>
      <Text>{userData}</Text>
    </View>
  );
};

export default Login;
