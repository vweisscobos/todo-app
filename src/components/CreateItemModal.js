import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';

class CreateItemModal extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
    }
  }

  onDescriptionChange = (text) => {
    this.setState({ description: text })
  }

  createItem = () => {
    this.props.onSavePress({ description: this.state.description });
    this.setState({ description: '' })
  }

  render() {
    const { onDismissRequest } = this.props;
    const { description } = this.state;

    return (
      <TouchableHighlight
        onPress={onDismissRequest}
        style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'flex-end',
      }}>
        <View style={{
          backgroundColor: 'white',
          padding: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,  
          elevation: 10
        }}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            textAlignVertical={'top'}
            style={{borderColor: 'gray', borderWidth: 1, height: 120, marginBottom: 20 }}
            value={description}
            onChangeText={this.onDescriptionChange}
          />
          <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableHighlight
              onPress={this.createItem}
              style={{
                borderColor: 'gray',
                borderWidth: 2,
                width: '100%',
                padding: 10,
                borderRadius: 8,
                backgroundColor: 'gray'
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Salvar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default CreateItemModal;