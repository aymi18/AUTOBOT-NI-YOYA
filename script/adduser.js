module.exports.config = {
	name: "adduser",
	version: "1.0.1",
	role: 0,
	aliases: ["add"],
	credits: "Yan Maglinte",
	description: "Add user to group by id",
	cooldown: 0,
};

module.exports.run = async function ({ api, event, args }) {
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const out = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
	var participantIDs = participantIDs.map(e => parseInt(e));
	if (!args[0]) return out("〘🤖〙𝖯𝗅𝖾𝖺𝗌𝖾 𝖾𝗇𝗍𝖾𝗋 𝖺𝗇 𝗂𝖽/𝗅𝗂𝗇𝗄 𝗉𝗋𝗈𝖿𝗂𝗅𝖾 𝗎𝗌𝖾𝗋 𝗍𝗈 𝖺𝖽𝖽.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			var [id, name, fail] = await getUID(args[0], api);
			if (fail == true && id != null) return out(id);
			else if (fail == true && id == null) return out("User ID not found.")
			else {
				await adduser(id, name || "Facebook users");
			}
		} catch (e) {
			return out(`${e.name}: ${e.message}.`);
		}
	}

	async function adduser(id, name) {
		id = parseInt(id);
		if (participantIDs.includes(id)) return out(`${name ? name : "Member"} is already in the group.`);
		else {
			var admins = adminIDs.map(e => parseInt(e.id));
			try {
				await api.addUserToGroup(id, threadID);
			}
			catch {
				return out(`Can't add ${name ? name : "user"} in group.`);
			}
			if (approvalMode === true && !admins.includes(botID)) return out(`〘🤖〙𝖠𝖽𝖽𝖾𝖽 ${name ? name : "member"} 𝗍𝗈 𝗍𝗁𝖾 𝖺𝗉𝗉𝗋𝗈𝗏𝖾𝖽 𝗅𝗂𝗌𝗍 !`);
			else return out(`〘🤖〙𝖠𝖽𝖽𝖾𝖽 ${name ? name : "member"} 𝗍𝗈 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 !`)
		}
	}
}