module.exports.config = {
	name: 'help',
	version: '1.0.0',
	role: 0,
	hasPrefix: false,
	aliases: ['help'],
	description: "Beginner's guide",
	usage: "Help [page] or [command]",
	credits: 'Develeoper',
};

module.exports.run = async function ({
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
			let helpMessage = `╔═╗╦   ╦╔╦╗╔═╗╔╗   ╔═╗╔╦╗\n╠═╣║   ║   ║    ║   ║╠╩╗║   ║    ║ \n╩   ╩╚═╝   ╩    ╚═╝╚═╝╚═╝   ╩\n\n▬▬▬〘 ◉𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧◉ 〙▬▬▬\n
▱▱▱▱▱▱▱▱▱▱▱▱▱\n\n`;
			for (let i = start; i < Math.min(end, commands.length); i++) {
				helpMessage += `╭─╮\n |\t『 ${i + 1}.』  ${prefix}${commands[i]}\n╰─────────────〘◉〙\n`;
			}
			helpMessage += '\n▬▬▬〘◉𝗘𝗩𝗘𝗡𝗧 𝗟𝗜𝗦𝗧◉〙▬▬▬\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n\n';
			eventCommands.forEach((eventCommand, index) => {
				helpMessage += `〘◉〙▬▬▬▬▬▬▬▬▬▬▬▬〘◉〙\n |\t『 ${index + 1}.』  ${prefix}${eventCommand}\n〘◉〙▬▬▬▬▬▬▬▬▬▬▬▬〘◉〙\n`;
			});
			helpMessage += `\nPage ${page}/${Math.ceil(commands.length / pages)}. To view the next page, type '${prefix}help page number'. To view information about a specific command, type '${prefix}help command name'.`;
			api.sendMessage(helpMessage, event.threadID, event.messageID);
		} else if (!isNaN(input)) {
			const page = parseInt(input);
			const pages = 999;
			let start = (page - 1) * pages;
			let end = start + pages;
			let helpMessage = `▬▬▬〘 ◉𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧◉ 〙▬▬▬\n\n`;
			for (let i = start; i < Math.min(end, commands.length); i++) {
				helpMessage += `\t${i + 1}. 》 ${prefix}${commands[i]} 《\n`;
			}
			helpMessage += '\n▬▬▬〘 ◉𝗘𝗩𝗘𝗡𝗧 𝗟𝗜𝗦𝗧◉ 〙▬▬▬\n\n';
			eventCommands.forEach((eventCommand, index) => {
				helpMessage += `\t${index + 1}. 『 ${prefix}${eventCommand} 』\n`;
			});
			helpMessage += `\nPage ${page} of ${Math.ceil(commands.length / pages)}`;
			api.sendMessage(helpMessage, event.threadID, event.messageID);
		} else {
			const command = [...Utils.handleEvent, ...Utils.commands].find(([key]) => key.includes(input?.toLowerCase()))?.[1];
			if (command) {
				const {
					name,
					version,
					role,
					aliases = [],
					description,
					usage,
					credits,
					cooldown,
					hasPrefix
				} = command;
				const roleMessage = role !== undefined ? (role === 0 ? '◉ 𝖯𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇: user' : (role === 1 ? '◉ 𝖯𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇: admin' : (role === 2 ? '◉ 𝖯𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇: thread Admin' : (role === 3 ? '◉ 𝖯𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇: super Admin' : '')))) : '';
				const aliasesMessage = aliases.length ? `◉ 𝖠𝗅𝗂𝖺𝗌𝖾𝗌: ${aliases.join(', ')}\n` : '';
				const descriptionMessage = description ? `Description: ${description}\n` : '';
				const usageMessage = usage ? `◉ 𝖴𝗌𝖺𝗀𝖾: ${usage}\n` : '';
				const creditsMessage = credits ? `◉ 𝖢𝗋𝖾𝖽𝗂𝗍𝗌: ${credits}\n` : '';
				const versionMessage = version ? `◉ 𝖵𝖾𝗋𝗌𝗂𝗈𝗇: ${version}\n` : '';
				const cooldownMessage = cooldown ? `◉ 𝖢𝗈𝗈𝗅𝖽𝗈𝗐𝗇: ${cooldown} second(s)\n` : '';
				const message = ` 〘 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 〙\n\n◉ 𝗡𝗮𝗺𝗲: ${name}\n${versionMessage}${roleMessage}\n${aliasesMessage}${descriptionMessage}${usageMessage}${creditsMessage}${cooldownMessage}`;
				api.sendMessage(message, event.threadID, event.messageID);
			} else {
				api.sendMessage('Command not found.', event.threadID, event.messageID);
			}
		}
	} catch (error) {
		console.log(error);
	}
};
