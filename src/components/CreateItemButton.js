import React from 'react';
import { TouchableHighlight } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CreateItemButton = ({ onCreateItemPress }) => (
  <TouchableHighlight
    onPress={onCreateItemPress}
    style={{
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <FontAwesome5 name="plus" size={24} color="white"/>
  </TouchableHighlight>
)

export default CreateItemButton;