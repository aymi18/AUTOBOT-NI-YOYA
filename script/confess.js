const axios = require('axios');

module.exports.config = {
name: "confess",
version: "1.0.0",
credits: "Deku",
role: 0,
description: "Confess to someone",
hasPrefix: true,
usages: "[fb url or uid | message]",
cooldowns: 0
};

module['exports']['run'] = async function({ api, event, args }) {

async function r(m){
api.sendMessage(m, event.threadID, event.messageID)
}


const y = args.join(" ").split("|").map(item => item = item.trim());

var t = y[0]
var t2 = y[1]

if(!args[0] || !t) return r("〘🤖〙𝗠𝗶𝘀𝘀𝗶𝗻𝗴 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝘂𝗿𝗹 𝗼𝗿 𝘂𝗶𝗱");
if(!t2) return r("〘🤖〙𝗠𝗶𝘀𝘀𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲");
try {
if(t.startsWith("https://facebook.com")){
  const res = await api.getUID(t)
  var k = res
} else {
  var k = t
}
api.sendMessage(`󰟫╭ 𝗬𝗼𝘂'𝘃𝗲 𝗴𝗼𝘁 𝗮 𝗺𝗲𝘀𝘀𝗮𝗴𝗲
 
󰥴 : ${t2}
━━━━━━━━━━━━━━━━━━━━━
• :𝖽𝗈𝗇'𝗍 𝖻𝗈𝗍𝗁𝖾𝗋 𝗆𝖾 𝗍𝗈 𝖺𝗌𝗄 𝗐𝗁𝗈'𝗌 𝗍𝗁𝖾 𝗌𝖾𝗇𝖽𝖾𝗋‚ 𝗒𝗈𝗎'𝗋𝖾 𝗃𝗎𝗌𝗍 𝗐𝖺𝗌𝗍𝗂𝗇𝗀 𝗒𝗈𝗎𝗋 𝗍𝗂𝗆𝖾 (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)`, k, () => r("𝖢𝗈𝗇𝖿𝖾𝗌𝗌𝗂𝗈𝗇 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗌𝖾𝗇𝗍 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒!"))
} catch (err) {
r("𝖨'𝗆 𝗌𝗈𝗋𝗋𝗒 𝖻𝗎𝗍 𝗒𝗈𝗎𝗋 𝖼𝗈𝗇𝖿𝖾𝗌𝗌𝗂𝗈𝗇 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝖿𝖺𝗂𝗅𝖾𝖽 𝗍𝗈 𝗌𝖾𝗇𝖽, 𝖨 𝗍𝗁𝗂𝗇𝗄 𝗂𝗍'𝗌 𝗍𝗂𝗆𝖾 𝗍𝗈 𝖼𝗁𝖺𝗍 𝗍𝗁𝖺𝗍 𝗉𝖾𝗋𝗌𝗈𝗇 𝖺𝗇𝖽 𝖼𝗈𝗇𝖿𝖾𝗌𝗌 𝗒𝗈𝗎𝗋 𝖿𝖾𝖾𝗅𝗂𝗇𝗀𝗌 (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)")
   };
}