import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';

import PropTypes from 'prop-types';

export default class AssetItem extends Component{

  static propTypes = {
    assetItem: PropTypes.object.isRequired,
  }

  checkBoxPress(asset) {
    asset.audited = !asset.audited;
    if (asset.audited) {
      asset.lastauditeddate = '2018-02-02';
    }
    alert(asset.audited)
  }
  
  render() {
    const asset = this.props.assetItem;
    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <View style={styles.toprow}>
            <View style={styles.assettag}>
              <Text style={styles.assettagtxt}>{asset.assetnum}</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.statustxt}>{asset.status}</Text>
            </View>
          </View>
          <View style={styles.bottomrow}>
            <View>
              <Text>{asset.description}</Text>
              <Text>{asset.location}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.checkboxcontainer}>
          <CheckBox containerStyle={{backgroundColor: '#eeeeee'}} checked={asset.audited} onPress={() => {this.checkBoxPress(asset)}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },
  toprow: {
    flexDirection: 'row',
    borderBottomColor: '#cecece',
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  assettag: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  assettagtxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  statustxt: {
    alignSelf: 'flex-end',
  },
  bottomrow: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 5,
  },
  details: {
    flex: 7,
    justifyContent: 'flex-start',
  },
  checkboxcontainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  }


});
