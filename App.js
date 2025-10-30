import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import CoursesScreen from './Screens/CourseScreen';
import CalculatorScreen from './Screens/CalculatorScreen';
import ContactScreen from './Screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Courses" component={CoursesScreen} options={{ title: 'Our Courses' }} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Calculate Fees' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact Us' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}