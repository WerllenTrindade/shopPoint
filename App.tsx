// import "react-native-gesture-handler";
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import {NavigationContainer} from '@react-navigation/native';
import {RouterInitial} from './src/router/Stack.routes';
// import { RouterInitial } from "./src/router/Stack.routes";

function App() {
  const query = new QueryClient();

  return (
    <SafeAreaView style={{flex: 1}}>
      <QueryClientProvider client={query}>
        <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
          <RouterInitial />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}
export default App;
