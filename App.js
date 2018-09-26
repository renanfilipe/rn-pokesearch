import React from 'react';
import Expo from 'expo';
import {View, Platform} from 'react-native';
import Landing from "./src/Landing";
import Search from "./src/Search";

export default class App extends React.Component {
	state = {
		currentScreen: "search",
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

	switchScreen = (currentScreen) => {
		this.setState({ currentScreen });
	};

	renderScreen = () => {
  	if (this.state.currentScreen === "landing") {
  	  return (
  	  	<Landing switchScreen={this.switchScreen}/>
	    )
	  } else if (this.state.currentScreen === "search") {
  		return (
  			<Search/>
		  );
	  }
	};

  render() {
	  if (!this.state.isReady) {
		  return <Expo.AppLoading />;
	  }

    return (
      <View style={styles.container}>
	      {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0,
  }
};
