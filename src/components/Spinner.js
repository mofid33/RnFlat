import React from 'react';
import {ActivityIndicator} from 'react-native';

export default ({isLoading = true, ...props}) => {
  return isLoading ? <ActivityIndicator {...props} /> : null;
};
