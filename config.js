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
global.sudo = process.env.SUDO_NUMBERS || "923253617422";
global.sudo = process.env.SUDO || "923253617422";
global.owner = process.env.OWNER_NUMBER || "923708057140";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ltZ2xlZmd6bFByY3oyUTlkQkE2clpHeGdhc1BRZTdsNXZDSlFQUkpYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hKVXFRa1dCVCtaMDRCdEhHbjQ0TWwwY01nbkIwNmI5WStxUWdSd3YwQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRkc1dS9RMGJMTTZkNVB2ak9xS0IvS1JTUmZOVlBNRjlWNHcvekh3MmtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q2VTUlpXb3BTQnVtM0QvV0pNaFdkMUxQTFNxTWNpTm1KNFkzWXVPa21JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQeWp0ek12dnpaOTBGbTVyNmhzaHNpS0NrRlNsVlA5RUdIZXZwM0p0bHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVYWnFHd3JvLzNuTHBPZWZDcys4MUZHQmYxR2gySUhqaXRkYS91NUVrbWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFzQ2VDZ3FmeFRMc0hHbVVBTTVWa1MyQWJvTkRtNkk3QWdYSXIwODRudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGtDb1BBVElWYlBaTEtpU1QwalE1TWZVSWN6SmdxbkhDbUx1eTBRR2xWWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZnK1J1RE8wRU0wMXVHck9ka0pmRFFXc1JLcjZ1SVoybWV6SnUxN1ZwYzdIUGU3U2tPd3Ivc1hvZ3pIMFdzanNkVzRHM2dJOGtZRmhicnEwY280S2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJab0ZybWFLak9YdzUrM1VDalJ3RWRBT1d3WUpuWmRSQ3FRSEY3L01pL1NnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQwMzAzNzI4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5ODFDNEIxNkQzOUFCOEE5MDExODMzMDRFMjc4NDc3RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMTg4MDI4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MDMwMzcyODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzVCNzkzMzkzNTFBNDRCMUQyOTE4QjFGMjIwNzBERjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDE4ODAyOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWmY0Y2E1N1hRdk83UVhzZl95WVpqZyIsInBob25lSWQiOiI0NjgyNjU4Yi1jYjBhLTRhM2MtODRkYS1iOGY5ZjlmNzk0YmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1WdkV1VXBRY1F6TmM4dGdiUndURjJGdS80PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVrNDUwOTlyUHQzb0UwdytTcDdZSXRUa2FJMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJENEJRODdTQSIsIm1lIjp7ImlkIjoiOTIzNDAzMDM3Mjg1OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImFiZHVscWF5b29tbWFyaTcwNCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSU82emE0SEVPMzRuN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMFNVRlVKQ2xyYXNreVg3aVBFS2hhRm5uY2FEbVk4UXZ4b1g4NVBWTDZIST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVFJyZXRZTllWSkFRMjNsV3ZONis5TlE3RmZ2b3krNXNQQTRMVi9zTlhmakp0ZFpWQXNhREpYendWTWNUWlVWOE1wRWNZQTdOMkNkbG96ZEh4aHFERHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkpPOVllYWd1UXRvYS9GRWZXNHMwaEpIczE2YjFqUnhRTkEzelp4MzZmRjRYdEpRa2lSdDBsVTNuZy9NVk1nU09nMDQzcFhTRGVVSUxBS0ViL05La2lBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDAzMDM3Mjg1OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRFbEJWQ1FwYTJySk1sKzRqeENvV2haNTNHZzVtUEVMOGFGL09UMVMraHkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxODgwMjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXNzIn0==="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"`DOWNLOADED BY GUROoJI`",
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
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
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


