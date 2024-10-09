const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yTwV3bBA#a45L7I9y8373tgCgMcZPuXe5t8UMX_vFwj3DeD1IXgg",
SUDO_NB: process.env.SUDO_NB || "94720599516",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "false",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "unavailable",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "false",
AUTO_TYPING:"false",
MODE: process.env.MODE || "public",
AUTO_VOICE:"false",
};
