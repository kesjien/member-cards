import { Crashlytics } from 'react-native-fabric';

import { Platform } from  'react-native';


let method;

if (Platform.OS === 'ios') {
  method = Crashlytics.recordError;
} else {
  method = Crashlytics.logException;
}

module.exports = method;
