const fs = require("fs");
module.exports.config = {
  name: "HAMZI",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐇𝐀𝐌𝐙𝐈 𝐓𝐑𝐈𝐂𝐊𝐄𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Hamzi Khan") || react.includes("Hamzi") || react.includes("hamzi") ||
react.includes("admin") ||
react.includes("HAMZI KHAN") ||     
react.includes("Hamzi")) {
    var msg = {
        body: `${name} 𝑻𝑼𝑴 𝑵𝑬 𝑩𝑯𝑼𝑳𝑨𝒀𝑨 𝑶𝑼𝑹 𝑯𝑼𝑴 𝑪𝑯𝑨𝑳𝑬 𝑨𝑨𝒀𝑬💞✿`,attachment: fs.createReadStream(__dirname + `/noprefix//received_980098084010282.jpegjpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
