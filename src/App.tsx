import React from 'react';
import {StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from './store';
import LoginScreen from './modules/auth-module/containers/auth';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {store, persistor} = configureStore();
export {store};

const App = () => {
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('dark-content');

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LoginScreen />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
