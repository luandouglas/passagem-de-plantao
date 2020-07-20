import React from 'react';

import {Header, Title} from '../styles/layout';
import {View} from 'react-native-animatable';
import {Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Menu} from '../assets/icons';

const CustomHeader = (props) => {
  return (
    <Header>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <SvgXml xml={Menu} />
      </TouchableOpacity>
      <View style={{flex: 1, paddingRight: 10}}>
        <Title>Passagem de Plantão</Title>
      </View>
    </Header>
  );
};
export default CustomHeader;
