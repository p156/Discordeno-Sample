import "$std/dotenv/load.ts"
import { createBot } from '@discordeno/mod.ts'

export const bot = createBot({
  token: process.env.BOT_TOKEN,
})

await bot.start()

Deno.cron("Continuous Request", "*/2 * * * *", () => {
    console.log("running...");
});
