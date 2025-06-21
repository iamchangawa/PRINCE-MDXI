
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VVa5OiOBT9L/na1ggiAlZ11QKiguILbYSt/RAhPOQROgkqTPV/30K7d7pqZmd7+RRCuPecc8+9+Q5KnFK0QA0YfwcVSS+QoW7JmgqBMdDqKEIE9EAIGQRjoE+TxTGE7mFTbYdJw1XFabQQn5qpfdrawwQlZirN1lJhl8EzeOuBqj7lafCbgJbUrJX86vvJBcPNVRPidjhaHtNjH/IFXaTtcbusXlcru+gCdhFhStIyNqoEFYjAfIGaDUzJ1+Bjy7topkej5XRtkSAfVO6Sy3GmNaFqHDbtsnQdKzfRqbS/Br+xfGQrhRaXo5sXe5ZnMupYobAfyutTnRwvojg5o73blvQBn6ZxiUIzRCVLWfNl3fEsXuyR7SpD1zprRVVzfugeDxFs/VGw8jKHEZqpWr7J5a8BT2pvUh7T17ZvrLfpPiorzoiIp7p0ZV9Np9Wnfkv71pbbyZ+Bb8iHV7L/o/vIWNirtVD2l/puEuTy1U7aC0rUdt6fhjT3xf5twQuqdHG9r8HHR6V9DYjn8E40a852e51y00S7PVlTCZ4v7Lhjr9IhdK9q/AM+ZDX5HUpjoa0KttBHTjM6T+BUj5pRhTF/VJ3kddLyJ8MV8qdDEOe14qtClA0GqxEcvpr0RHg9hqXlxNnKE/kouoiG2he8hJ3j5zujDDVmCMb8Ww8QFKeUEchSXN73eKEHYHhxUEAQu8sLlgeNw7Mgp7NsiHTHxYkzkObItkdITBQ5xJF2WiYyFlv6DHqgIjhAlKJwnlKGSWMjSmGMKBj/ea9UR5qgAjNkpSEYg4E4lERBkhRuMPyDfrsmkFFYVd9KxEAPRAQXNgJjRmrUA/cfBGkwkTjOEFRVMYShpOqyphucJMkjTZDlSUexeCTdpwWiDBYVGPOSyA05kZfFt796oEQ39vBPx1rgeyBKCWWHsq5yDMMPc318hEGA65I5TRno3QIRMP60jRhLy5h2zOoSkiBJL0jveIBxBHOK/hEaERR+cHkfHjoOu/q7W8/xNksLdNi7QD9pM+bFn+XJH4qIoiRKwnAwkvnBqDvY7fdACbtYwIFhiSjtdHlH3CUIEYNpTrtBunbckthTY+nGvG3OZmoWq3qsgh8MPxz7cEQpzA4Tjy+Wu1uslAPNTDyRukEbepv1ebvLTwbJ19mGM27b518EAWOwv9XzeZlu5KvPCm2TECU8Tofo6q2yU8LO89fTLp4W/U31sp9Osv0siqgr5y/Em2V+ZUkNdG5q4y/kWjeWscYl0k64TdTnLluILmmAPiebUX17ehJwsdvme2ynCh7pySaTcJsszMSBbtCcX2Zo4V1XjIaGOL+ZS6Mf9rFx250kesSZZz011pk42/PkjLzkqZbS7aOX7r2cv8/Q9N3l6f01StF9JL1X4T9r+QDeWY57632K8T7k/mVQaL5yy9XByk+5wNv4SuyY7vo0LW3BnbSYM3z3thD31UTR7AN467xf5ZBFmBRgDGAZEny3CsF152GzjPDvrlz1YKrvUySHlKk/+uJXrTZ4nNoQXM0hTTqn7hRfUDqTN2pVOQyyjzYDavcs1zvw9jfjkXNJCQgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "CHANGAWA", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "SADNESS", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "SADNESS", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
