import React from 'react'
import Catalogue from './src/components/inventary/Catalogue'
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageNissanKicks from './src/components/inventary/MoreInformation/PageNissanKicks';
import PageRenaultLogan from './src/components/inventary/MoreInformation/PageRenaultLogan';
import PageChevroletCaptiva from './src/components/inventary/MoreInformation/PageChevroletCaptiva';
import PageFordExplorer from './src/components/inventary/MoreInformation/PageFordExplorer';

const Stack = createStackNavigator();

const App = () => {
  return (
  <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Catalogo' component = {Catalogue}/>
        <Stack.Screen name = 'Nissan Kicks' component = {PageNissanKicks}/>
        <Stack.Screen name = 'Renault Logan' component = {PageRenaultLogan}/>
        <Stack.Screen name = 'Chevrolet Captiva' component = {PageChevroletCaptiva}/>
        <Stack.Screen name = 'Ford Explorer' component = {PageFordExplorer}/>
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  )
}


export default App
