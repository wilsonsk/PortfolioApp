import React, { Component } from 'react';
import { 
	View,
	Text,
	TouchableWithoutFeedback,
	LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../components/common';
import * as actions from '../actions';

class LibraryItem extends Component { 
	componentWillUpdate() {
		LayoutAnimation.spring();
	}
	
	renderDescription() { 
		if(this.props.expanded){
			return (
				<CardSection> 
					<Text style={styles.descriptionStyle}>
						{this.props.library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		return ( 
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(this.props.library.id)}
			>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>
							{this.props.library.title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}

}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	descriptionStyle: {
		flex: 1,
		paddingLeft: 10,
		paddingRight: 10
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(LibraryItem);
