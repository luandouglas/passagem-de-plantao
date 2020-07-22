import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import {SvgXml} from 'react-native-svg';
import {Menu, Plus} from '../../../assets/icons';
// import { Container } from './styles';

const Diagnostico = () => {
  const [diag, setNewDiag] = useState([]);
  const [diagText, setDiagText] = useState('');
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <CustomTextInput
            value={diagText}
            onChangeText={(diagText) => setDiagText(diagText)}
            placeholder="Diagnostico"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setNewDiag([...diag, diagText]);
            setDiagText('');
          }}>
          <SvgXml style={{marginRight: 15}} xml={Plus} />
        </TouchableOpacity>
      </View>
      {diag.map((item) => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <CustomTextInput
              placeholder="TEXTO"
              value={item}
              editable={false}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Diagnostico;
