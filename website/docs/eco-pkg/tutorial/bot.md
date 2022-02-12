---
sidebar_position: 2
title: bot
tags:
  - Economy
  - Demo
---

# Beginner Demo

## Our code

Make sure you have all the required dependencies to run node.js Your `package.json` file is also important for coding a bot. We will use commonjs but feel free to use `import {} from ""` syntax if you want.

Please copy the following into your `index.js` file below:

```js
const { Client, Intents } = require("discord.js");

const botClient = new Client({
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

botClient.on("ready", () => {
	console.log(`Logged in as ${botClient.user.tag}!`);
});

botClient.on("messageCreate", async (msg) => {
	if (msg.content === "+ping") {
		await msg.reply("Pong!");
	}
});

botClient.login("token");
```

This is the starter code we will use to make our simple economy bot.

Make sure to create a discord bot token and fill `client.login("token");`.

### I don't understand this code

:::tip

YouTube is an amazing place to learn 😁 But I will give a basic explanation below

:::

## The code explained

Before we continue lets make sure you understand how the command works.

```js
const { Client, Intents } = require("discord.js");
```

In this code, we are importing the classes / methods created by discord.js developers.

The client class controls our entire discord bot and its methods.

```js
const botClient = new Client({
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

botClient.on("ready", () => {
	console.log(`Logged in as ${botClient.user.tag}!`);
});
```

Here we are creating a new instance of the `Client` class and filling out its constructor with the most basic required settings.

Both intends all use to respond to guild (server) actions and listen for messages on discord.com

Lastly we have a ready event fired when the bot has started and connected to the discord api.

```js
botClient.on("messageCreate", async (msg) => {
	if (msg.content === "+ping") {
		await msg.reply("Pong!");
	}
});

botClient.login("token");
```

Here we have another event. Every time a message is send over the api, the bot will trigger this code and do something. We are telling the bot, every time someone sends a message saying `+ping` we will reply with pong. This sends a post request to the channel and displays the message.

The login function sends our super secret token to the discord api and authenticates our bot.

![image](/img/tutorial/example-image-one.png)

### What now?

On the next page we will move to the economy bot code itself. Examples will be show and how to use them in your bot.
