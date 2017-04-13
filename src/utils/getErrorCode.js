export default function(error) {
  const codemsg = {
    400: "Systemet er ikke tilgængeligt. Prøv igen senere. (400).", // "SERVER_TEMP_UNAVAILABLE",
    401: 'Ugyldigt CPR-nr. eller pinkode.', //"INVALID_CPR_CODE",
    402: 'Systemet er ikke tilgængeligt. Prøv igen senere. (402).', //"UNKNOWN_DEVICE",
    404: 'Ugyldig SMS kode.', //"INVALID_SMS_CODE",
    405: 'Din adgang er blokeret. Kontakt venligst SEB Pension. (405).', // "USER_LOCKED",
    500: 'Systemet er ikke tilgængeligt. Prøv igen senere. (500).', //"SERVER_ERROR",
  };

  return {
    msg: codemsg[+error.message] || `ERROR: ${error.message}`
  }
}
