import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import externalStyle from '../css/externalStyle';

const AboutScreen = (props) => {
    return (
        <View style={externalStyle.container}>
            <Text style={externalStyle.heading}>About Screen</Text>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => props.navigation.navigate('Mission')}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#095c47" }}>Go to Mission Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => props.navigation.navigate('Vision')}
            >
                <Text style={{ ...externalStyle.customBtn, backgroundColor: "#032240" }}>Go to Vision Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AboutScreen;