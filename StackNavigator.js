import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/home/Home.screen';
import Exercises from './src/screens/exercise/Exercises.screen';
import ActiveExerciseScreen from './src/screens/active-exercise/ActiveExercise.screen';
import RestScreen from './src/screens/rest/Rest.screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name='Exercises'
                    component={Exercises}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ActiveExercise'
                    component={ActiveExerciseScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='Rest' component={RestScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});
