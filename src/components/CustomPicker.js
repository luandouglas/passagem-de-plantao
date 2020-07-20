import React from 'react';

import {Picker} from '@react-native-community/picker';

import {Picker as View} from '../styles/components';

const CustomPicker = ({
  selectedValue,
  onValueChange,
  placeholder,
  mode,
  enabled,
  data,
  label,
  value,
}) => {
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{height: 60}}
        mode={mode ? mode : 'dialog'}>
        <Picker.Item label={placeholder} color={'#77bde5'} value={null} />
        {data.map((item, index) => (
          <Picker.Item
            key={index}
            label={item[label]}
            color={'#1f79ad'}
            value={item[value]}
          />
        ))}
      </Picker>
    </View>
  );
};
export default CustomPicker;
