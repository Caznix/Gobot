import type { CommandInteraction } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";

@Discord()
export class Ask {
  @Slash({ description: "Replies with the ask to ask quote", name: "asktoask" })
  async ask(
    interaction: CommandInteraction,
  ): Promise<void> {
    await interaction.reply(`https://dontasktoask.com/\n> To put it simply: don't ask "Any GDScript experts around?", but rather ask "How do I do [problem] with Godot and [other relevant info]?" Asking vauge questions to the void gets nobody anywhere. Help yourself and be more specific!`);
  }
}