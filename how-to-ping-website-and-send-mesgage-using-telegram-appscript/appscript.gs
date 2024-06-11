const URL = '';
const BOT_TOKEN = '';
const CHAT_ID='';
function ping() {
  const res = UrlFetchApp.fetch(URL);
  if(res.getResponseCode() !== 200){
      sendTele("Web is down");
  }
  else{
    //sendTele("Web is up");
  }
}
function sendTele(message){
  const payload = {
    chat_id:CHAT_ID,
    text:message
  };

  const options = {
    method:'POST',
    contentType:'application/json',
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch('https://api.telegram.org/bot' + BOT_TOKEN +'/sendMessage',options)
}