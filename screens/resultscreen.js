import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity,Image,Pressable,Modal,StyleSheet} from 'react-native';
import {Button} from "native-base"
import {  BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const resultscreen = ({navigation}) => {
  const [alpcounter, setalpcounter] = useState(0);
  const [r1, setr1] = useState('\nA\n\nF\n\nK\n\nP\n\nU');
  const [r2, setr2] = useState('\nB\n\nG\n\nL\n\nQ\n\nV');
  const [r3, setr3] = useState('\nC\n\nH\n\nM\n\nR\n\nW');
  const [r4, setr4] = useState('\nD\n\nI\n\nN\n\nS\n\nX');
  const [r5, setr5] = useState('\nE\n\nJ\n\nO\n\nT\n\nY');
  const [r6, setr6] = useState('\nZ');

  // STATE FOR STORING SELECETED ARRAY
  const [usar,setusar] = useState([])

  const [modalVisible, setModalVisible] = useState(false);


//  let btn = true

//  if(usar.length == 4) btn = false



  return (
  
    <View style={{flex: 1}}>

  
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
     
      setModalVisible(!modalVisible);
    }}

  >
     <View style={{flex:1,flexDirection:"column"}}>
    <View style={styles.modalView}>
    <View style={{alignSelf:"center"}}>
    <Text style={{fontSize:17,fontWeight:"bold",borderBottomWidth:1,borderBottomColor:"purple"}}>
  {`How to use the psychic app !`}
    </Text>
    <Text style={{top:40}}>
    {`-> Think about any 4 letters word!

Step1 - Then press the row in which your 1 letter lies!

Step2 - Then press the row in which your 2 letter lies!

Step3 - Then press the row in which your 3 letter lies!

Step4 - Then press the row in which your 4 letter lies!

Step5 - Then click on next!

Step6 - Repeat 2,3,4,5 steps and click on read my mind!

`

}
    </Text>


    
   


    <Pressable
    style={[styles.button, styles.buttonClose]}
    onPress={() => setModalVisible(!modalVisible)}
  >
    <Text style={styles.textStyle}>Close</Text>
  </Pressable>
    

    </View>
    </View>
    </View>
   
  </Modal>
 


    <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:5,right:3,elevation:100}}>
    <Pressable onPress={() => setModalVisible(true)}>
    <Image style={{height:30,width:30,}} source={require("../assets/info.png")}></Image>
    </Pressable>
    </View>
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
            usar.push(1)
        }}>
            <View
              style={{
                backgroundColor: 'pink',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
                {r1}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            usar.push(2)
        }}>
            <View
              style={{
                backgroundColor: 'pink',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
                {r2}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            usar.push(3)
        }}>
            <View
              style={{
                backgroundColor: 'pink',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
                {r3}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            usar.push(4)
        }}>
            <View
              style={{
                backgroundColor: 'pink',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
                {r4}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            usar.push(5)
            console.log(usar)
        }}>
            <View
              style={{
                backgroundColor: 'pink',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
                {r5}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setalpcounter(alpcounter <4 ?  alpcounter + 1 : 4)
            usar.push(6)
            console.log(usar)
        }}>
            <View
              style={{
                backgroundColor: 'pink',
                width: 0.13 * w,
                height: 0.4 * h,
                borderRadius: 14,
                elevation: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
                {r6}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignSelf:"center",bottom:20}}>
      <Button rounded info disabled={usar.length == 4 ? false : true }  style={{paddingHorizontal:30}} onPress={()=> {
        navigation.navigate("finalscreen",usar)
        setusar([])
        setalpcounter(0)
    }} >
      <Text style={{color:"white"}}>NEXT</Text>
    </Button>
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








const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
   
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical:0.01*h,
    paddingHorizontal:0.01*w,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  button: {
    borderRadius: 20,
    padding: 4,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop:40
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
 
});


export default resultscreen;
