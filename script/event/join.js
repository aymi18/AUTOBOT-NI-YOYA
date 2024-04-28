module.exports.config = {
 name: "join",
 version: "1.0.1",
};

module.exports.run = async function ({ api, event }) {
const { join } = require('path');
const axios = require('axios');
 const request = require("request");
 const fs = global.nodemodule["fs-extra"];
 const { threadID } = event;

 if (event.logMessageData.addedParticipants.some((i) => i.userFbId == api.getCurrentUserID())) {
  api.changeNickname(
   `》 ${global.config.PREFIX} 《 ❃ ➠${!global.config.BOTNAME ? " " : global.config.BOTNAME}`,
   threadID,
   api.getCurrentUserID()
  );
  api.sendMessage("", event.threadID, () => api.sendMessage({ body: `🔴🟡🟢\╔═╗╦   ╦╔╦╗╔═╗╔╗   ╔═╗╔╦╗\n╠═╣║   ║   ║    ║   ║╠╩╗║   ║    ║ \n╩   ╩╚═╝   ╩    ╚═╝╚═╝╚═╝   ╩ \n\n✅ 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆!....\n•──────────────────•\n→ 𝗔𝗱𝗺𝗶𝗻: 𝗬𝗢𝗬𝗔 / 𝗔𝗬𝗠𝗜\n\n 𝗨𝘀𝗮𝗴𝗲: ${global.config.PREFIX}help\n𝗨𝘀𝗲 ${global.config.PREFIX}𝗰𝗮𝗹𝗹𝗮𝗱 𝗶𝗳 𝘁𝗵𝗲𝗿𝗲 𝗶𝘀 𝗮𝗻 𝗲𝗿𝗿𝗼𝗿 𝘁𝗼 𝘁𝗵𝗲 𝗕𝗼𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗮𝗱𝗺𝗶𝗻 𝘄𝗶𝗹𝗹 𝘁𝗿𝘆 𝘁𝗼 𝗳𝗶𝘅 𝘁𝗵𝗶𝘀 𝗮𝘀 𝘀𝗼𝗼𝗻 𝗮𝘀 𝗽𝗼𝘀𝘀𝗶𝗯𝗹𝗲\n→ 𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝘁𝗵𝗶𝘀 𝗯𝗼𝘁, 𝗵𝗮𝘃𝗲 𝗳𝘂𝗻 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁.`, attachment: fs.createReadStream(__dirname + "/cache/hi .png") }, threadID));
 } else {
  try {
   const { threadName, participantIDs } = await api.getThreadInfo(threadID);
   const threadData = global.data.threadData.get(parseInt(threadID)) || {};
