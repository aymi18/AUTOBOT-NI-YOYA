const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  description: "To chat deku AI",
  usage: "deku [prompt]",
  credits: 'Neth', // Cmd created, API by Joshua Sy
  cooldown: 2,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
    try {
            const prompt = encodeURIComponent(args.join(" "));
            if (!prompt) return api.sendMessage("〘💭〙▶︎ 𝖯𝗅𝖾𝖺𝗌𝖾 𝖾𝗇𝗍𝖾𝗋 𝖺 𝗉𝗋𝗈𝗆𝗉𝗍!!!", event.threadID, event.messageID);
            api.sendMessage("〘🤖〙▶︎ 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗒𝗈𝗎𝗋 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇...", event.threadID, event.messageID);
            const apiUrl = "https://deku-rest-api.replit.app/deku?prompt=";
            const response = await axios.get(apiUrl + prompt);
            const responseData = response.data.data;
            return api.sendMessage(`🤖: ${responseData}\n\n\n〘💭〙▶︎ 𝖥𝖾𝖾𝗅 𝖿𝗋𝖾𝖾 𝗍𝗈 𝖺𝗌𝗄 𝗆𝖾 𝖺 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇𝗌, 𝗁𝗎𝗆𝖺𝗇 𝖺𝗇𝖽 𝗂 𝗐𝗂𝗅𝗅 𝖽𝗈 𝗆𝗒 𝖻𝖾𝗌𝗍 𝗍𝗈 𝖺𝗇𝗌𝗐𝖾𝗋 𝗂𝗍...`, event.threadID, event.messageID);
        } catch (error) {
            console.error(error);
            return api.sendMessage(error.message, event.threadID, event.messageID);
        }
};