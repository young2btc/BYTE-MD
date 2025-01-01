
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": "",
  "ALIVE_IMG": "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": ".",
  "AUTO_READ_STATUS": true,
  "MODE": "public",
  "OWNER_NUMBER": "923072380380",
  "OWNER_NAME": "Hamza",
  "ALWAYS_ONLINE": true,
  "PRESENCE": "online",
  "OMDB_API_KEY": "76cb7f39",
  "READ_CMD": false,
  "AUTO_VOICE": false,
  "AUTO_STICKER": false,
  "AUTO_REPLY": false,
  "AUTO_REACT": false,
  "WELCOME": false,
  "ANTI_BAD": false,
  "ANTI_LINK": false,
  "ANTI_GROUP_LINK": false,
  "ANTI_DELETE": false,
  "ANTI_VIEW_ONCE": false,
  "ANTI_BOT": false,
  "PREMIUM_USERS": "",
  "COUNTRY_BLOCK": true,
  "COUNTRY_BLOCK_CODE": "972",
  "EMOJI": "🙄",
  "AUTO_TYPING": true
};
