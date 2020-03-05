export default function() {
	const React = require('react')
	const { useState } = React

	const { NavigationContainer } = require('@react-navigation/native')

	const { StackNavigator } = require('./navigators/StackNavigator')


	const [number, setNumber] = useState(0)

	
	const { DataContext } = require('./refs/contexts')


	return (
		<NavigationContainer>
			<DataContext.Provider
				value = {{
					number,
					setNumber
				}}
			>
				<StackNavigator />
			</DataContext.Provider>
		</NavigationContainer>
	)
}