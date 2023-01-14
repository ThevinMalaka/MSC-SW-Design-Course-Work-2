import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './NavigationRootStack';
import {setContainer} from './NavigationService';

const AppNavigator = props => {
  const navigationRef = useRef();

  useEffect(() => {
    setContainer(navigationRef);
  }, []);

  return (
    <NavigationContainer
      // initialState={initialState}
      ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
