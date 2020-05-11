import React from 'react';
import { View, Text } from 'react-native';
import * as api from '../../api';

class ProfileScreen extends React.Component {
  componentDidMount() {
    api.fetchUserProfile()
      .then(res => {
        console.log(res);
      })
  }

  render() {
    const { user } = this.props;

    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>{user.name}</Text>
      </View>
    );
  }
}

export default ProfileScreen;