export function StackNavigator() {
	const React = require('react')

	const { createStackNavigator, TransitionPresets} = require('@react-navigation/stack')
	const Stack = createStackNavigator()
	
	const { BottomTabNavigator } = require('./BottomTabNavigator')
 	const { SecondScreen } = require("../screens/Second")

	return (
		<Stack.Navigator
			screenOptions = {{
				headerShown: false,
				...TransitionPresets.ScaleFromCenterAndroid
			}}
		>
			<Stack.Screen
				component = {BottomTabNavigator}
				name = "BottomTab"
			/>

			<Stack.Screen
				component = {SecondScreen}
				name = "Second"
				options = {{
					// ...TransitionPresets.ScaleFromCenterAndroid //Transisi bisa ditentukan per screen
				}}
			/>
		</Stack.Navigator>
	)
}