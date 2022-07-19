import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
//import {create} from 'nahira-react-native-style-sheet';
//import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import { myFontStyle } from "@assets/Constance";


export const Input = props => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const {
    ErrorText,
    isPassword,
    keyboardType,
    maxLength,
    editable,
    placeholder,
    multiline,
    value,
    title,
    chevron,
    onChangeText,
    inputStyle = {},
    containerInputStyle = {},
    inputProps,
    leftIconName = null,
    leftIconStyle = {},
    containerStyle = {},
    inputTitle,
    inputTitleStyle,
    isIconLeft,
    placeColor
  } = props;

  // const styles = create(style, 'Input');

  return (
    <View style={[styles.page, containerStyle]}>
           {/* <TouchableWithoutFeedback  onPress={() =>  setModalVisible(false)}> */}
{/*
<Modal isVisible={modalVisible} style={{justifyContent:'flex-end'}} >
<View style={{backgroundColor:'#fff',alignItems:'flex-start'}}>
</View>
</Modal> */}
{/* </TouchableWithoutFeedback> */}
      {inputTitle && (
        <Text
          style={[
            styles.title,
            inputTitleStyle,
            ErrorText && styles.titleErrorStyle,
          ]}>
          {inputTitle}
        </Text>
      )}

      <View style={styles.inputContainer}>
        {leftIconName && (
          <Icon
            name={leftIconName}
            color={leftIconStyle.color}
            style={leftIconStyle}
          />
        )}

        <TextInput
          editable={editable}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#BCC0C8"}
          multiline={multiline}
          onChangeText={onChangeText}
          maxLength={maxLength}
          underlineColorAndroid="transparent"
          style={[
            styles.textInput,
            inputStyle,
            ErrorText && styles.inputErrorStyle,
          ]}
          secureTextEntry={isPasswordHidden && isPassword}
          keyboardType={keyboardType}
          {...inputProps}
        />
        {isPassword ? (
          <TouchableOpacity
            // style={styles.watchPasswordButton}
            style={styles.watchPasswordButtonLeft}

            onPress={() => {
              setPasswordHidden(!isPasswordHidden);
            }}>
            <Icon
              size={25}
              name={isPasswordHidden === true ? 'remove-red-eye' : 'eye-off'}
              color={Colors.appColor}
            />
          </TouchableOpacity>
        ) : null}
                {isIconLeft ? (

         <TouchableOpacity
            style={styles.watchPasswordButtonLeft}
            // onPress={() => {
            //   setModalVisible(!modalVisible);
            // }}
            >

            <Icon
              size={25}
              name={isIconLeft}
              color={Colors.appColor}
            />
          </TouchableOpacity>
                ):null}
      </View>

      {ErrorText && ErrorText!=" " ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTextStyle}>{ErrorText}</Text>
        </View>
      ) : (
        <View />
      )}

    </View>
  );
};

const styles =StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: responsiveWidth(75),
    height: responsiveHeight(8),
   borderWidth: 1,
    paddingHorizontal: 15,
    borderColor: Colors.borderColor,
    // fontFamily:"IRANSans",
...myFontStyle.mediumRegular,
   // borderColor: '#CECECE',
    // backgroundColor: '#FFFFFF',
    marginTop: 10,
    color: '#000000',

    borderRadius:15,
    paddingTop:10,
    textAlign:'right'
    // backgroundColor:'#f3f3f3'
  },

  // watchPassword: {
  //   // fontSize: '16i',
  // },
  // IconLeftFont: {
  //   // fontSize: '10i',
  // },
  watchPasswordButton: {
    width: 24,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  watchPasswordButtonLeft: {
    width: 24,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  errorTextStyle: {
    // font: {
    //   family: '$mainFontName',
    //   size: '13f',
    // },
    color: '#FF6161',
    marginTop: 4,
    // width: 312,
  },
  errorContainer: {
    backgroundColor: 'transparent',
  },
  title: {
    // font: {
    //   size: '14f',
    //   weight: 'Medium',
    // },
    color: '#3A3838',
    textAlign: 'left',
    minHeight: 0,
  },
  inputErrorStyle: {
    borderColor: '#FF6161',
    color: '#FF6161',
  },
  titleErrorStyle: {
    color: '#FF6161',
    // width: 312,
  },
});

