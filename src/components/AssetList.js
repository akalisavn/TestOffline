import React, { Component } from 'react';
import {StyleSheet, Text, FlatList, View, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import AssetItem from './AssetItem';

export default class AssetList extends Component{
  static propTypes = {
    assets: PropTypes.array.isRequired,
  }

  testOnClick() {
    alert('TEST');
  }
  render() {
    const assets = this.props.assets;       

    return (
         <FlatList data={assets}
            renderItem={ ({item}) => <AssetItem assetItem={item} /> }
              keyExtractor={ (item, index) => item.assetnum + item.siteid}
            onPress={this.testOnClick}
            />  
    );
  }
}

const styles = StyleSheet.create({

});
