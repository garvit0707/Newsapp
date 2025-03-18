import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { registerData } from '../redux/slices/RegisterSlices';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const RegisterScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userData = useSelector(state => state.login.value)
    console.log("the user data are here", userData)

    const handlebutton = () => {
        dispatch(registerData({ name, password, email, confirmPassword }))
        setConfirmPassword("")
        setName("")
        setPassword("")
        setEmail("")
        console.log("Alll the data togeather im getting in the apllication is here only by storing th evalue in the redu", name, password, email, confirmPassword)
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image
                source={require('../../assets/images/signup.png')}
                style={style.im}></Image>
            <View style={{ marginTop: wp("5%") }}>
                <View style={{ flexDirection: "row", textAlign: "center", }}>
                <Fontisto name="email" size={30}></Fontisto>
                    <TextInput
                        style={style.namestyle}
                        onChangeText={val => setName(val)}
                        value={name}></TextInput>
                </View>
                <View style={{ flexDirection: "row", textAlign: "center", }}>
                    <EvilIcons name="lock" size={40}></EvilIcons>
                    <TextInput
                        style={style.namestyle}
                        onChangeText={val => setEmail(val)}
                        value={email}></TextInput>
                </View>

                <View style={{ flexDirection: "row", textAlign: "center", }}>
                    <EvilIcons name="lock" size={40}></EvilIcons>
                    <TextInput
                        style={style.namestyle}
                        onChangeText={val => setPassword(val)}
                        value={password}></TextInput>
                </View>
                <View style={{ flexDirection: "row", textAlign: "center",  }}>
                    <EvilIcons name="lock" size={40}></EvilIcons>

                    <TextInput
                        style={style.namestyle}
                        onChangeText={val => setConfirmPassword(val)}
                        value={confirmPassword}></TextInput>
                </View>
            </View>
            <TouchableOpacity onPress={handlebutton} style={style.button}>
                <Text style={{ textAlign: "center" }}>
                    Register it
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("login") }}>
                <Text style={{ marginTop: "10", alignSelf: "center" }}>go to the login page from here</Text>

            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen;

const style = StyleSheet.create({
    im: {
        height: wp('80%'),
        width: wp('100%'),
        justifyContent: 'center',
    },
    namestyle: {
        height: wp('14%'),
        width: wp('80%'),
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        marginBottom: wp("7%"),
    },
    button: {
        alignSelf: "center",
        borderWidth: 1.2,
        borderColor: "gray",
        padding: wp("4%"),
        borderRadius: wp("2%"),
        width: wp("80%"),
        backgroundColor: "lightgreen"
    }
});
