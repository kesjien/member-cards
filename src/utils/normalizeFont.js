import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const { width, height} = Dimensions.get('window');

export default function(fontSize) {
  return Math.round(( width * 0.006 ) * fontSize)
}