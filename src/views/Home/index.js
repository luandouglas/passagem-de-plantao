import React, {useState} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../../components/CustomTextInput';
import CustomPicker from '../../components/CustomPicker';
import CustomHeader from '../../components/CustomHeader';
import CustomFab from '../../components/CustomFab';
import {SvgXml} from 'react-native-svg';
import {PDF} from '../../assets/icons';

// import { Container } from './styles';
const {width, height} = Dimensions.get('window');
const Home = (props) => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader {...props} />
      <View style={{flex: 1, padding: 10}}>
        <Text
          style={{
            fontSize: 19,
            color: '#555',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Plantões Registrados
        </Text>
        <ScrollView>
          <LinearGradient
            colors={['#56BFFF', '#80c5ed']}
            style={{
              borderLeftWidth: 10,
              borderLeftColor: 'green',
              marginTop: 10,
              alignSelf: 'center',
              padding: 5,
              elevation: 10,
              marginBottom: 15,
              width: width * 0.9,
              height: 200,
            }}>
            <View>
              <Text style={{fontSize: 16, color: '#FFF'}}>LEITO: 01</Text>
              <Text style={{fontSize: 16, color: '#FFF'}}>
                IDENTIFICAÇÃO: M.F.S
              </Text>
              <Text style={{fontSize: 16, color: '#FFF'}}>IDADE: 74 Anos</Text>
              <Text style={{fontSize: 16, color: '#FFF'}}>
                PROCEDENCIA: UPA Jose Walter
              </Text>
              <SvgXml xml={PDF}></SvgXml>
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
      <CustomFab {...props} />
    </View>
  );
};

export default Home;
