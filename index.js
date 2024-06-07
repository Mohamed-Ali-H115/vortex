require('dotenv').config();
const fs = require('fs');
const { Client, Collection, EmbedBuilder, GatewayIntentBits, PermissionsBitField, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder, ButtonStyle, Collector, ChannelType,  Options, ModalBuilder, TextInputBuilder, TextInputStyle, Embed, Component, AttachmentBuilder} = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const client = new Client({
    intents: Object.values(GatewayIntentBits),
});

client.on('ready', () => {
    console.log(`[Console]: Bot Starting and Running with ${client.user.displayName} (ID: ${client.user.id})`)
});

client.login(process.env.token);