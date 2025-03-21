require("dotenv").config();
const packageInfo = require("./package.json"); // Import package.json

const {
  processMessage,
  setBotName,
  setCompanyName,
  setOpenHours,
  setContactAddress,
  callCenterStatus,
  website,
  delivery,
} = require("amharic-chatbot");
const { Telegraf } = require("telegraf");
const botToken = process.env.BOT_TOKEN;
const bot = new Telegraf(botToken);

setBotName("አበበ");
setCompanyName("የአበበ ድርጅት");
setOpenHours("2", "11", "5");
setContactAddress("0937147373", "amenadamsolomon5@gmail.com", "ጅማ");
callCenterStatus(true);
website(true, "https://acelinks.rf.gd");
delivery(true, true);
bot.start((ctx) => {
  ctx.reply(
    "ሰላም! አበበ እባላለሁ። ለማንኛውም ድርጅት የደንበኞች ቴሌግራም አጋዥ ነኝ። አማርኛ እየተማርኩ ስለሆነ መልሶቼኝ ለመረዳት ትንሽ ሊከብዳቹ ይችላል። ነገር ግን ጎበዝ ተማሪ ስለሆንኩ ቶሎ ተምሬ አኮራቹዋለሁ"
  );
});

bot.help((ctx) => {
  ctx.reply("እኔ የፈለጉትን ነገር ለመስራት ዝግጁ ነኝ። ስለ አጠቃቀሙ ወደፊት በሰፊው እገልጽላቹዋለሁ።");
});

bot.command("about", (ctx) => {
  ctx.reply(
    "this bot is developed by @amenadam_solomon \n https://github.com/amenadam"
  );
});

bot.command("version", (ctx) => {
  ctx.reply(
    "This bot is currently at \n Version: " + `${packageInfo.version} `
  );
});

bot.on("text", (ctx) => {
  ctx.reply(processMessage(ctx.message.text));
});
bot.launch();
console.log("bot running");
