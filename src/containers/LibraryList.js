import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';

import LibraryItem from './LibraryItem'; 

class LibraryList extends Component { 
	render() {
		return( 
			<View>
				<FlatList
					data={this.props.libraries}
					extraData={this.props}
					keyExtractor={item => item.id}
					renderItem={({ item  }) => 
						<LibraryItem library={item} />
					}
				
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		libraries: state.libraries
	};
};

export default connect(mapStateToProps)(LibraryList);
