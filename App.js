import React from 'react';
import Expo from 'expo';
import { View, Platform, ImageBackground } from 'react-native';
import { Text, Button } from 'native-base';

const myBackground = require("./assets/icons/landing.jpg");

export default class App extends React.Component {
	state = {
		isReady: false
  };

  async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
		});
		this.setState({ isReady: true });
	}

  render() {
	  if (!this.state.isReady) {
		  return <Expo.AppLoading />;
	  }

    return (
      <View style={styles.container}>
				<ImageBackground
					source={myBackground}
					style={styles.backgroundImage}
				>
					<View style={styles.viewStyle}>
						<Text style={styles.titleStyle}>
							Welcome to PokeSearch
						</Text>
						<Button
							block={true}
							style={styles.buttonStyle}
							onPress={() => {}}
						>
							<Text style={styles.buttonText}>
								Start Searching
							</Text>
						</Button>
					</View>
				</ImageBackground>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
	viewStyle: {
  	flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	backgroundImage : {
		width: '100%',
		height: '100%',
	},
	titleStyle: {
  	fontSize: 30,
		color: "blue",
		alignItems: "center",
	},
	buttonStyle: {
  	margin: 10,
	},
	buttonText: {
  	color: "white"
	}
};
