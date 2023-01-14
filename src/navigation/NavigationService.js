import * as React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';

export let navigationRef = React.createRef();
export const isMountedRef = React.createRef();

export function navigate(name, params = {}) {
  console.log('navigatenavigate', name, params);
  console.log('navigationRef', navigationRef);
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  CommonActions.goBack();
}

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export const setContainer = navigatorRef => {
  navigationRef = navigatorRef;
};
