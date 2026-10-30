---
sidebar_position: 1
description: Install and run the E-Commerce Product Catalog API on your own machine.
---

# Installation

This guide shows you how to install and run the E-Commerce Product Catalog API locally. You can also skip the installation and try the [live Swagger UI](https://vikram-swaggerui.onrender.com).

## Prerequisites

| Tool | Used for | Check it with |
|---|---|---|
| Node.js | Runs the API | `node -v` |
| npm | Installs the packages | `npm -v` |
| Git | Clones the repository | `git --version` |

## Install and Run

1. **Clone the repository** and go into the project folder:

   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   ```

2. **Install the dependencies** listed in `package.json`:

   ```bash
   npm install
   ```

3. **Start the API** in development mode:

   ```bash
   npm run dev
   ```

:::tip[Port already in use?]

This documentation site also starts on port 3000 by default. If both run at the same time, one of them needs a different port.

:::

## Check That It Works

Open the products endpoint in your browser:

```text
http://localhost:3000/api/products
```

You should see a JSON response with a `data` list of products and a `pagination` object.

:::tip[Success]

If the JSON appears, the API is running.

:::

## Open Swagger UI

Swagger UI lets you view every endpoint and send requests from the browser:

```text
http://localhost:3000/api-docs
```

## Next Steps

Continue to the [Swagger UI guide](./swagger.md) to learn how to explore and test the API. If something does not work, see [Troubleshooting](../troubleshooting/common-issues.md).