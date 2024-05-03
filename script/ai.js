const axios = require('axios');

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ');
  
  if (!input) {
    api.sendMessage(`〘💭〙𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇...`, event.threadID, event.messageID);
    return;
  }
  
  api.sendMessage(`〘🤖〙𝖲𝖾𝖺𝗋𝖼𝗁𝗂𝗇𝗀 𝖿𝗈𝗋 𝖺𝗇 𝖺𝗇𝗌𝗐𝖾𝗋.."${input}"`, event.threadID, event.messageID);
  
  try {
    const { data } = await axios.get(`https://openaikey-x20f.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    let response = data.response;
    api.sendMessage(response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
