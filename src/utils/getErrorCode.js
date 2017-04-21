export default function(error) {
  const codemsg = {};

  return {
    msg: codemsg[+error.message] || `ERROR: ${error.message}`
  }
}
