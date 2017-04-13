import { Dimensions } from 'react-native';

export function vw(percentageWidth) {

  return Math.floor(Dimensions.get('window').width * (percentageWidth / 100));
}

export function vh(percentageHeight) {
  return Math.floor(Dimensions.get('window').height * (percentageHeight / 100));
}

export default function(value, type) {
  return (type === 'vh') ? vh(value) : vw(value);
}