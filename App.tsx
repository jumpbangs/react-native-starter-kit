import React from 'react';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import RootStack from './src/RootStack';
import { persistor, store } from './src/store/configure';

/**
 * Initialize App
 */
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
