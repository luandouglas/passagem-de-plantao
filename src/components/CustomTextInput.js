import React from 'react';

import {TextInput} from '../styles/components';
import {View} from 'react-native-animatable';
import {Text, Platform} from 'react-native';
// import { Container } from './styles';
import {TextInputMask} from 'react-native-masked-text'


const CustomTextInput = ({
  value,
  rmask,
  onChangeText,
  placeholder,
  editable,
  secureTextEntry,
}) => {
  return (
    <View style={{margin: 10}}>
      {/*<Text
        style={{
          backgroundColor: '#FFF',
          top: Platform.OS == 'ios' ? 1 :55,
          left: 20
          }}
        >
        {placeholder}
        </Text>*/}
      <TextInputMask
      style={{backgroundColor: '#fff',
        fontSize: 17,
        paddingLeft: 10,
     
        borderRadius: 7,
        borderWidth: 0.5,
        borderColor: '#555',
        color: '#1f79ad',
        height: 60,
      marginVertical: 5, marginHorizontal:10}}
        type={'custom'}
        value={value}
        options={{mask: rmask}}
        onChangeText={onChangeText}
      />
     
    </View>
  );
};
export default CustomTextInput;
