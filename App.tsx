import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStack from './src/RootStack';
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
          <RootStack />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
