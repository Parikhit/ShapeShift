import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home.screen';
import WorkoutScreen from './src/screens/Workout.screen';
import FitScreen from './src/screens/Fit.screen';
import RestScreen from './src/screens/Rest.screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name='Workout'
                    component={WorkoutScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='Fit' component={FitScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Rest' component={RestScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});
