import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity,Image,TouchableNativeFeedback} from 'react-native';


import {  BannerAd, BannerAdSize} from '@react-native-firebase/admob';


const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const finalscreen = ({route,navigation}) => {
  const prearray = route.params 
  const [alpcounter, setalpcounter] = useState(0);
  let R1ph = ["A","F","K","P","U"]
  let R2ph = ["B","G","L","Q","V"]
  let R3ph = ["C","H","M","R","W"]
  let R4ph = ["D","I","N","S","X"]
  let R5ph = ["E","J","O","T","Y"]
  let R6ph = ["Z"," "," "," "," "]
  
  // STATE FOR STORING SELECETED ARRAY
  const [USAR,SETUSAR] = useState([])
  const word = []
  let r1ph = []
  let r2ph = []
  let r3ph = []
  let r4ph = []


 



  //apply row new set logic 

 if(prearray[0] == 1) r1ph = R1ph
 if(prearray[1] == 1) r2ph = R1ph
 if(prearray[2] == 1) r3ph = R1ph
 if(prearray[3] == 1) r4ph = R1ph

 

 if(prearray[0] == 2) r1ph = R2ph
 if(prearray[1] == 2) r2ph = R2ph
 if(prearray[2] == 2) r3ph = R2ph
 if(prearray[3] == 2) r4ph = R2ph


 if(prearray[0] == 3) r1ph = R3ph
 if(prearray[1] == 3) r2ph = R3ph
 if(prearray[2] == 3) r3ph = R3ph
 if(prearray[3] == 3) r4ph = R3ph



 if(prearray[0] == 4) r1ph = R4ph
 if(prearray[1] == 4) r2ph = R4ph
 if(prearray[2] == 4) r3ph = R4ph
 if(prearray[3] == 4) r4ph = R4ph



 if(prearray[0] == 5) r1ph = R5ph
 if(prearray[1] == 5) r2ph = R5ph
 if(prearray[2] == 5) r3ph = R5ph
 if(prearray[3] == 5) r4ph = R5ph
 


 if(prearray[0] == 6) r1ph = R6ph 
 if(prearray[1] == 6) r2ph = R6ph
 if(prearray[2] == 6) r3ph = R6ph
 if(prearray[3] == 6) r4ph = R6ph



 else("ERROR")


if(USAR.length) {
  if(USAR[0] == 1) word.push(r1ph[0])
  if(USAR[0] == 2) word.push(r1ph[1])
  if(USAR[0] == 3) word.push(r1ph[2])
  if(USAR[0] == 4) word.push(r1ph[3])
  if(USAR[0] == 5) word.push(r1ph[4])




  if(USAR[1] == 1) word.push(r2ph[0])
  if(USAR[1] == 2) word.push(r2ph[1])
  if(USAR[1] == 3) word.push(r2ph[2])
  if(USAR[1] == 4) word.push(r2ph[3])
  if(USAR[1] == 5) word.push(r2ph[4])



  if(USAR[2] == 1) word.push(r3ph[0])
  if(USAR[2] == 2) word.push(r3ph[1])
  if(USAR[2] == 3) word.push(r3ph[2])
  if(USAR[2] == 4) word.push(r3ph[3])
  if(USAR[2] == 5) word.push(r3ph[4])


  if(USAR[3] == 1) word.push(r4ph[0])
  if(USAR[3] == 2) word.push(r4ph[1])
  if(USAR[3] == 3) word.push(r4ph[2])
  if(USAR[3] == 4) word.push(r4ph[3])
  if(USAR[3] == 5) word.push(r4ph[4])


}








































  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'skyblue',
          height: 90,
          width: 90,
          borderRadius: 90,
          alignSelf: 'center',
          top: 30,
        }}>
        <Text
          style={{
            textAlign: 'center',
            top: 0,
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {alpcounter}
        </Text>
      </View>
      <View
        style={{flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            USAR.push(1)
        }}>
            <View
              style={{
                backgroundColor: 'orange',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
                {"\n"+r1ph[0]}
              </Text>
              <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              { "\n"+r2ph[0]}
            </Text>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              {"\n" + r3ph[0]}
            </Text>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              {"\n" + r4ph[0]}
            </Text>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              
            </Text>
              
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            USAR.push(2)
        }}>
            <View
              style={{
                backgroundColor: 'orange',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              {"\n"+r1ph[1]}
            </Text>
            <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            { "\n"+r2ph[1]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r3ph[1]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r4ph[1]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
          
          </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            USAR.push(3)
        }}>
            <View
              style={{
                backgroundColor: 'orange',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              {"\n"+r1ph[2]}
            </Text>
            <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            { "\n"+r2ph[2]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r3ph[2]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r4ph[2]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
          
          </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            USAR.push(4)
        }}>
            <View
              style={{
                backgroundColor: 'orange',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              {"\n"+r1ph[3]}
            </Text>
            <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            { "\n"+r2ph[3]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r3ph[3]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r4ph[3]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            
          </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            USAR.push(5)
            console.log(` value is ------->>>${USAR}`)
        }}>
            <View
              style={{
                backgroundColor: 'orange',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              {"\n"+r1ph[4]}
            </Text>
            <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            { "\n"+r2ph[4]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r3ph[4]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
            {"\n" + r4ph[4]}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
           
          </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            USAR.push(6)
            console.log(USAR)
        }}>
            
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignSelf:"center",bottom:20}}>
    <TouchableNativeFeedback onPress={()=>{
      navigation.replace("showname",word)
      console.log(USAR);
      console.log(word);
    }} 
    >
     <View style={{flexDirection:"row",width:208,backgroundColor:"#B1E2EF",height:40,borderRadius:20,elevation:7}}>
     <Image style={{height:50,width:50,bottom:7}} source={require("../assets/magichat.png")} >
     </Image>
     <Text style={{top:8,left:10,fontSize:16 ,color:"#6A54AE"}}>Read my mind!</Text>
     </View>
    </TouchableNativeFeedback>
      </View>
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
  );
};

export default finalscreen;
