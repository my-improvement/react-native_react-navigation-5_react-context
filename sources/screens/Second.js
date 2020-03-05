export function SecondScreen(props) {
	const React = require('react')

	const { Text, TouchableOpacity, View } = require('react-native')

	const { DataContext } = require('../refs/contexts')

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
				Second Screen
			</Text>

			<TouchableOpacity
				onPress = {() => props.navigation.navigate("Home")}
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
					Go to home screen
				</Text>
			</TouchableOpacity>

			<Text
				style = {{
					marginTop: 100
				}}
			>
				Context API's global data test using number
			</Text>

			<DataContext.Consumer>
				{
					contextData => (
						<>
							<Text
								style = {{
									fontSize: 36,
									fontWeight: "bold",
									marginTop: 20
								}}
							>
								{contextData.number}
							</Text>

							<TouchableOpacity
								onPress = {() => contextData.setNumber(contextData.number + 1)}
								style = {{
									marginTop: 20
								}}
							>
								<Text
									style = {{
										color: "blue",
										fontSize: 18
									}}
								>
									Add
								</Text>
							</TouchableOpacity>
						</>
					)
				}
			</DataContext.Consumer>
		</View>
	)
}