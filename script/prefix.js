const fs = require("fs");
module.exports.config = {
                name: "prefix",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "jeka",
                description: "hihihihi",
                commandCategory: "no prefix",
                usePrefix: false,
                usages: "prefix",
                cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
                var { threadID, messageID, senderID } = event;
                var senderName = "";
                api.getUserInfo(senderID, (err, result) => {
                                if (err) {
                                                console.error(err);
                                                senderName = "";
                                } else {
                                                senderName = result[senderID].name;
                                }
                                if (
                                                event.body.indexOf("prefix") == 0 ||
                                                event.body.indexOf("Prefix") == 0 ||
                                                event.body.indexOf("PREFIX") == 0 ||
                                                event.body.indexOf("prefi") == 0
                                ) {
                                                // Send text message with prefix information
                                                api.sendMessage(
                                                                {
                                                                                body: `〘🤖〙𝗛𝗘𝗟𝗟𝗢✨ 𝗧𝗛𝗜𝗦 𝗜𝗦 𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 :  》${prefix}《\n\n〘🤖〙𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:\n🤖▬▬▬▬▬▬▬▬▬▬▬▬▬▬🤖\n\n◉ ${prefix}𝗁𝖾𝗅𝗉 [𝗇𝗎𝗆𝖻𝖾𝗋 𝗈𝖿 𝗉𝖺𝗀𝖾] ► 𝗌𝖾𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌\n◉ ${prefix}𝗌𝗂𝗆 [𝗆𝖾𝗌𝗌𝖺𝗀𝖾] ► 𝗍𝖺𝗅𝗄 𝗍𝗈 𝖻𝗈𝗍\n◉ ${prefix}𝖼𝖺𝗅𝗅𝖺𝖽 [𝗆𝖾𝗌𝗌𝖺𝗀𝖾] ► 𝗋𝖾𝗉𝗈𝗋𝗍 𝖺𝗇𝗒 𝗉𝗋𝗈𝖻𝗅𝖾𝗆 𝖾𝗇𝖼𝗈𝗎𝗇𝗍𝖾𝗋𝖾𝖽\n◉ ${prefix}𝗁𝖾𝗅𝗉 [𝖼𝗈𝗆𝗆𝖺𝗇𝖽] ► 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗎𝗌𝖺𝗀𝖾 𝗈𝖿 𝖼𝗈𝗆𝗆𝖺𝗇𝖽\n\n〘🍥〙𝗬𝗢𝗬𝗔 :  𝙲𝚁𝙴𝙰𝚃𝙴 𝙺𝙰 𝚂𝙰𝚁𝙸𝙻𝙸𝙽𝙶 𝙰𝚄𝚃𝙾𝙱𝙾𝚃 𝙼𝙾 𝙳𝙸𝚃𝙾 𝙱𝙷𝙴 : https://autobot-ni-yoya-dtjv.onrender.com \n〘🍥〙𝗕𝗢𝗧 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 : https://www.facebook.com/profile.php?id=100095262681590`,
                                                                                attachment: fs.createReadStream(
                                                                                                __dirname + `/noprefix/prefix.gif`
                                                                                ),
                                                                },
                                                                threadID,
                                                                messageID
                                                );

                                                // Send voice message with additional information
                                                const voiceFile = fs.readFileSync(
                                                                __dirname + "/noprefix/prefix.gif"
                                                );
                                                api.sendMessage(
                                                                {
                                                                                attachment: voiceFile,
                                                                                type: "audio",
                                                                                body: "Hey, listen to my prefix information!",
                                                                },
                                                                threadID,
                                                                () => {}
                                                );

                                                api.setMessageReaction("🚀", event.messageID, (err) => {}, true);
                                }
                });
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};