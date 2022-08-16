import React, {useState, useEffect} from 'react';
import { Text, View, TextInput} from 'react-native';
import convert from 'convert-units';
import './UnitConverter.css';
import {Picker} from '@react-native-picker/picker';

const MeasureView = ({measure, value, setValue}) => {
    const units = convert().possibilities(measure)
    const [fromUnit, setFromUnit] = useState(units[0])
    const [toUnit, setToUnit] = useState(units[1])
    const [valueConverted, setValueConverted] = useState(0)

    useEffect(()=>{
        setValueConverted(convert(+value).from(fromUnit).to(toUnit).toFixed(2))
        //https://github.com/convert-units/convert-units
        // +value will convert string to number --- toFixed will round to tow desimal number
    },[value, fromUnit, toUnit])

    return(
    <View className="measureContainer">
        <View className='row'>
            <Picker className="column" selectedValue={fromUnit} onValueChange={setFromUnit}>
                {units.map((unit, i) =>(
                    <Picker.Item label={unit} value={unit} key={i} />
                ))}
            </Picker>
            <View className='column'>
                <TextInput className="inputs" value={value} onChangeText={setValue} keyboardType="numeric" />
            </View>
        </View>
        <View className='row'>
            <Picker className="column" selectedValue={toUnit} onValueChange={setToUnit}>
                {units.map((unit, i) =>(
                    <Picker.Item label={unit} value={unit} key={i} />
                ))}
            </Picker>
            <View className='column'>
                <Text id="input2" className="inputs">{valueConverted}{' '}</Text>
            </View>
        </View>
    </View>
    )
}

export default MeasureView;