export default function() {
	const React = require('react')

	const { NavigationContainer } = require('@react-navigation/native')
	const { TransitionPresets, createStackNavigator } = require('@react-navigation/stack')

	const Stack = createStackNavigator()

	const { HomeScreen } = require("./sources/screens/Home")
	const { SecondScreen } = require("./sources/screens/Second")

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions = {{
					headerShown: false,
					...TransitionPresets.ScaleFromCenterAndroid
				}}
			>
				<Stack.Screen
					component = {HomeScreen}
					name = "Home"
				/>

				<Stack.Screen
					component = {SecondScreen}
					name = "Second"
					options = {{
						// ...TransitionPresets.ScaleFromCenterAndroid //Transisi bisa ditentukan per screen
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
