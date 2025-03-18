import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import PostdetailScreen from '../screen/PostdetailScreen';
import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';
import SplashScreen from '../splashscreen/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="postdetails" component={PostdetailScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
