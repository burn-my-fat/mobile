/** @format */

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {name as appName} from './app.json';

const App = () => (
  <View style={{ flex: 1 }}>
    <Text>Burn My Fat!</Text>
  </View>
)

AppRegistry.registerComponent(appName, () => App);
