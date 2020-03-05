export function BottomTabNavigator() {
	const React = require('react')

	const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs')
	const Tab = createBottomTabNavigator()
	
	const { HomeScreen } = require("../screens/Home")
	const { OtherScreen } = require("../screens/Other")

	return (
		<Tab.Navigator>
			<Tab.Screen
				name = "Home"
				component = {HomeScreen}
			/>

			<Tab.Screen
				name = "Other"
				component = {OtherScreen}
			/>
		</Tab.Navigator>
	)
}