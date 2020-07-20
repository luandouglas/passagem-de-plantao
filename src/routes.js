import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from './views/Home';
import Notifications from './views/Notifications';
import Plantao from './views/Plantao';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Plantao" component={Plantao} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    primary: 'rgb(255, 45, 85)',
  },
};
