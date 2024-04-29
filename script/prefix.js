const fs = require("fs");

module.exports.config = {
        name: "prefix",
        version: "1.0.1",
        role: 0,
        credits: "cliff",
        description: "Display the prefix of your bot",
        hasPrefix: false,
        usages: "prefix",
        cooldown: 5,
        aliases: ["prefix", "Prefix", "PREFIX", "prefi"],
};

module.exports.run = function ({ api, event, prefix, admin }) {
        const { threadID, messageID } = event;

        // Check if the command is being executed manually
        if (event.body.toLowerCase() === `${prefix}prefix`) {
                // Send message indicating that the command cannot be executed manually
                api.sendMessage(
                        "This command cannot be executed manually.",
                        threadID,
                        messageID
                );
                return;
        }

        // Send text message with prefix information
        api.sendMessage(
                {

               body: `〘◉〙𝗛𝗘𝗟𝗟𝗢✨ 𝗧𝗛𝗜𝗦 𝗜𝗦 𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 :  》${prefix}《\n\n〘◉〙𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:\n〘◉〙▬▬▬▬▬▬▬▬▬▬▬▬▬▬〘◉〙\n\n◉ ${prefix}𝗁𝖾𝗅𝗉 [𝗇𝗎𝗆𝖻𝖾𝗋 𝗈𝖿 𝗉𝖺𝗀𝖾] ► 𝗌𝖾𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌\n◉ ${prefix}𝗌𝗂𝗆 [𝗆𝖾𝗌𝗌𝖺𝗀𝖾] ► 𝗍𝖺𝗅𝗄 𝗍𝗈 𝖻𝗈𝗍\n◉ ${prefix}𝖼𝖺𝗅𝗅𝖺𝖽 [𝗆𝖾𝗌𝗌𝖺𝗀𝖾] ► 𝗋𝖾𝗉𝗈𝗋𝗍 𝖺𝗇𝗒 𝗉𝗋𝗈𝖻𝗅𝖾𝗆 𝖾𝗇𝖼𝗈𝗎𝗇𝗍𝖾𝗋𝖾𝖽\n◉ ${prefix}𝗁𝖾𝗅𝗉 [𝖼𝗈𝗆𝗆𝖺𝗇𝖽] ► 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗎𝗌𝖺𝗀𝖾 𝗈𝖿 𝖼𝗈𝗆𝗆𝖺𝗇𝖽\n\n〘🍥〙𝗬𝗢𝗬𝗔 :  𝙲𝚁𝙴𝙰𝚃𝙴 𝙺𝙰 𝚂𝙰𝚁𝙸𝙻𝙸𝙽𝙶 𝙰𝚄𝚃𝙾𝙱𝙾𝚃 𝙼𝙾 𝙳𝙸𝚃𝙾 𝙱𝙷𝙴 : https://autobot-ni-yoya-dtjv.onrender.com \n〘🍥〙𝗕𝗢𝗧 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 : https://www.facebook.com/profile.php?id=100095262681590`,
                        

        // Send voice message with additional information
        const voiceFile = fs.readFileSync(__dirname + "/cache/prefix.gif");
        api.sendMessage(
                {
                        attachment: voiceFile,
                        type: "audio",
                        body: "Hey, listen to my prefix information!",
                },
                threadID,
                () => {}
        );

        // Set reaction to the message
        api.setMessageReaction("🔰", messageID, (err) => {}, true);
};