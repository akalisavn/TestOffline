import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Ajax from './src/Ajax';
import AssetList from './src/components/AssetList';

class Main extends Component {

  state = {
    assets: [],
    tbuAssets: [],
  }

  async componentDidMount() {
    const assets = await Ajax.fetchAllAssets();
    this.setState({assets});
    console.log(assets);
  }

  mapStateToProps() {
    return {
      assets: state.assets
    }
  }

  render() {
    const assets = this.state.assets;
    if (assets.length > 0) {
      return (
        <View style={styles.container}>
          <AssetList assets={assets} />
        </View>
      );
    }
    return (
      <View  style={styles.container}>
        <Text>Welcome to TestOffline</Text>
      </View>
    );
  }
}

export default (mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});
