import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Provider from '../context/Provider';


import Home from '../Pages/Home';
import Detail from '../Pages/Detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (

    <Provider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1D1E1C',
          tabBarInactiveTintColor: '#979797',
          tabBarStyle: {
            borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", height: 68, shadowColor: "#000",
          },
          tabBarLabelStyle: { bottom: 10 },
        }}>
          <Tab.Screen name="Comics" component={DetailStack} />
          {/* <Tab.Screen name="Settings" component={Settings} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
};
export default Navigation;
