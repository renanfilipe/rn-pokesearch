import React from 'react';
import Expo from 'expo';
import {View, Platform} from 'react-native';
import Landing from "./src/landing";

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
				<Landing/>
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
