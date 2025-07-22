import "$std/dotenv/load.ts"
import { createBot } from '@discordeno/mod.ts'

const BotToken: string = Deno.env.get("BOT_TOKEN")!;

await bot.start()

Deno.cron("Continuous Request", "*/2 * * * *", () => {
    console.log("running...");
});
