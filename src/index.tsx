import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/theme/theme';
import { SafeAreaView } from './styles/styleGlobal/styles';

const App = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  </NavigationContainer>
);

export default App;