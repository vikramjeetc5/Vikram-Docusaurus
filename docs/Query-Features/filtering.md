---
sidebar_position: 1
description: Filter the product list by category or inventory status.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Method from '@site/src/components/Method';

# Filtering

Use query parameters to get only the products that match what you need, instead of the whole catalog. Filters work on the list endpoint.

| Method | Endpoint | Purpose |
|---|---|---|
| <Method type="GET" /> | `/api/products` | Retrieve a list of catalog products |

:::tip[Try it live]

Open `GET /api/products` in [Swagger UI](https://vikram-swaggerui.onrender.com), enter a value in the `category` or `status` field, and select **Execute**.

:::

## Filter Parameters

| Name | Type | Description | Example |
|---|---|---|---|
| `category` | string | Products in this category. Matching is case-insensitive | `?category=electronics` |
| `status` | string | Products with this inventory status | `?status=in_stock` |

`category=electronics`, `category=Electronics`, and `category=ELECTRONICS` return the same products.

## Status Values

| Value | Returns |
|---|---|
| `in_stock` | Products that are currently available |
| `out_of_stock` | Products that are currently unavailable |
| `discontinued` | Products that are no longer sold |

## Example Request

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl "https://vikram-swaggerui.onrender.com/api/products?category=electronics&status=in_stock"
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const url = "https://vikram-swaggerui.onrender.com/api/products" +
  "?category=electronics&status=in_stock";

const response = await fetch(url);
const result = await response.json();
```

</TabItem>
</Tabs>

This returns the electronics products that are in stock. The response has the same structure as **Get All Products**.

## Combine Filters

You can use both filters together, and add sorting or pagination too.

| Goal | Request |
|---|---|
| Category and status | `GET /api/products?category=electronics&status=in_stock` |
| With sorting | `GET /api/products?category=electronics&sort=price` |
| With pagination | `GET /api/products?category=electronics&page=1&limit=5` |
| All together | `GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5` |

The last request returns the first page of up to five electronics products that are in stock, with the most expensive first.

## Next Steps

Continue to **Sorting** to change the order of the results.