import 'react-native-gesture-handler';
import * as React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';
import Header from './src/components/Header';
import { navigationRef } from './src/components/RootNavigation';
import AuthScreen from './src/components/AuthScreen';
import * as api from './api';


import { Provider } from 'react-redux';
import { store } from './src/store';


const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    }
  }

  checkAuthorization = (username, password) => {
    api.checkAuthorization(username, password)
      .then(res => {
        this.setState({ loggedIn: res});
      })
      .catch(err => {
        alert(err.text);
      })
  }

  render() {
    const {
      loggedIn
    } = this.state;

    if (!loggedIn) {
      return <AuthScreen onCheckAuthorization={this.checkAuthorization}/>
    }    

    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Header />
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Perfil">
              {props => <ProfileScreen {...props} user={loggedIn}/>}
            </Drawer.Screen>
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}