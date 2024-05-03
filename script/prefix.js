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
                        body: `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█░░    ▄▀█ █░█ ▀█▀ █▀█     ░░█\n█░░    █▀█ █▄█ ░█░ █▄█     ░░█\n█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█\n\n〘🤖〙𝗛𝗘𝗟𝗟𝗢! 𝗧𝗛𝗜𝗦 𝗜𝗦 𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 :  》${prefix}《\n〘🤖〙𝗧𝗬𝗣𝗘 :\n ${prefix}𝗁𝖾𝗅𝗉 ▶︎ see commands\n〘🤖〙𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡: https://www.facebook.com/${admin}/n╭───────────•◈•───────────╮\n\t〘𝘆𝗼𝘆𝗮💭〙 : 𝗰𝗿𝗲𝗮𝘁𝗲 𝗸𝗮 𝗼𝘄𝗻 \n\t𝗮𝘂𝘁𝗼𝗯𝗼𝘁 𝗺𝗼 𝗱𝗶𝘁𝗼 𝗯𝗵𝗲 : \n╰───────────•◈•───────────╯`,
                       
                },
                threadID,
                messageID
        );


        // Set reaction to the message
        api.setMessageReaction("👾", messageID, (err) => {}, true);
};
