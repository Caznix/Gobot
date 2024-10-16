
import type { CommandInteraction } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, On, Slash, SlashChoice, SlashOption,Client,Guard,SimpleCommand,SimpleCommandMessage, ArgsOf, } from "discordx";
import { Events } from "discord.js";
import { NotBot } from "@discordx/utilities";

@Discord()
@Guard(NotBot)
export class Canoe {
  @On({ event: Events.MessageCreate })
  async message([message]: ArgsOf<"messageCreate">) {
    if (message.content.includes("🛶")) {
      await message.react("🛶")
    }
  }
}