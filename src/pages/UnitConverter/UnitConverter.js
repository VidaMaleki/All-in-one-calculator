//import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { View} from 'react-native';
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
    <div className="unitConverter">
    <View className="Unitcontainer" >
        <h1>Unit Converter</h1>
        <TabView navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange = {setIndex}
            renderTabBar={(props) => <TabBar id="tabBar"
                {...props} 
                scrollEnabled
                tabStyle={{width: 'auto'}}
                indicatorStyle={{ backgroundColor:'rgb(244, 146, 8)'}}
                style={{backgroundColor: '#052F5F'}}
            />}
        ></TabView>
    </View>
    </div>
    );
}
export default UnitConverter;