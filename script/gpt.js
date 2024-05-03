const { get } = require('axios');

module.exports.config = {
  name: 'ai',
  credits: "cliff",
  version: '1.0.0',
  role: 0,
  aliases: ["Gpt"],
  cooldown: 0,
  hasPrefix: false,
  usage: "",
};

module.exports.run = async function ({ api, event, args }) {
  const question = args.join(' ');
  function sendMessage(msg) {
    api.sendMessage(msg, event.threadID, event.messageID);
  }

  const url = "https://hercai.onrender.com/v3/hercai";

  if (!question) return sendMessage("〘💭〙𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇...");

  try {
    const response = await get(`${url}?question=${encodeURIComponent(question)}`);
    sendMessage(response.data.reply);
  } catch (error) {
    sendMessage("〘🤖〙𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽: " + error.message);
  }
};