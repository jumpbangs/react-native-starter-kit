import React from 'react';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
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
  // React.useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await RNBootSplash.hide({ fade: true });
  //     console.log('Bootsplash has been hidden successfully');
  //   });
  // }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
