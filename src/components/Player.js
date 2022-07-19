import React, { useState } from "react";
import PropTypes from "prop-types";
import TrackPlayer, {
//   useTrackPlayerProgress,
  useProgress,
  usePlaybackState,
  useTrackPlayerEvents,
  Event
} from "react-native-track-player";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from "react-native";
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';

import { Colors } from "@assets/Colors";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { myFontStyle } from "@assets/Constance";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
function ProgressBar({time,setPlay,setOffTime,setChecked,checked}) {
    const progress = useProgress();
console.log(parseInt(progress.position))
console.log(parseInt(progress.duration))
console.log(checked=="second" && parseInt(progress.position)==parseInt(progress.duration))
if(checked=="second" && parseInt(progress.position)==parseInt(progress.duration)){
  TrackPlayer.pause()


}
if(time){

 if( parseInt(progress.position)==time){
   TrackPlayer.pause()
   setPlay(false)
   setOffTime()
   setChecked("first")
 }
}
  return (
    <>
    <Slider
    style={styles.container}
    value={progress.position}
    minimumValue={0}
    maximumValue={progress.duration}
    thumbTintColor={Colors.darkGreen}
    
    minimumTrackTintColor={Colors.darkGreen}
    maximumTrackTintColor="#D3D3D3"
    onSlidingComplete={value => {
      TrackPlayer.seekTo(value);
    }}
  />
   <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          {new Date(progress.position * 1000).toISOString().slice(14, 19)}
        </Text>
        <Text style={styles.labelText}>
          {new Date((progress.duration - progress.position) * 1000)
            .toISOString()
            .slice(14, 19)}
        </Text>
      </View>
    
    </>
  );
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
async function seeks(type) {
  const currentTrack = await TrackPlayer.getPosition();
  const currentTrack2 = await TrackPlayer.getDuration();

console.log(currentTrack-10)
  if(type=="prev"){
    TrackPlayer.seekTo(currentTrack-10)
  }
  else{
    if(currentTrack+30<currentTrack2)
    {

      TrackPlayer.seekTo(await TrackPlayer.getPosition()+30)
    }
  }
}
export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState("");
  const [checked, setChecked] = React.useState('first');
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [offTime, setOffTime] = useState();
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
  const { style, onNext, onPrevious, onTogglePlayback,stop,isplay,setPlay,setIndex,index,type,id } = props;
  useTrackPlayerEvents(["playback-track-changed"], async event => {
    console.log(8956)
    console.log(index)
    // setPlay(false)
    if(type=="main")
   { 
    //  setIndex(index+1)
mutLogin()  }
    // if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
    //   const track = await TrackPlayer.getTrack(event.nextTrack);
    //   const { title, artist, artwork } = track || {};
    //   setTrackTitle(title);
    //   setTrackArtist(artist);
    //   setTrackArtwork(artwork);
    // }
  });

  var middleButtonText = "Play";

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = "Pause";
  }
  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");
    AsyncStorage.setItem('@bookid',id.toString())
    AsyncStorage.setItem('@epid',index.toString())
    const currentTrack2 = await TrackPlayer.getDuration();

    axios.post(apiUrl+'ReadCustomerWrite',{BookID:id,CustomerID:state,ReadTime:convertHMS(currentTrack2)})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(12345);
      console.log(currentTrack2);
      console.log(message);
  
      if(result == "true"){
      
        // togglePlayback()
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{
  
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
  
    };
  return (
    <View style={[styles.card, style]}>
      {/* <Image style={styles.cover} source={{ uri: trackArtwork }} /> */}
      <ProgressBar time={offTime} setPlay={setPlay} setOffTime={setOffTime} setChecked={setChecked} checked={checked}/>
      {/* <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text> */}
      <View style={styles.controls}>
        {/* <ControlButton title={"<<"} onPress={onPrevious} /> */}
        {/* <ControlButton title={middleButtonText} onPress={onTogglePlayback} /> */}
        <TouchableOpacity onPress={()=> seeks("prev")}  style={{flexDirection:'row'}}>

        <Icon name={"refresh"} size={40} color={Colors.darkGreen} style={{transform: [{rotateY: '180deg'}],marginHorizontal:responsiveWidth(5)}}/>
        <Text style={styles.prevSec}>10</Text>

</TouchableOpacity>
        {
            isplay?
            // <TouchableOpacity onPress={stop} style={{borderRadius:50,backgroundColor:Colors.white}}>
            <TouchableOpacity onPress={onTogglePlayback} >

<Icon name={"pause-circle-filled"} size={50} color={Colors.darkGreen}/>
</TouchableOpacity>
:
<TouchableOpacity onPress={onTogglePlayback}>

<Icon name={"play-circle-filled"} size={50} color={Colors.darkGreen}/>
</TouchableOpacity>
        }
<TouchableOpacity onPress={()=> seeks("next")} style={{flexDirection:'row'}}>

<Icon name={"refresh"} size={45} color={Colors.darkGreen}style={{marginHorizontal:responsiveWidth(5)}} />
<Text style={styles.nextSec}>30</Text>
</TouchableOpacity>
<TouchableOpacity onPress={toggleModal2} style={{marginHorizontal:responsiveWidth(1),}}>
        <Icon name={'access-time'} color={Colors.darkGreen} size={35}/>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible2} onBackdropPress={() => setModalVisible2(false)} >
 <View style={styles.editModal}>
   <Text style={styles.modalTitle}>
     زمان سنج توقف
   </Text>
   <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
    خاموش
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
   تا پایان اپیزود
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('third');setOffTime(300)}}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
 دقیقه 5
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('four');setOffTime(600)}}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
    دقیقه 10
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="five"
        status={ checked === 'five' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('five');setOffTime(900)}}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
    دقیقه 15
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="six"
        status={ checked === 'six' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('six');setOffTime(1800)}}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
    دقیقه 30
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="seven"
        status={ checked === 'seven' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('seven');setOffTime(2700)}}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
    دقیقه 45
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="eight"
        status={ checked === 'eight' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('eight');setOffTime(3600)}}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
    دقیقه 60
  </Text>
      </View>
  </View>
 </View>
 </Modal>

        {/* <ControlButton title={">>"} onPress={onNext} /> */}
      </View>
    </View>
  );
}

// Player.propTypes = {
//   style: ViewPropTypes.style,
//   onNext: PropTypes.func.isRequired,
//   onPrevious: PropTypes.func.isRequired,
//   onTogglePlayback: PropTypes.func.isRequired
// };

// Player.defaultProps = {
//   style: {}
// };

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    marginTop: 25,
    flexDirection: 'row',
  },
  nextSec: {
    color:Colors.darkGreen,
    position:"absolute",
  right:responsiveWidth(9.5),
  top:responsiveHeight(2),
   ...myFontStyle.smallRegular},
  prevSec: {
    color:Colors.darkGreen,
    position:"absolute",
  left:responsiveWidth(8.5),
  top:responsiveHeight(1.9),
   ...myFontStyle.smallRegular},
  labelContainer: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#000',
    fontVariant: ['tabular-nums'],
  },
  card: {
    // width: "80%",
    // elevation: 1,
    borderRadius: 4
    // shadowRadius: 2,
    // shadowOpacity: 0.1,
    // alignItems: "center",
    // shadowColor: "black",
    // backgroundColor: "white"
    ,alignItems:'center',
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  progress: {
    height: 1,
    // width: "100%",
    marginTop: 10,
    flexDirection: "row"
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
    marginVertical: 20,
    flexDirection: "row"
    ,alignItems:'center',
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center",

  },
  editModal:{
    width:responsiveWidth(80),
    backgroundColor:Colors.lightGreen,
    
    borderRadius:15,
    marginRight:'auto',
    marginLeft:'auto',
    borderRightColor:Colors.darkGreen,
    borderRightWidth:4,
    padding:20,

  },modalTitle:{
    ...myFontStyle.UltraBold,
    color:'#111',
    marginTop:responsiveHeight(1),

  },
  radionText: {
    color: '#111',
    ...myFontStyle.episodeName,
    // lineHeight:responsiveHeight(3)

  }
  ,radioView:{
    marginTop:responsiveHeight(2),
    display:'flex',
    flexDirection:'row-reverse',
    marginRight:responsiveWidth(10),
  },radioRow:{
    display:'flex',
    flexDirection:'row-reverse',
    borderBottomColor:'#c1c1c1',
    borderBottomWidth:0.5,
  } ,viewRadio: {flexDirection:'row',alignItems:'center'},
});