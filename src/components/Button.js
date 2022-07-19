import React from 'react';
import {Text, TouchableOpacity, View,Image} from 'react-native';

import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Spinner from '../components/Spinner';
import LinearGradient from 'react-native-linear-gradient';

export const Button = props => {
  const {
    isError,
    buttonContainer = {},
    textStyleProps = {},
    text,
    isLoading = false,
    spinnerSize = 'small',
    spinnerColor = '#F1F1F1',
   onPress,
    hasIcon,
    iconName,
    iconColor = '#3a3838',
    iconSize,
    money,
    callIcon,
    buttonDisable,
    source,
    useDefaultDisableStyle = true,
    hasImage,
    imagesource
  } = props;
  //const styles = create(style, 'Button');

  const buttonExtraStyle = isError ? style.errorContainer : {};

  const disabledButton =
    buttonDisable && useDefaultDisableStyle === true
      ? {backgroundColor: '#F1F1F1'}
      : {};

  const disableButtonText =
    buttonDisable && useDefaultDisableStyle === true ? {opacity: 0.5} : null;
  return (
    <LinearGradient colors={['#16B2F5', '#0385BC'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

      style={[
       style.container,
        buttonContainer,
        buttonExtraStyle,
        disabledButton,
      ]}>
      <TouchableOpacity
       disabled={buttonDisable}
        style={style.Button}
       onPress={()=>onPress()}
        >
        {/* {hasIcon && <Icon name={iconName} color={iconColor} size={iconSize} />} */}
        {hasImage && <Image source={imagesource} style={style.images}  />}
        <Text style={[style.text, textStyleProps, disableButtonText]}>
            {text}
          </Text>
        {isLoading === true && (
          <Spinner size={spinnerSize} color={spinnerColor} />
        )}
      </TouchableOpacity>
      </LinearGradient>

  );
};

const style = StyleSheet.create({
  Button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:5,
    fontFamily:"IRANSansBold",

  },
  errorContainer: {
    backgroundColor: '#8D8D8D',
  },
  container: {
    alignSelf: 'center',
    // backgroundColor: '#FAAA1A',
    height: responsiveHeight(5),
    width: responsiveWidth(68),
    borderRadius:5,


  },
  text: {
    // font: {
    //   size: '16f',
    //   weight: 'SemiBold',
    //   family: '$mainFontName',
    // },
    fontSize:17,
    textAlign: 'center',
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    fontFamily:"IRANSansBold",
  },

  callIcon: {
    // fontSize: '20i',
    fontSize:10,

  },
  images: {
    // fontSize: '20i',
   // fontSize:10,
height:30,
width:30,
marginLeft:5
  },
  moneyStyle: {
    // font: {
    //   size: '18f',
    //   weight: 'SemiBold',
    // },
    fontSize:10,

    textAlign: 'center',
  },
});

