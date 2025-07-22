import 'dotenv/config'
import { createBot } from '@discordeno/bot'

export const bot = createBot({
  token: process.env.BOT_TOKEN,
})

await bot.start()

Deno.cron("Continuous Request", "*/2 * * * *", () => {
    console.log("running...");
});
