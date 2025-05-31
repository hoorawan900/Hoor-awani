module.exports.config = {
    name: "admin",
    version: "1.0.1", 
    hasPermssion: 0,
    credits: "HAMZI TRICKER",
    description: "Hamzi",
    commandCategory: "...",
    cooldowns: 1,
    dependencies: 
    {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/5yfLyIS.jpeg", 

            "https://i.imgur.com/5yfLyIS.jpeg", 

"https://i.imgur.com/5yfLyIS.jpeg",

            "https://i.imgur.com/5yfLyIS.jpeg"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝗛𝗔𝗠𝗭𝗔\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝗛𝗔𝗠𝗭𝗜\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝗟𝗔𝗛𝗢𝗥𝗘)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝗥𝗔𝗛𝗘𝗠 𝗬𝗔𝗥 𝗞𝗛𝗔𝗡, 𝗣𝗮𝗸𝗶𝘀𝘁𝗮𝗻\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (21)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝙎𝙩𝙪𝙙𝙮\n𝗚𝗺𝗮𝗶𝗹        :  hamzitech38@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/0309 6269143\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : yaad nahi hai\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/profile.php?id=61551893196214
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
