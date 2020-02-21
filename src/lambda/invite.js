import { Client } from 'discord.js'

exports.handler = async function(event, context) {
  const bot = new Client()
  await bot.login(process.env.BOT_TOKEN)

  const guild = bot.guilds.get(process.env.GATSBY_GUILD_ID)
  const channel = guild.channels.get(process.env.GATSBY_INVITE_CHANNEL_ID)

  const invite = await channel.createInvite(
    {
      temporary: false,
      maxUses: 1,
      unique: true,
    },
    'Generated an invite for a new user!'
  )

  return {
    statusCode: 301,
    headers: {
      Location: invite.url,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({ inviteCode: invite.code }),
  }
}
