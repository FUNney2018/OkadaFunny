/*import React, { Component } from 'react';
import { View, Text } from 'react-native';
 
class pageA extends Component {
  render() {
    return (
      <View style={pageStyle}>
        <Text style={fontStyle}>A</Text>
      </View>
    )
  }
}
 
const pageStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  paddingTop: 100
}
const fontStyle = {
  fontSize: 36,
  fontWeight: '600'
}
 
export default pageA;*/

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        fontSize: 32,
        color: 'rgb(95, 177, 237)',
    },
});

const PageA = () => (
    <View style={styles.container}>
        <TouchableOpacity onPress={Actions.pageB}>
            <Text style={styles.linkText}>送金</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.pageC}>
            <Text style={styles.linkText}>送金要求</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.pageD}>
            <Text style={styles.linkText}>履歴</Text>
        </TouchableOpacity>
    </View>
);
export default PageA;