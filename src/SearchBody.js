import React from "react";
import {View, ScrollView, Text} from "react-native";

class SearchBody extends React.Component {
	render() {
		const pokemon = this.props.data;

		if(!pokemon){
			console.log(`retornou`);
			return <View/>
		}

		return (
			<ScrollView contentContainerStyle={{flex: 1}}>
				<Text style={styles.header}>
					#{pokemon.id} - {pokemon.name.toUpperCase()}
				</Text>
			</ScrollView>
		);
	}
}

const styles = {
	header: {
		fontSize: 30,
		color: "red",
		textAlign: "center",
	}
};

export default SearchBody;
