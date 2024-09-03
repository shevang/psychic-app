import React from "react";
import { View,Text} from "react-native";
import LottieView from 'lottie-react-native';
import { BannerAd, BannerAdSize} from '@react-native-firebase/admob';








const showname = ({route}) => {
  // const [hen,sethen] = useState("emoji1")

   
   // if(b == 2 ) var f = "emoji2"
    // if(b == 3 ) var f = "emoji3"
    // if(b == 4 ) var f = "emoji4"
    // if(b == 5 ) var f = "emoji5"
   

 
    
    
    
     


 






  
   
  

    let word = route.params
     
    if(word.length == 0) word = "You have not thought any word !"
    if(word.length < 4) word  = "Please think about 4 words !"
    else word = word 




    return(
      <View style={{flex:1}}>
    <View style={{justifyContent:"center",alignItems:"center"}}>
    
    <LottieView source={require("../assets/emoji4.json")} autoPlay={true} loop={true} style={{width:460,alignSelf:"center",top:20}} />
    <Text style={{fontSize:20}}>I think your word is</Text>
    <Text style={{fontSize:30,top:30,borderBottomWidth:1,borderBottomColor:"#FF9834",color:"#3D2222"}}>{word}</Text>
    
    
    </View>
    <View style={{flex:1,justifyContent:"flex-end",flexDirection:"column"}}>
    <BannerAd
unitId={"ca-app-pub-1985320064842074/7544747988"}
size={BannerAdSize.SMART_BANNER}
requestOptions={{
requestNonPersonalizedAdsOnly: true,}}
onAdLoaded={() => {
console.log('Advert loaded');}}
onAdFailedToLoad={(error) => {
console.log('Advert failed to load: ', error);}}
/>
</View>
    </View>
    )
}





























export default showname