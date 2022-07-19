
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import React, { useState,useEffect } from 'react';

export const   getTranslation=(key)=> {


  const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    // en: () => require("@spark/assets/i18n/en.json"),
    fa: () => require("@i18n/fa.json"),
    en: () => require("@i18n/en.json"),
  };
  const translate = memoize(
    ( key , config) => i18n.t(key, config),
    ( key , config) => (config ? key + JSON.stringify(config) : key)
  );
  const setI18nConfig =async () => {
    // fallback if no available language fits
    // const fallback = { languageTag:"en", isRTL: false };
    // var ss = this.getlang();
    var ss = await AsyncStorage.getItem('@langs');
    // var ss="fa"
    // if(!ss){
// console.log(89898)
// console.log(ss)
      if(ss==""||ss==null||ss.length>5){
      ss = "fa"
    }
    // console.log(getCurrentLanguage())
    // console.log(getLang())
    const fallback = { languageTag:ss, isRTL: false };

    const { languageTag, isRTL } =
      // RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback;

    // clear translation cache
    translate.cache.clear();
    // update layout direction
    // I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
  };
  setI18nConfig();
  // return key;
  return translate(key);
}

//   export default getTranslation;
