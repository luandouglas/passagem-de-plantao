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
import DadosGerais from './Tabs/DadosGerais';
import Diagnostico from './Tabs/Diagnostico';
import Neuro from './Tabs/Neuro';
import AparelhoCardiovascular from './Tabs/AparelhoCardiovascular';
import AparelhoRespiratorio from './Tabs/AparelhoRespiratorio';
import TratoGastrointestinal from './Tabs/TratoGastrointestinal';
import AparelhoRenalMetabolico from './Tabs/AparelhoRenalMetabolico';
import HematoInfeccioso from './Tabs/HematoInfeccioso';
import IntercorrênciasPeríodo from './Tabs/IntercorrênciasPeríodo';
import PendenciasCaso from './Tabs/PendênciasCaso';
const Plantao = (props) => {
  const [screen, setNewScreen] = useState('dados_gerais');
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
  function returnScreen() {
    switch (screen) {
      case 'dados_gerais':
        return <DadosGerais />;
      case 'diagnostico':
        return <Diagnostico />;
      case 'neuro':
        return <Neuro />;
      case 'aparelho_cardiovascular':
        return <AparelhoCardiovascular />;
      case 'aparelho_respiratorio':
        return <AparelhoRespiratorio />;
      case 'trato_gastrointestinal':
        return <TratoGastrointestinal />;
      case 'aparelho_renal_matabolico':
        return <AparelhoRenalMetabolico />;
      case 'hemato_infeccioso':
        return <HematoInfeccioso />;
      case 'intercorrencias_periodo':
        return <IntercorrênciasPeríodo />;
      case 'pendencias_caso':
        return <PendenciasCaso />;
    }
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
          style={isActiveTouch('dados_gerais')}
          onPress={() => setNewScreen('dados_gerais')}>
          <Text style={isActiveText('dados_gerais')}>Dados Gerais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('diagnostico')}
          onPress={() => setNewScreen('diagnostico')}>
          <Text style={isActiveText('diagnostico')}>Diagnósticos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('neuro')}
          onPress={() => setNewScreen('neuro')}>
          <Text style={isActiveText('neuro')}>Neuro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('aparelho_cardiovascular')}
          onPress={() => setNewScreen('aparelho_cardiovascular')}>
          <Text style={isActiveText('aparelho_cardiovascular')}>
            Aparelho Cardiovascular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('aparelho_respiratorio')}
          onPress={() => setNewScreen('aparelho_respiratorio')}>
          <Text style={isActiveText('aparelho_respiratorio')}>
            Aparelho Respiratório
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('trato_gastrointestinal')}
          onPress={() => setNewScreen('trato_gastrointestinal')}>
          <Text style={isActiveText('trato_gastrointestinal')}>
            Trato Gastrointestinal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('aparelho_renal_matabolico')}
          onPress={() => setNewScreen('aparelho_renal_matabolico')}>
          <Text style={isActiveText('aparelho_renal_matabolico')}>
            Aparelho Renal/Metabolico
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('hemato_infeccioso')}
          onPress={() => setNewScreen('hemato_infeccioso')}>
          <Text style={isActiveText('hemato_infeccioso')}>
            Hemato/Infeccioso
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('intercorrencias_periodo')}
          onPress={() => setNewScreen('intercorrencias_periodo')}>
          <Text style={isActiveText('intercorrencias_periodo')}>
            Intercorrências do Período
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isActiveTouch('pendencias_caso')}
          onPress={() => setNewScreen('pendencias_caso')}>
          <Text style={isActiveText('pendencias_caso')}>
            Pendências do Caso
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{flex: 1}}>{returnScreen()}</View>
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
