import React, { useState} from 'react';
//import { View} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import convert from 'convert-units';
import './UnitConverter.css';
import MeasureView from './MeasureView';

// https://github.com/react-native-picker/picker
// import Constants from 'expo-constants';
//Provides system information that remains constant throughout the lifetime of your app.



const measures = convert().measures()

const unCamelCase = (value) => {
    return value.replace(/([A-Z])/g, ' $1')
}

const UnitConverter = () => {
    const [index, setIndex] = useState(0)
    const [routes] = useState(
        measures.map((m) => ({ key: m, title: unCamelCase(m) }))
    )
    const [value, setValue] = useState("0")
    const renderScene = ({route}) => {
        return <MeasureView measure={route.key} value={value} setValue={setValue}/>
    }
    return (
    <div className="unitconverter">
        <h1>Unit Converter</h1>
        <TabView id="tabBar" navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange = {setIndex}
            renderTabBar={(props) => <TabBar 
                {...props} 
                scrollEnabled
                tabStyle={{width: 'auto'}}
                indicatorStyle={{ backgroundColor:'yellow'}}
                style={{backgroundColor: '#2a6279'}}
            />}
        ></TabView>
    </div>
    );
}
export default UnitConverter;