import React from 'react';
import { Provider } from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStack from './src/RootStack';
import { store, persistor } from './src/store/configure';

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
