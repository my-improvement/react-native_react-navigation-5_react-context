export function OtherScreen() {
	const React = require('react')
	
	const { Text, View } = require('react-native')

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
				Other Screen
			</Text>
		</View>
	)
}