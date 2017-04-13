import num from 'numeral';
import language from 'numeral/locales/da-dk';

import log from './logError';

const defaultFormat = '0,0';
// numeral defaults
num.defaultFormat(defaultFormat);
num.locale('da-dk');

export default function(value, format = defaultFormat) {
  let result = parseFloat(value);
  
  if (typeof result === 'number' && isNaN(result)) {
    log('value provided to numberFormat is NaN');
    result = value;
    return result;
  }

  return num(result).format(format);
}  
