//Loading element design

import React from 'react';
import { View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import LottieView from 'lottie-react-native';

const Loading = ({ icon, size, marginTop }) => {

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: marginTop }}>
      <LottieView
        style={{ width: responsiveHeight(size), height: responsiveHeight(size) }}
        source={icon} autoPlay loop />
    </View>
  );
};

export default Loading;
