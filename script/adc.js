module.exports.config = {
  name: "adc",
  version: "1.0.0",
  role: 3,
  hasPrefix: true,
  usage: '[reply or text]',
  description: 'Apply code from buildtooldev and pastebin',
  credits: 'Deveploper',
  cooldown: 5
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const axios = require('axios');
  const fs = require('fs');
  const request = require('request');
  const cheerio = require('cheerio');
  const {
    senderID,
    threadID,
    messageID,
    messageReply,
    type
  } = event;
  var name = args[0];
  if (type == "message_reply") {
    var text = messageReply.body;
  }
  if (!text && !name) return api.sendMessage('〘🤖〙𝖯𝗅𝖾𝖺𝗌𝖾 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝖾 𝗅𝗂𝗇𝗄 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝖺𝗉𝗉𝗅𝗒 𝗍𝗁𝖾 𝖼𝗈𝖽𝖾 𝗍𝗈 𝗈𝗋 𝗐𝗋𝗂𝗍𝖾 𝗍𝗁𝖾 𝖿𝗂𝗅𝖾 𝗇𝖺𝗆𝖾 𝗍𝗈 𝗎𝗉𝗅𝗈𝖺𝖽 𝗍𝗁𝖾 𝖼𝗈𝖽𝖾 𝗍𝗈 𝗉𝖺𝗌𝗍𝖾𝖻𝗂𝗇!', threadID, messageID);
  if (!text && name) {
    var data = fs.readFile(`${__dirname}/${args[0]}.js`, "utf-8", async (err, data) => {
      if (err) return api.sendMessage(`〘🤖〙𝖢𝗈𝗆𝗆𝖺𝗇𝖽 ${args[0]} 𝖽𝗈𝖾𝗌 𝗇𝗈𝗍 𝖾𝗑𝗂𝗌𝗍!`, threadID, messageID);
      const {
        PasteClient
      } = require('pastebin-api');
      const client = new PasteClient("R02n6-lNPJqKQCd5VtL4bKPjuK6ARhHb");
      async function pastepin(name) {
        const url = await client.createPaste({
          code: data,
          expireDate: 'N',
          format: "javascript",
          name: name,
          publicity: 1
        });
        var id = url.split('/')[3];
        return 'https://pastebin.com/raw/' + id;
      }
      var link = await pastepin(args[1] || 'noname');
      return api.sendMessage(link, threadID, messageID);
    });
    return;
  }
  var urlR = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  var url = text.match(urlR);
  if (url[0].indexOf('pastebin') !== -1) {
    axios.get(url[0]).then(i => {
      var data = i.data;
      fs.writeFile(`${__dirname}/${args[0]}.js`, data, "utf-8", function(err) {
        if (err) return api.sendMessage(`An error occurred while applying the code ${args[0]}.js`, threadID, messageID);
        api.sendMessage(`Applied the code to ${args[0]}.js, use command load to use!`, threadID, messageID);
      });
    });
  }
  if (url[0].indexOf('buildtool') !== -1 || url[0].indexOf('tinyurl.com') !== -1) {
    const options = {
      method: 'GET',
      url: messageReply.body
    };
    request(options, function(error, response, body) {
      if (error) return api.sendMessage('〘🤖〙𝖯𝗅𝖾𝖺𝗌𝖾 𝗈𝗇𝗅𝗒 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝖾 𝗅𝗂𝗇𝗄 (𝖽𝗈𝖾𝗌𝗇𝗍 𝖼𝗈𝗇𝗍𝖺𝗂𝗇 𝖺𝗇𝗒𝗍𝗁𝗂𝗇𝗀 𝗈𝗍𝗁𝖾𝗋 𝗍𝗁𝖺𝗇 𝗍𝗁𝖾 𝗅𝗂𝗇𝗄)', threadID, messageID);
      const load = cheerio.load(body);
      load('.language-js').each((index, el) => {
        if (index !== 0) return;
        var code = el.children[0].data;
        fs.writeFile(`${__dirname}/${args[0]}.js`, code, "utf-8", function(err) {
          if (err) return api.sendMessage(`〘🤖〙𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝖺𝗉𝗉𝗅𝗒𝗂𝗇𝗀 𝗍𝗁𝖾 𝗇𝖾𝗐 𝖼𝗈𝖽𝖾 𝗍𝗈 "${args[0]}.js".`, threadID, messageID);
          return api.sendMessage(`〘🤖〙𝖠𝖽𝖽𝖾𝖽 𝗍𝗁𝗂𝗌 𝖼𝗈𝖽𝖾 "${args[0]}.js", 𝗎𝗌𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗅𝗈𝖺𝖽 𝗍𝗈 𝗎𝗌𝖾!`, threadID, messageID);
        });
      });
    });
    return;
  }
}