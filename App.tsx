import React from 'react';
import { LogBox } from 'react-native';
import AllContexts from './src/context';
import StackNavigator from './src/routes/stack';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <AllContexts>
      <StackNavigator />
    </AllContexts>
  );
};
export default App;
