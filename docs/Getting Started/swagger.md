---
sidebar_position: 2
description: Explore and test every endpoint of the E-Commerce Product Catalog API from your browser.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Swagger UI

Swagger UI is an interactive page generated from the API's OpenAPI specification. It lists every endpoint and lets you send real requests from the browser, with no extra tools.

:::tip[Try it live]

Open the [live Swagger UI](https://vikram-swaggerui.onrender.com) and follow the steps below.

:::

## Open Swagger UI

<Tabs>
<TabItem value="live" label="Live demo" default>

Open the [live Swagger UI](https://vikram-swaggerui.onrender.com) in your browser. The first request after a quiet period may take up to a minute to respond.

</TabItem>
<TabItem value="local" label="Run locally">

Start the API, then open Swagger UI in your browser:

```bash
npm run dev
```

```text
http://localhost:3000/api-docs
```

If your API uses a different port or path, use that instead.

</TabItem>
</Tabs>

## Send a Request in Four Steps

1. **Choose an endpoint.** Click a route such as `GET /api/products` to expand it.
2. **Click Try it out.** This unlocks the parameter and request body fields.
3. **Fill in the details.** Enter query parameters, a product ID, or a JSON body.
4. **Click Execute.** The **Server response** section shows the status code and the JSON result.

## Try Each Operation

<Tabs>
<TabItem value="get" label="GET" default>

**List products:** `GET /api/products`. Leave the fields empty, or set `limit` to `5`.

**One product:** `GET /api/products/{id}`. Enter `1` as the `id`.

You should see a `200` response. An ID that does not exist returns `404`. To filter, sort, or page through the list, see [Query Features](../Query%20Features/filtering.md).

```json
{
  "id": 1,
  "name": "Wireless Noise-Canceling Headphones",
  "category": "electronics",
  "price": 199.99,
  "stock": 45,
  "status": "in_stock"
}
```

</TabItem>
<TabItem value="post" label="POST">

`POST /api/products`. Paste a JSON body into the request body field:

```json
{
  "name": "Bluetooth Speaker",
  "category": "electronics",
  "price": 49.99,
  "stock": 20,
  "status": "in_stock"
}
```

A `201` response means the product was created. You get `400` for invalid input, such as a negative price, and `409` if a product with that name already exists.

</TabItem>
<TabItem value="put" label="PUT">

`PUT /api/products/{id}`. Enter the `id` of the product, then paste the updated values into the request body:

```json
{
  "name": "Bluetooth Speaker Pro",
  "category": "electronics",
  "price": 59.99,
  "stock": 15,
  "status": "in_stock"
}
```

A `200` response means the product was updated. An unknown ID returns `404`.

</TabItem>
<TabItem value="delete" label="DELETE">

`DELETE /api/products/{id}`. Enter the `id` of the product, then click **Execute**.

A `200` response means the product was removed. An unknown ID returns `404`.

:::warning

Deleting a product cannot be undone, so use a test product.

:::

</TabItem>
</Tabs>

## Understand the Response

| Code | Meaning |
|---|---|
| `200` | The request succeeded |
| `201` | The product was created |
| `400` | The input is invalid (for example, a missing field or a negative price) |
| `404` | No product exists with that ID |
| `409` | A product with that name already exists |

## Next Steps

Read the [API Reference](../API%20Reference/get-products.md) for each endpoint in detail, or see [Query Features](../Query-Features/filtering.md) to filter, sort, and paginate results.