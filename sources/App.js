export default function() {
	const React = require('react')

	const { NavigationContainer } = require('@react-navigation/native')

	const { StackNavigator } = require('./navigators/StackNavigator')

	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	)
}
