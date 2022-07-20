import React, {useState,useContext ,useEffect,useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Animated} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';

import { myFontStyle } from "@assets/Constance";
import ViewSlider from 'react-native-view-slider';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import {getNames,namesUpdate} from '@services/homeService';


// create a component


export const truncate = (str, len) => {
    // console.log("truncate", str, str.length, len);
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };
 
 const Home = ({navigation }) => {
  
  const [data,setData]=useState([]);
 
  const scrollY = React.useRef(new Animated.Value(0)).current;


  useEffect(() => {
    var ss=getNames()
if(ss.length==0)
{

  mutLogin();

}
else{

  setData(getNames())
}


}, []);
  const  mutLogin=async()=> {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
  
      console.log(123456);
      console.log(response.data[0].name);
      namesUpdate(response.data)
        setData(response.data)
        
    })
    .catch(function (error) {
      console.log(error);
    });
  
    };
  const keyExtractor = item => {
    return item.id;
  };

  const _render = (item, index) => {
    const inputRange = [
      -1,
      0,
      (10 * 0.1 + 15) * 2,
      (10 * 0.1 + 15) * (2 + 3),
    ];
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const Offset = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 0, 500],
    });
    return (
      <Animated.View  style={[styles.cardBox,{     transform: [{ translateX: Offset }],
      opacity: opacity,}]}>
      <Text style={styles.userName}>
{item.item.name}
      </Text>
      <Text style={styles.email}>
{item.item.email}
      </Text>
      <Text style={styles.email}>
{item.item.phone}
      </Text>
      <Text style={styles.email}>
{item.item.username}
      </Text>
     </Animated.View>
    );
  };

return (

   
 
     
       <ScrollView >
  <View style={styles.container}>


              <Animated.FlatList
          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          // horizontal={true}
          style={{margin:responsiveHeight(3)}}
          
        />
          
         
        
   
  
  


   </View>
  </ScrollView>

 )}


const styles = StyleSheet.create({
  
    container: {

        paddingBottom:responsiveHeight(2),
        marginTop:responsiveHeight(5),
    },
  
    cardBox: {
        paddingRight:responsiveWidth(1),
        paddingLeft:responsiveWidth(5),
        paddingBottom:responsiveHeight(2),
   
        marginTop:responsiveHeight(2),
marginHorizontal:responsiveWidth(3),
marginVertical:responsiveHeight(1),
        height:responsiveHeight(15),
        borderRadius:15,
        backgroundColor:"#fff",
        elevation:5,
        shadowOpacity:1,
        shadowRadius:10,
        shadowOffset:5,
    },
    userName:{
      ...myFontStyle.normalBold,
  color:'#000',
    },
    email:{
      ...myFontStyle.mediumRegular,
      color:'#000',

    }

 
  });

  export default Home;

//make this component available to the <app></app>
