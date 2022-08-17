import React, {useState, useEffect} from 'react';
import { TextInput} from 'react-native';
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
    <div className="measureContainer">
    <div>
        <section className='row'>
            <Picker className="column" selectedValue={fromUnit} onValueChange={setFromUnit}>
                {units.map((unit, i) =>(
                    <Picker.Item label={unit} value={unit} key={i} />
                ))}
            </Picker>
            <div className="column">
                <div className='inputs1'>
                    <TextInput  value={value} onChangeText={setValue} keyboardType="numeric" />
                </div>
            </div>
        </section>
        <section className='row'>
            <Picker className="column" selectedValue={toUnit} onValueChange={setToUnit}>
                {units.map((unit, i) =>(
                    <Picker.Item label={unit} value={unit} key={i} />
                ))}
            </Picker>
            <div className="column">
                <text className='inputs' >{valueConverted}{' '}</text>
            </div>
        </section>
    </div>
    </div>
    )
}

export default MeasureView;