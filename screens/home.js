import React ,{useEffect} from "react";
import {View , Text} from "react-native";
import LottieView from 'lottie-react-native';
import {Button} from "native-base"
import SplashScreen from 'react-native-splash-screen'








const Homescreen = ({navigation})=>{
  useEffect(()=>{

    SplashScreen.hide()
    
})
    return(
    <View style={{flex:1,flexDirection:"column"}}>
    <View style={{backgroundColor:"#FFD5D5",top:20,borderRadius:10,marginHorizontal:20,elevation:1}}>
    <Text style={{textAlign:"center",fontSize:34,borderBottomColor:"#F31470",borderBottomWidth:1,borderRadius:15}}>Psychic App</Text>
    </View>
    
    <LottieView source={require("../assets/thinking.json")} autoPlay={true} loop={true} style={{width:300,alignSelf:"center",top:20}} />
    <View>
    <Text style={{textAlign:"center",top:80}}>Think of any word in your mind
    {'\n'}
    and this app will tell you your secret word!
    </Text>
   
    </View>
    <View style={{flex:1,alignSelf:"center",justifyContent:"flex-end",bottom:20,}}>
    <Button danger style={{paddingHorizontal:26}} 
    onPress={()=> navigation.navigate("resultscreen")}
    >
    <Text>Get started</Text></Button>
    </View>
    </View>
    )
  }
  
  
  export default Homescreen