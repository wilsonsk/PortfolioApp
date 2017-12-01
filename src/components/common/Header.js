import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
	const { container, content } = styles;
	return(
		<View style={container}>
			<Text style={content}>
				{props.headerText}
			</Text>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
		maxHeight: 24,
		borderWidth: 1,
	},
	content: {
		flex: 1,
	}
};

export { Header };
