import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';
import AppbarAction from 'react-native-paper/lib/typescript/components/Appbar/AppbarAction';
import { registerStyle } from './register.style';

export const RegisterScreen = () => {
    return (
        <SafeAreaView style={registerStyle.safe}>
            <ScrollView>
                <Appbar>
                    <Appbar.BackAction/>
                    <Appbar.Content title="Register"/>
                </Appbar>
                <View style={registerStyle.content}>
                <TextInput label="Name"></TextInput>
                <TextInput label="Email" keyboardType="email-address"></TextInput>
                <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon icon="eye" color={registerStyle.icon.color}/>}></TextInput>
                <TextInput label="Confirm Password" secureTextEntry={true} right={<TextInput.Icon icon="eye" color={registerStyle.icon.color}/>}></TextInput>
                <TextInput label="Phone Number" keyboardType="phone-pad"></TextInput>
                <Button mode="contained" style={registerStyle.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}