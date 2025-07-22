import "$std/dotenv/load.ts"
import { createBot,getBotIdFromToken,startBot } from '@discordeno/mod.ts'

const BotToken: string = Deno.env.get("BOT_TOKEN")!;

const bot = createBot({
    token: BotToken,
    botId: getBotIdFromToken(BotToken) as bigint,
});
await startBot(bot);

Deno.cron("Continuous Request", "*/2 * * * *", () => {
    console.log("running...");
});
