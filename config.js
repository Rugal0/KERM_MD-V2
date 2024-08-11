//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237656696306";
global.owner = process.env.OWNER_NUMBER || "237692950628";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0d1TythWTVDeWR2TDgxbjZFVVkyQk9hbjZoMFhsZTM4NXJ3M3hXSUVFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzlaRmxlWWxDTjVRSFFwSmVmQWkwcW1NWEdpSUk3dUlFdzBCUzFodmFBST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS2ticmZ4K29LYkNIT3JGM09aaUhUNlZIcDhLeEgwaTRveGd2Q1VWcTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMTUzMWZzT2wxcEpRVzAwKzgrRjJYaUZ6blFCQy95UWZ1bGZmOVBGOW1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMQXBEVUxMYnlBaDJpMW1sT1F6Q1g2S0k4b2o0TmQ0OXBPQUJjRFVoRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg2Q1JRVmJnZUhRb2Ewb01HZklVaTBHOFdBWDJWUENNcHNZNUxBTHJ3bkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZUTjBaNElsOStiZ0Q0enZ2cFBUWWRoMXhad05xalk5c001RGRVN2UwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxZQUpRSXRpOVRqUFdBajFzSnI4WTE3Q2t2MUtvbHdESUVIRWUweGFuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpyRElmSnZDYm04QXB2UjFMQ1o4L3QycWNqemtPZGRjREFWaXBCNlhZYm4xRE05M2dKRnFLbDhwU1IzSzZSaTNkUk5Ma0xMSFlaQk9nRlBIQm5pNkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6IlN4TURzNXNMRDZlZWhrTitkYWl5dW9YOWg4WFJFdUtseW9NbTJKTDNmS2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllFLUNQUDhTU0Eyd2tGcXlQNDJHaEEiLCJwaG9uZUlkIjoiMzY2ZDQ3NDItNGQxNC00ZjgxLTk1Y2EtYjM0ZjZhOGJiMTc0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkyaVJWaTd6Z0NrWG5TZWw4SzFPSWwwUGJUYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1RXpiUE9CaFY5Y3J1MmMvWHZseWd4ZlY1cVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVdWOE40VFYiLCJtZSI6eyJpZCI6IjIzNzY5Mjk1MDYyODoxMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlRWd3ZzRkVOT0wzN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVVhKN2VYZkI0MmFzbnVUR2cvQnFkNWozUU5Ia1JqVk1LamVJRzlJY0htMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaVozZHVPanlLRDNORjY2NHZXeTJ6WGdvVUZJN0prRHF1aWR4UkZ6V0V4OHhqZUlDaFZBZzdhblVjNERCQjNmazJRbFVrQ0V6YmFVVitzN2ZISTBVQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InFVaWhjUWV5dzBDNTFncGRNVHErV0lENDlQV0FnTHBySDU1RllZMEVGWm1vdnhnYWhnVkRkVW4xTEJBajkwUU0zRDMyRXA2QkxOMEJWcm1GSWtBS0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkyOTUwNjI4OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZGeWUzbDN3ZU5tcko3a3hvUHdhbmVZOTBEUjVFWTFUQ28zaUJ2U0hCNXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMzMTk3NzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVY4In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "false",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐*",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
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
