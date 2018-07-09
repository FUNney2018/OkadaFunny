import React from 'react';
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
        //marginRight: 5,
        height: 60, 
    },
    kaigyou: {
        fontSize: 30,
    }
});

const login = () => (
    <View style={styles.container}>
        <TouchableOpacity onPress={Actions.sign_up}>
            <Text style={styles.linkText}>新規登録</Text>
            <Text style={styles.kaigyou}>{"\n"}</Text>
        </TouchableOpacity>
        <TextInput style={styles.textInput}  placeholder="User ID" />
        <TextInput style={styles.textInput}  placeholder="Password" />
        <TouchableOpacity onPress={Actions.main}>
            <Text style={styles.kaigyou}>{"\n"}</Text>
            <Text style={styles.linkText}>ログイン</Text>
        </TouchableOpacity>
    </View>
);
export default login;