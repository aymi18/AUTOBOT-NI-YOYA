const axios = require('axios');

module.exports.config = {
                name: "Ai",
                version: "1.0.0",
                role: 0,
                credits: "Eugene Aguilar",
                description: "Interacts with a GPT-4 API",
                cooldown: 5,
                hasPrefix: false,
                aliases: [""],
                usages: "",
};

module.exports.run = async function ({ api, event }) {
                const args = event.body.split(/\s+/);
                args.shift(); // Remove the command itself from the arguments

                // Check if there are arguments
                if (args.length === 0) {
                                api.sendMessage("〘💭〙𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇 𝗈𝗋 𝗉𝗋𝗈𝗆𝗉𝗍...", event.threadID, event.messageID);
                                return;
                }

                const apiUrl = `https://deku-rest-api.replit.app/deku?prompt=${encodeURIComponent(args.join(' '))}`;

                try {
                                const response = await axios.get(apiUrl);

                                // Check if the API response contains valid data
                                if (response.status === 200 && response.data && response.data.trim() !== "") {
                                                const answer = response.data.trim();
                                                api.sendMessage(answer, event.threadID, event.messageID);
                                } else {
                                                console.error("〘💭〙𝖨𝗇𝗏𝖺𝗅𝗂𝖽 𝗈𝗋 𝖾𝗆𝗉𝗍𝗒 𝖠𝖨 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾...");
                                                api.sendMessage("〘💭〙𝖨𝗇𝗏𝖺𝗅𝗂𝖽 𝗈𝗋 𝖾𝗆𝗉𝗍𝗒 𝖠𝖨 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾...", event.threadID, event.messageID);
                                }
                } catch (error) {
                                console.error("Error fetching ai response:", error);
                                api.sendMessage("〘💭〙𝖤𝗋𝗋𝗈𝗋 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝖠𝖨 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾", event.threadID, event.messageID);
                }
};