import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import externalStyle from '../css/externalStyle';

function HomeScreen(props) {
  // console.log(props);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>Login & Register In React Native</Text>
      {/* <Text style={styles.textStyle}>This is Home Screen</Text> */}

      <View style={{ width: "95%" }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notification')}
        >
          <Text style={{ ...externalStyle.customBtn, backgroundColor: "#06193b" }}>Go to Notification Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: "grey"
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 26,
    color: 'green',
    textAlign: 'center',
  },
});
export default HomeScreen;