import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
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
        color: 'rgb(255,255,255)',
        backgroundColor: 'rgb(135,206,250)'
    },
    textInput: {
        fontSize: 30,
        width: 300,
        backgroundColor: '#FFF',
        height: 60, 
    },
    kaigyou: {
        fontSize: 30,
    }
});

const sign_up = () => (
    <View style={styles.container}>
            <TextInput style={styles.textInput}  placeholder="User ID" />
            <TextInput style={styles.textInput}  placeholder="Choose a password" />
            <TextInput style={styles.textInput}  placeholder="Re-type password" />
            <Text style={styles.kaigyou}> {"\n"}</Text>
        <TouchableOpacity onPress={Actions.main}>
            <Text style={styles.linkText}>登録</Text>
        </TouchableOpacity>
    </View>
);
export default sign_up;