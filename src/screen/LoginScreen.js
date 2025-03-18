import { Button } from '@react-navigation/elements';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Navigation from '../navigation/Navigation';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logindata } from '../redux/slices/LoginSlices';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const data_from_register = useSelector((val) => val?.pink?.regis)

  console.log("data?????????????? ", data_from_register)
  console.log(data_from_register)
  const handleClick = () => {
    dispatch(logindata({ email, password }))
    console.log("the value's are here !!!", email, password);
    setEmail('');
    setPassword('');



    // auth.createUserWithEmailAndPassword(email,password).then(
    //   ()=>{
    //     console.log("the user created successfully by me using the user auth!!")
    //   })
    //   .catch((error)=>{
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }
    //     console.error(error)
    //   })

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert("user has been created !!!")
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert("user already exists!!!")
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert("please entera valid email id")
        }

        if (error.code === "auth/weak-password") {
          console.log("thhth")
          Alert.alert("te entered passowrd is weak ")
        }

        // console.error(error);
      });
  };

  // console.log("the value of email is ", email)

  const handleRegister = () => {
    navigation.navigate("register")
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Image
        source={require('../../assets/images/login.png')}
        style={style.image}></Image>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: wp("15%"),
        }}>
        <Fontisto name="email" size={20}></Fontisto>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={{
            height: wp('13%'),
            width: wp('80%'),
            borderWidth: 1,
            borderColor: 'black',
            marginLeft: wp("4%"),
            paddingHorizontal: wp("3%"),
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: wp('10%'),
          width: "80%",
          alignSelf: "center",
          alignItems: "center",

        }}>
        <EvilIcons name="lock" size={30}></EvilIcons>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            height: wp('13%'),
            width: wp('80%'),
            borderWidth: 1,
            borderColor: 'black',
            marginLeft: wp("3%"),
            paddingHorizontal: wp("3%"),
          }}
        />
        {/* {console.log("the value of rm is",email)} */}
      </View>
      <TouchableOpacity
        onPress={handleClick}
        style={{
          marginTop: '12%',
          marginLeft: wp("10%"),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          height: wp("13%"),
          borderColor: "black",
          width: wp("78%"),
          alignSelf: "center",
          backgroundColor: "lightgreen"
        }}>
        <Text>press it</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: wp("5%") }}>
        <Text>
          Don't have account?
        </Text>
        <TouchableOpacity onPress={handleRegister} style={style.registerButton}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const style = StyleSheet.create({
  image: {
    height: wp('80%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    marginLeft: wp("4%")
  },
});

export default LoginScreen;
