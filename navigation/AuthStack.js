import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
		<Stack.Navigator initialRouteName={'Login'}>
			<Stack.Screen name="Login" component={Login} options={{header: () => null}}/>
			<Stack.Screen name="Onboarding" options={{header: () => null}} component={OnboardingScreen}/>
			<Stack.Screen name="Signup"  component={SignupScreen} options={({navigation}) => ({
				title:'',
				headerStyle: {
					backgroundColor:'#f2f2f2',
					shadowColor:'#f2f2f2',
					elevation:0
				}
			})}/>
		</Stack.Navigator>
  );
};

export default AuthStack;
