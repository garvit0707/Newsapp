import React, { useEffect, useState } from 'react'
import { Text, View } from "react-native"
import Navigation from './src/navigation/Navigation'
import ToothChart from './src/JawUI'
import TestCode from './src/TestCode'
import RegisterScreen from './src/screen/RegisterScreen'
import { store } from './src/redux/store/Store'
import { Provider } from 'react-redux'
import LoginScreen from './src/screen/LoginScreen'
import firebase from '@react-native-firebase/app';



console.log("firebase cheking the data like i have integrated correct!!!",firebase.apps.length)
const App = () => {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>

  )
}

export default App;
