
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU2bKiSBD9l3rFaIVik4gbMQioKCjuy8Q8gBRY7BaFgh3++wR6b/eN6JmeOzwVtWSec/JkfgdZjks0RQ1QvoOC4KtLUbukTYGAAgZVECACOsB3qQsUcJqSmz6M94Lf8/sOe9Qkhu8nslY70369H4+oed1CsrjUqf0GHh1QVF6CT78JKJnb7qIKdfkeCr2BpOlp02ymTM5cluzK3qtRtihmzuhaL4038GgjupjgLDSKM0oRcZMpahwXky/Ct9V5tlzpB6lXW/i63BS8bqgTArddcZ5I9qzqatZ01eQ782vwfSScI9vYSGEGrfuyWW+ibqqKg8OuyYW0Rt3uFu5O9/CyXbzglzjMkG/6KKOYNl/WvdKLw83w1G6PNmNH34bMPk5qXB1t2xhtrSXeVUI8IAkbl18DvrvYch2m+SKbexD2q+Y4Q/bacQovXNy9Kqq7Dj9hRnO0Nj4Dd8iHV+L/ozty9u5eZc1yW0nSYqPJEizRIunn19Xiap5nsXUV94mKVfhF3Q8mm0RF7FnbpQGxhPvZMtriwJ4k0DtE5AiHhhqw2eSYfILv0or8DuX44MVJ4i1mMbueiHc9SAbebQ2bkS8uGztZjyDDLK28x+SYbtj+bmSlN3uhT7xxOFnO5GB/Onn3vTqNslVaWPNNhGbNYPH2ZBSjxvSBwj46gKAQl5S4FOfZc0/mOsD1ryt0Iog+5QX8cb49i+ecTCUW36Mmk/b66jgPyt19JKt0Z18mzEAt0uwmv4EOKEh+QmWJ/DEuaU4aG5WlG6ISKH8+K9WSJijNKZpgHyiAE3iJF3jISpD/o/x2O7u0dIviW4Yo6ICA5KmNgEJJhTrg+UASdVHiWVmToTDkOCiygiixkGdZTRsKYq+lmL6SrnGKSuqmBVBYSegJfbEv9h5/dUCGavryT8taZDsgwKSkm6wqktz1P8z1ceieTnmV0VWTnbR2gQhQej+3EaU4C8uWWZW55HTGV6S1PIASuEmJfgiNCPI/uLwPDy332/prs73GHWQetNjbQL9oo0DxV3mS5zUWclKf41gZcgILufZme/D4gbAN6CPq4qRsc5nWSb7cDGM2FqFsjkYDM1S1UAU/GX049OUAj/e8SzqGjlTCcOdF8ZrC9disDryjXpKoa2yi7HAVLLjdvP1DEKCALC65XncI53h6IexqHKsOheEwHFZudQyFiekd717sG1Wy9++ynVkxlMVgmXM3Lm3oCuXZbI6YmqizHscF9/JwPY/V1s4d4KMrPqHPyWZ6oVshE43GBB6qC96cB7uRXu9zMvDDXB4nDE+OKj90ZM+UFru4kdzLxPYsfh5K7Na6R+tEvQ40iKXcPonTZrznz9rt1TvP3k3eZyZ+dzV+/gYYPUdQ5rYV/O/avYC3Fus9Op9ivA+1fxkMgx0z4sTi3L8z0owfprxgSH6vbqx0rt+mxaFbD02Bs5hVn92CR+v1InFpkJMUKMDNfJJjH3QAyavWs2YW5L9Jpqkb0whfzBO3pOrPPviH1hKE1y2H5MXYLc9AAXDZP8J+a+pGLYoVdelHWwG1/az6Dh5/AwF4z5L5BwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤,💙,👌,😎,🎶,😐,🙄,🤐,💀,🦘,🐘,🐊,🐳,🦈,🪸,🦚,🦋,🕷️,🕸️,🪳,🐜,🐝,👥,👀,👣,👨‍✈️,🧎‍♂️‍➡️,🏃‍➡️,🕺,🛌,🛀,⛹️,💪,🫵,🖖,🫵,🫸,✋,🤼‍♂️,✍️,🎈,🎉,🥼,🪭,🎵,🎤,🎸,🎹,🩺,💊,⚖️,📱,💡,🕯️,📍,⌛,🍲,☕,🍻,🍸,🍇,🌸,💐,🌻,🪴,🌵,🌿,🍀,🥀,🍁,🍂,🪺,🛬,🛫,🚀,🚧,🪐,🏝️,♨️,🌔,🌟,❄️,💫,🕳️,💥,⚕️,♾️,㊗️,🔕,🔞,💯,〽️,🔆,✅,🛜", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
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
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ cHANGAWa ",
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
