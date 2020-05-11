import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';

class AuthScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  onUsernameChange = (text) => {
    this.setState({ username: text })
  }

  onPasswordChange = (text) => {
    this.setState({ password: text })
  }

  render() {
    const { onCheckAuthorization } = this.props;
    const { username, password } = this.state;

    return (
      <View style={{
        height: '100%',
        justifyContent: 'center',
        padding: 20
      }}>
        <Text>Username</Text>
        <TextInput
          placeholder="digite seu nome de usuário"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
          value={username}
          onChangeText={this.onUsernameChange}
        />
        <Text>Senha</Text>
        <TextInput
          placeholder="digite sua senha"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 40 }}
          value={password}
          onChangeText={this.onPasswordChange}
        />
        <Button
          onPress={() => onCheckAuthorization(username, password)}
          title="Login"
        />
      </View>
    );
  }
}

export default AuthScreen;