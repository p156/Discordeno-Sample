//定義
import "$std/dotenv/load.ts"
import { createBot, getBotIdFromToken, startBot, } from '@discordeno/mod.ts'

// .env からトークンを取得
const BotToken: string = Deno.env.get("BOT_TOKEN")!;


//botとしての開始
const bot = createBot({
    token: BotToken,//トークンをとりあえず変数で
    botId: getBotIdFromToken(BotToken) as bigint,//ボットにトークンを入れて接続

    
    //メッセージ受信時処理
    messageCreate: async (bot, message) => {
      if (message.authorId === bot.id) return; // ボット自身のメッセージを無視
      await bot.helpers.sendMessage(message.channelId, {
        content: message.content,
      });
    },

    
});



// ボットを起動
await startBot(bot);

// ボットの常時起動
Deno.cron("Continuous Request", "*/2 * * * *", () => {
    console.log("running...");
});
