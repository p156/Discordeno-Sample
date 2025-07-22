import 'dotenv/config'
import { createBot } from '@discordeno/bot'

export const bot = createBot({
  token: process.env.TOKEN,
})

await bot.start()

Deno.cron("Continuous Request", "*/2 * * * *", () => {
    console.log("running...");
});
