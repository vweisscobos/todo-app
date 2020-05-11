import React from 'react';
import { View, Button } from 'react-native';
import * as api from '../../api';
import TodoCard from './TodoCard';
import CreateItemButton from './CreateItemButton';
import CreateItemModal from './CreateItemModal';
import { connect } from 'react-redux';
import { addTodo, fetchTodoListSuccess } from '../actions/todo';

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isCreatingItem: false, 
    }
  }

  componentDidMount = () => {
    api.fetchTodoList()
      .then(res => {
        this.props.fetchTodoListSuccess(res);
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
    this.props.addTodo(item);
    this.setState({ isCreatingItem: false });
  }
  
  render() {
    const {
      isCreatingItem,
    } = this.state;
    const {
      todoList,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          {
            todoList.map((item, index) => <TodoCard description={item.description}/>)
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

const mapStateToProps = (store) => {
  return {
    todoList: store,
  };
};

const mapDispatchToProps = {
  addTodo,
  fetchTodoListSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);