import React from 'react';
import { View, Button } from 'react-native';
import * as api from '../../api';
import TodoCard from './TodoCard';
import CreateItemButton from './CreateItemButton';
import CreateItemModal from './CreateItemModal';

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      isCreatingItem: false, 
    }
  }

  componentDidMount = () => {
    api.fetchTodoList()
      .then(res => {
        this.setState({ todoList: res });
      })
      .catch(err => {
        alert(err);
      })
  }

  onCreateItemPress = () => {
    this.setState({ isCreatingItem: true });
  }

  onCreateItemModalDismiss = () => {
    this.setState({ isCreatingItem: false });
  }

  onItemCreated = (item) => {
    this.setState(prevState => {
      return { todoList: [...prevState.todoList, item] }
    });
    this.setState({ isCreatingItem: false });
  }
  
  render() {
    const {
      todoList,
      isCreatingItem,
    } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          {
            todoList.map(item => <TodoCard description={item.description}/>)
          }
        </View>
        <View style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
        }}>
          <CreateItemButton onCreateItemPress={this.onCreateItemPress}/>
        </View>
        {
          isCreatingItem && <CreateItemModal
            onDismissRequest={this.onCreateItemModalDismiss}
            onSavePress={this.onItemCreated}
          />
        }
      </View>
    );
  }
}

export default HomeScreen;