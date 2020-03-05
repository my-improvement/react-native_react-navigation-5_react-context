export function HomeScreen(props) {
	const React = require('react')
	
	const { Text, TouchableOpacity, View } = require('react-native')

	return (
		<View
			style = {{
				alignItems: 'center',
				flex: 1,
				justifyContent: 'center'
			}}
		>
			<Text
				style = {{
					fontSize: 36,
					fontWeight: "bold"
				}}
			>
				Home Screen
			</Text>

			<TouchableOpacity
				onPress = {() => props.navigation.navigate("Second")}
				style = {{
					marginTop: 10,
					padding: 20
				}}
			>
				<Text
					style = {{
						color: "blue",
						fontSize: 18
					}}
				>
					Go to second screen
				</Text>
			</TouchableOpacity>
		</View>
	)
}