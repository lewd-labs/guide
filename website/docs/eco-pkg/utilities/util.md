---
sidebar_position: 3
title: Information
tags:
  - Economy
---

# Utilities

## Logger

The logger is a simple utility that can be used to log messages to the console with coloring.

Is used as a Utility class, but can be exported from the package and used yourself. You can find the logger files [here](https://github.com/lewd-labs/discord-ts-economy/tree/main/lib/util/logger).

### disable or enable

To disable or enable the logger, you must enable `debug` in the economy config settings.

example:
```ts {6}
const eco = new Economy({
    currency: "$",
    defaultBankLimit: 23000,
    robEnabled: true,
    shopEnabled: false,
    debug: true, // default: false
});
```

### log

- Returns a console log with a value and color GREEN

### info

- Returns a console log with a value and color CYAN

### warn

- Returns a console log with a value and color YELLOW

### error

- Returns a console log with a value and color RED

### Using the logger in your code

```ts
import { Logger } from "discord-ts-economy";

Logger.info(`This is an info message about from test data: ${testData}`);
// your code...
```

:::note
    You don't have to use new Logger() Because we already export a new Instance.
:::