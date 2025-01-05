import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyNotification from './src/screens/MyNotification';
import HomeScreen from './src/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyActivityIndicator from './src/screens/MyActivityIndicator';
import SplashScreen from 'react-native-splash-screen';
import AboutScreen from './src/screens/AboutScreen';
import Mission from './src/screens/Mission';
import Vision from './src/screens/Vision';
import Icon from "react-native-vector-icons/Entypo"
import Parent from './src/screens/contextAPI/Parent';
import messaging from '@react-native-firebase/messaging';

// const Stack = createNativeStackNavigator();

const AboutNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AboutScreen}
        name="   About"
        options={{
          headerLeft: () => {
            return (
              <Icon 
                name="menu"
                color="black"
                size={26}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            )
          }
        }}
      />
      <Stack.Screen
        component={Mission}
        name="Mission"
      />
      <Stack.Screen
        component={Vision}
        name="Vision"
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    SplashScreen.hide();
    getDeviceToken();
  }, []);

  const getDeviceToken = async () => {
    console.log("getDeviceToken calling...");

    const token = await messaging().getToken();
    console.log(token);
  }

  return (
    // <MyNotification />
    // <MyActivityIndicator />

    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen
          component={HomeScreen}
          name='Home'
          options={{
            headerShown: true
          }}
        />
        <Drawer.Screen
          component={MyNotification}
          name='Notification'
          options={{
            headerShown: true
          }}
        />
        <Drawer.Screen
          component={AboutNav}
          name="About"
        />
        <Drawer.Screen
          component={Parent}
          name='Counter'
          options={{
            headerShown: true
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App