---
sidebar_position: 1
title: start
tags:
  - Economy
  - Demo
---

# Beginner Demo

Hello and thanks for reading. Today we will learn how to implement the discord-ts-economy into discord.js and create an economy bot.

:::info

**YouTube** tutorial coming soon for this package! Make sure to stay tunned.

:::

## Project Setup

To get starting we will require a few things. First make sure you have these things installed:

- [vscode](https://code.visualstudio.com/) *or any other code editor you like*
- [nodejs](https://nodejs.org/en/)
- [discord.js](https://discord.js.org/#/)

After installing the tools on your computer we need to create a new project.

Open a new terminal on your computer where you wish to install this project. Then run the command below:

```
npm install discord-ts-economy

```

This will create a folder called `node_modules` which will store the entire project code locally on your computer.

```
npm install discord.js
```

This command will install discord.js locally as well and allow us to use discord and javascript on discords api. Keep in mind the [discord.js](https://discord.js.org/#/) package is not official managed by [discord.com](https://discord.com/).

Lastly create a new file in your project and name it `index.js`

## Project Structure

If everything looks well from the setup your current folder should look like this:

![tutorial-image-one](/img/tutorial/tut_pic_one.png)

:::caution

This tutorial will not go over how to build a complex discord bot. Please read [discord.js](https://discord.js.org/#/) for detailed information bot the library.

:::

Early 2021, discord announced slash commands coming to discord officially. After being in discord for some time now there are many ways to integrate them into your project, however for simplicity I will be used normal **message based commands** in this tutorial.

