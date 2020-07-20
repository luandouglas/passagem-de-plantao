import React from 'react';

import {TextInput} from '../styles/components';
import {View} from 'react-native-animatable';
import {Text} from 'react-native';
// import { Container } from './styles';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  editable,
  secureTextEntry,
}) => {
  return (
    <View style={{position: 'relative', margin: 10}}>
      {value != '' ? (
        <Text
          style={{
            backgroundColor: '#FFF',
            position: 'absolute',
            top: -5,
            left: 20,
          }}>
          {placeholder}
        </Text>
      ) : null}
      <TextInput
        // editable={editable ? true : true}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? true : false}
        placeholderTextColor="#77bde5"
      />
    </View>
  );
};
export default CustomTextInput;
