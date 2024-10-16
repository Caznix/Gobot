
import { dirname, importx } from "@discordx/importer";
import { IntentsBitField, Partials } from "discord.js";
import { Client } from "discordx";
import dotenv from 'dotenv'; 
dotenv.config();

const apiKey = process.env.TOKEN
export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static async start(): Promise<void> {
    this._client = new Client({
      // (client) => client.guilds.cache.map((guild) => guild.id)],
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
      ],
      // enable partials to receive direct messages
      partials: [Partials.Channel, Partials.Message],

      silent: false,

      simpleCommand: {
        prefix: ["$", "!"],
      },
    });

    this._client.on("messageCreate", (message) => {
      void this._client.executeCommand(message);
    });

    this._client.once("ready", () => {
      void this._client.initApplicationCommands();

      console.log("Bot started");
    });

    this._client.on("interactionCreate", (interaction) => {
      this._client.executeInteraction(interaction);
    });

    await importx(`${dirname(import.meta.url)}/commands/**/*.{js,ts}`);
    await importx(`${dirname(import.meta.url)}/passives/**/*.{js,ts}`);

    // let's start the bot
    // if (!process.env.BOT_TOKEN) {
    //   throw Error("Could not find BOT_TOKEN in your environment");
    // }
    await this._client.login(`${apiKey}`);
  }
}

void Main.start();