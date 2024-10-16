
import type { CommandInteraction } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, On, Slash, SlashChoice, SlashOption,Client,Guard,SimpleCommand,SimpleCommandMessage, ArgsOf, } from "discordx";
import { Events } from "discord.js";
import { NotBot } from "@discordx/utilities";


var Options: Array<string>  = [
    "Someday",
    "Maybe later",
    "Today",
    "Yesterday",
    "Next week",
    "Never",
    "Not in a million years",
    "Go fish",
    "You wish",
    "When pigs fly",
    "In your dreams",
    "Next month",
    "👻",
    "When you get some bitches",
    "Soon™..",
    "In a hot minute.",
    "When the stars align.",
    "Once you get your life together",
    "In a sec, bruh.",
    "Any moment now.",
    "It's coming. Trust the process.",
    "Any second now.",
    "In no time at all.",
    "Soon, but like, actually soon.",
    "As fast as humanly possible.",
    "By the time you refresh the page.",
    "Before your next sip of coffee.",
    "After I find Waldo.",
    "After my power nap, maybe.",
    "When hell freezes over.",
    "When AI takes over the world.",
    "In 3-16 business years"
]

@Discord()
@Guard(NotBot)
export class Eta {
  @On({ event: Events.MessageCreate })
  async message([message]: ArgsOf<"messageCreate">) {
    var index: number = Math.floor(Math.random() * Options.length);
    var result = Options[index];
    if (message.content.includes("eta ")) {
      await message.reply(`${result}`)
    }
  }
}