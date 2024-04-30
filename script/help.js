const axios = require('axios');

module.exports.config = {
    name: 'help',
    version: '1.0.0',
    role: 0,
    hasPrefix: false,
    aliases: ['help'],
    description: "Beginner's guide",
    usage: "Help [page] or [command]",
    credits: 'Developer',
};

module.exports.run = async function({
    api,
    event,
    enableCommands,
    args,
    Utils,
    prefix
}) {
    const input = args.join(' ');
    try {
        const eventCommands = enableCommands[1].handleEvent;
        const commands = enableCommands[0].commands;

        if (!input) {
            const pages = 999;
            let page = 1;
            let start = (page - 1) * pages;
            let end = start + pages;
            let helpMessage = `₊ ˚ ✩ ｡˚ ˚☽ ˚ \n₊ ·̩͙. ᘏ▸◂ᘏ .·̩͙ ₊ ✩｡\n˚ 
✩ ꒰ ɞ̴̶̷ ·̮ ɞ̴̶̷ ꒱ ｡ ˚ ₊˚｡\n*ଘ_(")(") ₊ ˚ ✩\n’’’’ꕤ’’’’’’’’ꕤ’’’’’’\n     ꕤ ꕤ ꕤ\n\n》▬▬▬▬▬▬▬▬▬▬▬▬▬《\n〘 ◉ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧 ◉ 〙\n》▬▬▬▬▬▬▬▬▬▬▬▬▬《\n\n`;
            for (let i = start; i < Math.min(end, commands.length); i++) {
                helpMessage += `  〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙\n  | 『 ${i + 1}.』  ${prefix}${commands[i]}\n  〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙\n`;
            }
            helpMessage += '\n〘 ◉ 𝗘𝗩𝗘𝗡𝗧 𝗟𝗜𝗦𝗧 ◉ 〙\n\n';
            eventCommands.forEach((eventCommand, index) => {
                helpMessage += `  〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙\n  | 『 ${index + 1}.』  ${prefix}${eventCommand}\n  〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙 \n`;
            });
            helpMessage += `\n〘◉〙𝗣𝗮𝗴𝗲 ${page}/${Math.ceil(commands.length / pages)}. 𝖳𝗈 𝗏𝗂𝖾𝗐 𝗍𝗁𝖾 𝗇𝖾𝗑𝗍 𝗉𝖺𝗀𝖾, 𝗍𝗒𝗉𝖾 '${prefix}𝗁𝖾𝗅𝗉 2'. 𝖳𝗈 𝗏𝗂𝖾𝗐 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝖻𝗈𝗎𝗍 𝖺 𝗌𝗉𝖾𝖼𝗂𝖿𝗂𝖼 𝖼𝗈𝗆𝗆𝖺𝗇𝖽, 𝗍𝗒𝗉𝖾 '${prefix}𝗁𝖾𝗅𝗉 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗇𝖺𝗆𝖾'.\n\n`;
            api.sendMessage(helpMessage, event.threadID, event.messageID);
        } else if (!isNaN(input)) {
            if (input === '2') {
                const pages = 999;
                let page = 2;
                let start = (page - 1) * pages;
                let end = start + pages;
                let helpMessage = `₊ ˚ ✩ ｡˚ ˚☽ ˚ \n₊ ·̩͙. ᘏ▸◂ᘏ .·̩͙ ₊ ✩｡\n˚ 
✩ ꒰ ɞ̴̶̷ ·̮ ɞ̴̶̷ ꒱ ｡ ˚ ₊˚｡\n*ଘ_(")(") ₊ ˚ ✩\n’’’’ꕤ’’’’’’’’ꕤ’’’’’’\n     ꕤ ꕤ ꕤ\n\n》▬▬▬▬▬▬▬▬▬▬▬▬▬《\n〘 ◉ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧 ◉ 〙\n》▬▬▬▬▬▬▬▬▬▬▬▬▬《\n\n`;
                }
                helpMessage += `\n𝗣𝗮𝗴𝗲 ${page}/${Math.ceil(commands.length / pages)}. 𝖳𝗈 𝗏𝗂𝖾𝗐 𝗍𝗁𝖾 𝗉𝗋𝖾𝗏𝗂𝗈𝗎𝗌 𝗉𝖺𝗀𝖾, 𝗍𝗒𝗉𝖾 '${prefix}𝗁𝖾𝗅𝗉'. 𝖳𝗈 𝗏𝗂𝖾𝗐 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝖻𝗈𝗎𝗍 𝖺 𝗌𝗉𝖾𝖼𝗂𝖿𝗂𝖼 𝖼𝗈𝗆𝗆𝖺𝗇𝖽, 𝗍𝗒𝗉𝖾 '${prefix}𝗁𝖾𝗅𝗉 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗇𝖺𝗆𝖾'.\n\n`;
                api.sendMessage(helpMessage, event.threadID, event.messageID);
            } else {
                // Remaining code remains unchanged
            }
        } else {
            // Remaining code remains unchanged
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports.handleEvent = async function({
    api,
    event,
    prefix
}) {
    const {
        threadID,
        messageID,
        body
    } = event;
    const message = prefix ? '〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙\𝗇𝗧𝗵𝗶𝘀 𝗶𝘀 𝗺𝘆 𝗽𝗿𝗲𝗳𝗶𝘅: ' + prefix \𝗇〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙: 〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙\𝗇"𝗦𝗼𝗿𝗿𝘆 𝗶 𝗱𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗽𝗿𝗲𝗳𝗶𝘅\𝗇〘◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉〙";
    if (body?.toLowerCase().startsWith('prefix')) {
        api.sendMessage(message, threadID, messageID);
    }
}