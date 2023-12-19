const config = {
  name: "uptime",
  aliases: ["ut"],
  version: "1.0.0",
  description: "uptime",
  usage: "[]",
  cooldown: 3,
  permissions: [2],
  credits: "XIE",
  isAbsolute: true
}

function getCurrentTimeInVietnam() {
  const vietnamTimezoneOffset = 7;
  const currentDate = new Date();
  const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
  const vietnamTime = new Date(utcTime + (3600000 * vietnamTimezoneOffset));

  const daysOfWeek = ["𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭", "𝐓𝐡𝐮̛́ 𝐇𝐚𝐢", "𝐓𝐡𝐮̛́ 𝐁𝐚", "𝐓𝐡𝐮̛́ 𝐓𝐮̛", "𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦", "𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮", "𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲"];
  const day = daysOfWeek[vietnamTime.getDay()];
  const dateString = `${day} | ${vietnamTime.toLocaleDateString('vi-VN')}`;
  const timeString = vietnamTime.toLocaleTimeString('vi-VN');

  return ` ${dateString} | ${timeString} `;
}

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);


  try {
    const currentTimeInVietnam = getCurrentTimeInVietnam();



    const replyMessage = await message.reply(`
${hours}
${minutes}
${seconds}  

${currentTimeInVietnam}
 
 `);
    console.log(replyMessage);
  } catch (error) {
    console.error("Error while replying:", error);
  }
}

export default {
  config,
  onCall,
};
