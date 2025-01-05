import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import externalStyle from '../../css/externalStyle'
import { CounterContext } from './Parent'

const SubChild = () => {
    const { count, handleInc, handleDec, handleReset } = useContext(CounterContext);

    return (
        <View style={externalStyle.container}>
            <Text style={externalStyle.heading}>SubChild Component</Text>

            <Text style={{ fontSize: 34, color: "orange", marginBottom: 10 }}>Counter: {count}</Text>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={handleInc}
            >
                <Text style={[externalStyle.customBtn, { backgroundColor: "green" }]}>Counter Incrementor</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={handleDec}
            >
                <Text style={[externalStyle.customBtn, { backgroundColor: "black" }]}>Counter Decrementor</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={handleReset}
            >
                <Text style={[externalStyle.customBtn, { backgroundColor: "orange" }]}>Counter Resetor</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubChild