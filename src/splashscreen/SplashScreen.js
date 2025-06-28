import React, { useEffect,useRef,useState } from 'react'
import {View,Text, Image,StyleSheet} from "react-native";
import Video from 'react-native-video';
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
    const navigation = useNavigation()
    const [isVideoFinished, setIsVideoFinished] = useState(false);
    const videoRef = useRef(null);
    useEffect(()=>{
       if (isVideoFinished){
        navigation.navigate("login")
       }
    },[isVideoFinished])

  return (
    <View style={styles.container}>
        <Video
        ref={videoRef}
        source={require('../../assets/video/bytenews.mp4')} 
        style={styles.backgroundVideo}
        resizeMode="cover"
        muted={true}
        onEnd={() => setIsVideoFinished(true)}
      />
      {/* <Image source={require("../../assets/images/splashImage.png")} height={"4%"} width={"4%"}></Image> */}


    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
        backgroundVideo: {
            position: 'absolute',
            width: '100%',
            height: '100%',
          },   
})
export default SplashScreen
