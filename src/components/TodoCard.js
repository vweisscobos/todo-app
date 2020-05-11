import React from 'react';
import { View, Text } from 'react-native';

function TodoCard({ description }) {
  return (
    <View style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20, borderRadius: 8, padding: 10 }}>
      <Text>{description}</Text>
    </View>
  );
}

export default TodoCard;