import React, {useState} from 'react';

import CustomHeader from '../../components/CustomHeader';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomPicker from '../../components/CustomPicker';
const Plantao = (props) => {
  const [screen, setNewScreen] = useState('general');
  const [teste, setTeste] = useState('');
  function isActiveTouch(item) {
    if (item == screen) {
      return {
        backgroundColor: '#1f79ad',
        height: 40,
        justifyContent: 'center',
      };
    }
    return {
      backgroundColor: '#FFF',
      height: 40,
      justifyContent: 'center',
    };
  }
  function isActiveText(item) {
    if (item == screen) {
      return {
        color: '#FFF',
        paddingHorizontal: 8,
      };
    }
    return {
      color: '#555',
      paddingHorizontal: 8,
    };
  }
  return (
    <View style={styles.containerHeader}>
      <CustomHeader {...props} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{maxHeight: 40, marginTop: 5}}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#FFF',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={isActiveTouch('general')}
          onPress={() => setNewScreen('general')}>
          <Text style={isActiveText('general')}>Dados Gerais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('diagnostics')}
          onPress={() => setNewScreen('diagnostics')}>
          <Text style={isActiveText('diagnostics')}>Diagnósticos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('neuro')}
          onPress={() => setNewScreen('neuro')}>
          <Text style={isActiveText('neuro')}>Neuro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('cardiovascularSystem')}
          onPress={() => setNewScreen('cardiovascularSystem')}>
          <Text style={isActiveText('cardiovascularSystem')}>
            Aparelho Cardiovascular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{paddingHorizontal: 8}}>Aparelho Respiratório</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{paddingHorizontal: 8}}>Trato Gastrointestinal</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{paddingHorizontal: 8}}>Aparelho Renal/Metabolico</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{paddingHorizontal: 8}}>Hemato/Infeccioso</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{paddingHorizontal: 8}}>Intercorrências do Período</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{paddingHorizontal: 8}}>Pendências do Caso</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{flex: 1}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    marginTop: 70,
  },
  textWhite: {
    color: 'black',
    marginVertical: 10,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
  },
});
export default Plantao;
