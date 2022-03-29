import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStack from './src/navigation/RootStack';
import { store, persistor } from './src/store/configure';

/**
 * Initialize App
 */
const App = () => {
  //Initialize SplashScreen
  React.useEffect(() => {
    SplashScreen.show();
    const timeOut = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
