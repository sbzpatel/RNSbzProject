import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import externalStyle from "../css/externalStyle";

const MyActivityIndicator = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);

  useEffect(() => {
    console.log("useEffect calling on Mount only..");
  }, []);

  useEffect(() => {
    console.log("useEffect calling on count/item update..");
  }, [count, item]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={externalStyle.heading}>React Native useEffect</Text>

      <Text style={{ fontSize: 24, fontWeight: "600" }}>Count: {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={[externalStyle.customBtn, { backgroundColor: "orange" }]}>Increment Count</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 24, fontWeight: "600" }}>Item: {item}</Text>
      <TouchableOpacity onPress={() => setItem(item + 1)}>
        <Text style={[externalStyle.customBtn, { backgroundColor: "green" }]}>Increment Item</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyActivityIndicator;