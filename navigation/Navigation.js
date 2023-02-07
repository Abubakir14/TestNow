import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../components/Home/HomeScreen';
import AddTodoInput from '../components/AddTodoScreen/AddTodo';
import Loading from '../components/LoadingPage/Loading';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => SetIsLoading(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="AddTask"
          component={AddTodoInput}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
