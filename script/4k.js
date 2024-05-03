const axios = require('axios');
const fs = require('fs-extra');
const tinyurl = require("tinyurl");

module.exports.config = {
	name: "4k",
	version: "6.9",
	hasPermision: 0,
	credits: "MAHI", //don’t change credits please
	description: "Image Enhancer",
	usePrefix: true,
	usages: "Reply to a photo to enhance image",
	cooldown: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
	const startsWithTrigger = (str, trigger) => str.slice(0, trigger.length) === trigger;

	if (!(startsWithTrigger(event.body, "4k") || startsWithTrigger(event.body, "HD"))) return;

	const args = event.body.split(/\s+/);
	args.shift();

	const { threadID, messageID } = event;

	const photoUrl = event.messageReply?.attachments[0]?.url || args.join(" ");

	if (!photoUrl) {
		api.sendMessage("〘🤖〙 | 𝖯𝗅𝖾𝖺𝗌𝖾 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝖺 𝗉𝗁𝗈𝗍𝗈 𝗍𝗈 𝗉𝗋𝗈𝖼𝖾𝖾𝖽 𝖾𝗇𝗁𝖺𝗇𝖼𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾𝗌...", threadID, messageID);
		return;
	}

	const finalUrl = await tinyurl.shorten(photoUrl);

	api.sendMessage("〘🤖〙 | 𝖤𝗇𝗁𝖺𝗇𝖼𝗂𝗇𝗀 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...", threadID, async () => {
		try {
			const response = await axios.get(`https://all-image-genator-d1p.onrender.com/dipto/4k?img=${encodeURIComponent(finalUrl)}&key=dipto008`);

			const ImageURL = response.data.dipto;
			const img = (await axios.get(ImageURL, { responseType: "arraybuffer" })).data;
			const dipto = response.data.author;

			const filename = __dirname + "/cache/enhanced_image.jpg";
			fs.writeFileSync(filename, Buffer.from(img, 'binary'));

			api.sendMessage({
				body: `
				〘🤖〙✅ | 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖾𝗇𝗁𝖺𝗇𝖼𝖾𝖽 𝗒𝗈𝗎𝗋 𝗂𝗆𝖺𝗀𝖾...
				〘🤖〙☑️ | 𝖠𝗎𝗍𝗁𝗈𝗋: ${dipto}`,
				attachment: fs.createReadStream(filename)
			}, threadID, () => fs.unlinkSync(filename), messageID);
		} catch (error) {
			api.sendMessage(`〘🤖〙❎ | 𝖤𝗋𝗋𝗈𝗋 𝗐𝗁𝗂𝗅𝖾 processing 𝗂𝗆𝖺𝗀𝖾: ` + error, threadID, messageID);
		}
	});
};

module.exports.run = async function ({ api, event }) {};