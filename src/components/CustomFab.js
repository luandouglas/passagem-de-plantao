import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Plus} from '../assets/icons';

const CustomFab = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Plantao')}
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 20,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#56BFFF',
      }}>
      <Text style={{fontSize: 25, color: '#FFF'}}>+</Text>
      {/* <SvgXml xml={Plus} color={'#000'} /> */}
    </TouchableOpacity>
  );
};
export default CustomFab;
