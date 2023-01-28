import React, {useEffect, useCallback} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/es/integration/react';

import configureStore from './store';
import Home from './features/home/containers';
import Navigator from './navigation';
import Message from '../src/components/FlashMessage';

const {persistor, store} = configureStore();

const Entrypoint = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider>
            {/* <Home /> */}
            <Navigator />
            <Message />
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default Entrypoint;
