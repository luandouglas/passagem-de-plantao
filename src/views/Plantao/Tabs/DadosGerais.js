import React, {useState} from 'react';
import {View} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';

// import { Container } from './styles';

const DadosGerais = () => {
  const [model, setModel] = useState({
    data: '',
    leito: '',
    identificacao: '',
    dia_internamento: '',
    historia_admissao: '',
    data_de_nascimento: '',
    procedencia: '',
  });
  return (
    <View style={{flex: 1}}>
      <CustomTextInput placeholder="Data" />
      <CustomTextInput placeholder="Número do leito" type="number" />
      <CustomTextInput placeholder="Identificação" />
      <CustomTextInput placeholder="Dia de internamento" />
      <CustomTextInput placeholder="História de admissão" />
    </View>
  );
};

export default DadosGerais;
