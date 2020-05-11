import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as RootNavigation from './RootNavigation'; 

const Header = () => {
  return <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
  }}>
    <TouchableHighlight
      onPress={() => RootNavigation.openDrawer()}
    >
      <FontAwesome5 name="bars" size={24}/>
    </TouchableHighlight>
    <Text>TODO</Text>
    <TouchableHighlight
      onPress={() => RootNavigation.navigate('Home')}
    >
      <FontAwesome5 name="home" size={24}/>
    </TouchableHighlight>
  </View>
}

export default Header;