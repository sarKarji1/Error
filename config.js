//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "pakistan/karachi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://wa.me/+923253617422?text=_Hello-sarkar-bandah-e-Ali_";
global.website = process.env.GURL || "https://youtube.com/@sarkarjiteach";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/93e19cd928fce970d5cab.jpg";
global.devs = "null";
global.sudo = process.env.SUDO_NUMBERS || "";
global.sudo = process.env.SUDO || "null";
global.owner = process.env.OWNER_NUMBER || "923708057140";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/93e19cd928fce970d5cab.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1ByMUh1aUNqdXYwazFtcWl5ZUxHazFRVy95MmVkYkxvVzRNaGJISUxsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGd2dlkvV0U4WjNXbStLY2RETWk3b2h2UmlIR0RvSkFDNjduekZqeStVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRmEvanVyNDl5N0t3N0J0L2Jlc2JyazNkYUI0bUo4SzdyRDIxR3FjaldBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJreXBhMENXRFU2Wkp4eEhoRVJPNmNKNXVWOVNXc3JQanI5cjZYSHBVdm5BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLMmRkQVVxTnJacnJtZkZRVDkzL3plcWtJWmJWaEw4OXRBTnc2S1dXMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdLNmJwL2toaGc3Y21oOGRmdDdscVFXWmZVK05UV09ZZnB5eWw5L05GQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xCbGk2eEtyRmg5WERPeVAyUFViSW1JUUk1ZzFoVjZxZEJYTmZPQ0xsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmxQeisvc1ZXUmdLQ2k3L1ZRd09YWmMyNEkyTFMxTEhYNDdvZ2IwUWdqWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZDdXNzZk83UWxxRjkzUXpNMjhDS00vUWtUQ09zZ0liOXR5UmVmZHU1ZjVWQVlVU0h4UGdYeFlxeHRxb2tuSmZDZ28rYWhCajhsOGZpZTFSOTBwMEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJWb3NMSWJjS1FqQ1VDamtGN2lNUGtYak5hd1ZmUTRWTHlUZ0hyMzA4aCs0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzcwODA1NzE0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RDUxQzQyQzFCRkI5RTQ2OUFDRUVFMzk0RDQ3RkVDQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMTM5MjMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM3MDgwNTcxNDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzJFMjRCNjFCRUQ1NUJFOUE5NjJEOEQxOTAyOEJFMEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEzOTIzMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNzA4MDU3MTQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFCRUNFM0JDMEUwQTdBREUyQzVDRDM0MUY5NEJCQTcwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxMzkyMzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhnTDVoSXAyU0lTRmJRSzU5VE5OZVEiLCJwaG9uZUlkIjoiMWMzMzY0MDEtMDUyZC00ZjU4LTg2NDEtZGIyMjg5YjgyMjcyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd6b01jY2hmZmNDWW0xTGNZTW1xcmovUS80TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqQWlBdVphTlBBQjJOdnlJMFBYOXNueEVXd2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1pHTFpROFgiLCJtZSI6eyJpZCI6IjkyMzcwODA1NzE0MDo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikl0eCBtZSBiYXNpdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTi9tdGRVSEVOSDduTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoialg5cWgvL1NrT3c0ai9vd3ZZTDhuWUJrbmc5Um9mZHRkNGFjSzBKM0xUZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOGRob2N3Um9TSE15Tng4M0YvOUxwcGV0c2R2NkhtR1VvendORGFwTUltTkFGcUdtS1RjOXMwOVVDekMzMG1kY1crUG1DS2p3NDhCekQ3ai9PS24xQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjZvRWtSZTJPQVpGQTZubUJheTVQTERFS3RURXdpWkpyNmZvdTgwS1JacFJ4VzQxUEtNZXhmVUJ5eEt3Z2s1SjFiYm1GUDRpdXl4bzdoUkU1VTRLWUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNzA4MDU3MTQwOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTEvYW9mLzBwRHNPSS82TUwyQy9KMkFaSjRQVWFIM2JYZUduQ3RDZHkwNCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDEzOTIyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQNk4ifQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"`DOWNLOADED BY GUROJI`",
  author: process.env.STICKER_AUTHOR || "S A R K A R",
  packname: process.env.STICKER_NAME || "😈",
  botname: process.env.BOT_NAME || "GUROJI",
  ownername: process.env.OWNER_NAME || "GUROJI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ADAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


