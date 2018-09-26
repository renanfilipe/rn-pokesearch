import React from "react";
import {View, ScrollView, Text, Image} from "react-native";
import {ListItem, List} from "native-base";

class SearchBody extends React.Component {
	render() {
		const pokemon = this.props.data;

		if(!pokemon){
			return <View/>
		}

		return (
			<ScrollView contentContainerStyle={{flex: 1}}>
				<Text style={styles.header}>
					#{pokemon.id} - {pokemon.name.toUpperCase()}
				</Text>
				<View style={styles.viewStyle}>
					<Image
						source={{uri: pokemon.sprites.front_default}}
						style={styles.img}
					/>
				</View>
				<View style={styles.info}>
					<ListItem itemDivider>
						<Text style={{fontWeight: "bold"}}>Size</Text>
					</ListItem>
					<ListItem itemDivider>
						<Text>Weight - {pokemon.weight}</Text>
					</ListItem>
					<ListItem itemDivider>
						<Text>Height - {pokemon.height}</Text>
					</ListItem>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	header: {
		fontSize: 30,
		color: "red",
		textAlign: "center",
	},
	viewStyle: {
		justifyContent: "flex-start",
		alignItems: "center",
		flex: 1
	},
	img: {
		height: 200,
		width: 200,
		justifyContent: "center",
		alignItems: "center",
	},
	info: {
		flex: 1,
		backgroundColor: "white",
		opacity: 0.8
	}
};

export default SearchBody;
