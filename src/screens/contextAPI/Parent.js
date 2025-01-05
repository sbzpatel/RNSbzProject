import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'

export const CounterContext = createContext();

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count + 1);
    }

    const handleDec = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <CounterContext.Provider value={{ count, handleInc, handleDec, handleReset }}>
            <FirstChild />
        </CounterContext.Provider>
    )
}

export default Parent