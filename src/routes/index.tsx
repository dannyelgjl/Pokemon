import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { ROUTES_NAME } from './constants/routes-name';

const { Navigator, Screen } = createStackNavigator();


const Routes = () => (
  <Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Screen name={ROUTES_NAME.HOME} component={Home} />
  </Navigator>
);

export default Routes;