import { responsiveFontSize } from "react-native-responsive-dimensions";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

//myFonts
const myFontFamily = {
  Bold: "IRANSansBold",
  regularItalic: "RadomirTinkov-Gilroy-RegularItalic",
  Medium: "IRANSans",
  UltraLight: "RadomirTinkov-Gilroy-UltraLight",
}

//myFontStyle
export const myFontStyle = {
  smallBold: {
    fontFamily: myFontFamily.Bold,
    // fontSize: 10,
    fontSize: RFPercentage(1.25),
  },
  mediumBold: {
    fontFamily: myFontFamily.Bold,
    // fontSize: 13,
    fontSize: RFPercentage(1.5),
  },
  normalBold: {
    fontFamily: myFontFamily.Bold,
    // fontSize: 16,
    fontSize: RFPercentage(1.75),
  },
  largBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: RFPercentage(2),
  },
  UltraBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: RFPercentage(2.5),
  },bookTitle: {
    fontFamily: myFontFamily.Bold,
    fontSize: RFPercentage(2.7),
  }, bookWriter: {
    fontFamily: myFontFamily.Medium,
    fontSize: RFPercentage(2.5),
  },bookWriter2: {
    fontFamily: myFontFamily.Medium,
    fontSize: RFPercentage(2.2),
  },
  bookWriter3: {
    fontFamily: myFontFamily.Medium,
    fontSize: RFPercentage(2),
  },
  smallRegular: {
    fontFamily: myFontFamily.regularItalic,
    // fontSize: 10,
    fontSize: RFPercentage(1.25),

  },
  mediumRegular: {
    fontFamily: myFontFamily.Medium,
    // fontSize: 13,
    fontSize: RFPercentage(1.5),

  },
  normalRegular: {
    fontFamily: myFontFamily.Medium,
    // fontSize: 16,
    fontSize: RFPercentage(1.75),

  },
  largeRegular: {
    fontFamily: myFontFamily.Medium,
    fontSize: RFPercentage(2.2),
  },episodeName: {
    fontFamily: myFontFamily.Medium,
    fontSize: RFPercentage(2.5),
  }
  ,menu: {
    fontFamily: myFontFamily.Medium,
    fontSize: RFPercentage(1.5),
  },
  smallUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(1),
  },
  mediumUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(1.5),
  },
  normalUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(1.75),
  },
  largUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(2),
  },btnBold:{
    fontFamily:myFontFamily.Bold,
    // fontSize:responsiveFontSize(2),
    fontSize:RFPercentage(1.75),
  }
  ,textOnImg:{
    fontFamily:myFontFamily.Bold,
    fontSize:responsiveFontSize(2.25),
  },rate:{
    fontFamily:myFontFamily.Bold,
    fontSize:responsiveFontSize(6),
  }
}
