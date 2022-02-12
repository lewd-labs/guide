---
sidebar_position: 2
title: Information
tags:
  - Economy
---

# Methods

Each Class in the economy contains methods that can be used to interact with the economy.
Many of these methods are used to create and manage the economy and its data such as a user balance or bank.

## Exported Classes

Discord-TS-Economy only exports a set number of classes for normal users. However, feel free to use the classes to interact with the economy in your own way.

Classes exported: `Economy`, `fetchManager`, `RewardManager`, `WalletManager`, `CurrencyHandler`, `DataBaseController`
*from [here](https://github.com/lewd-labs/discord-ts-economy/blob/main/lib/index.ts)*

## Economy

The Economy class is responsible for managing the economy and setting the basic configuration for your default settings.
```ts
this.config = {
    currency: "$",
    defaultBankLimit: 20000,
    shopEnabled: false,
    robEnabled: true,
    debug: false,
};
```
*from [here](https://github.com/lewd-labs/discord-ts-economy/blob/main/lib/typings/typings.ts)*

:::warning

If you decide to input your own custom config you must pass all the options required by the economy config type, or it will throw an error.

:::

### Connect

- Allows you to connect to the database using a mongodb url.

Options:
```text
url: string,
```

### self_connect

- Allows you to connect to the database using a mongodb url. But you have control over the mongodb settings and config options.

Options:
```text
url: string,
options?: ConnectOptions,
callback?: CallbackWithoutResult
```

## CurrencyHandler

The CurrencyHandler class is responsible for managing the currency of the economy. 
Methods such as `add`, `subtract` and more are on this Class.

### init

- Loads the documents into cache when the method is called.

### fetch

- Fetches for a users balance from the database.

Returns the bank and wallet values.

options:
```text 
targetUser: string
```

### set

- Set's value to a users wallet or bank.

:::warning
Using this function will overwrite a users balance NOT add money to it. Please use the add function instead if you need to extend the wallet/bank. Think of this like a hard overwrite.
:::

options:

```text
amount: number,
targetUser: string,
type: EconomyMethodOption
```

### add

- Adds value to a users wallet or bank.

options: 
```text
amount: number,
targetUser: string,
type: EconomyMethodOption
```

### subtract

- Subtracts value from a users wallet or bank.

options: 
```text
amount: number,
targetUser: string,
type: EconomyMethodOption
```

### leaderboard

- Returns a list of users with the highest balance.

options:
```text
limit: number  (optional, default value = 10)
```

### pay

- Allows you to pay another user.

options:
```text
amount: number,
targetUser: string,
targetToPay: string,
```

### work

- Allows you to work for money.

options:
```text
targetUser: string,
minEarn: number,
maxEarn: number,
failChance?: number
```

### deposit

- Allows you to deposit money into a bank.

options: 
```text
targetUser: string,
amount: number
```

### withdraw

- Allows you to withdraw money from a bank.

options: 
```text
targetUser: string,
amount: number
```

## More coming soon...