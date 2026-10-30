---
sidebar_position: 2
description: Change the order of the product list with the sort parameter.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Method from '@site/src/components/Method';

# Sorting

Use the `sort` query parameter to control the order in which products are returned. Sorting works on the list endpoint.

| Method | Endpoint | Purpose |
|---|---|---|
| <Method type="GET" /> | `/api/products` | Retrieve a list of catalog products |

:::tip[Try it live]

Open `GET /api/products` in [Swagger UI](https://vikram-swaggerui.onrender.com), choose a value in the `sort` field, and select **Execute**.

:::

## Sort Values

| Value | Order |
|---|---|
| `price` | Price, lowest to highest |
| `-price` | Price, highest to lowest. The `-` prefix reverses the order |
| `name` | Product name, alphabetical |

Only one `sort` value can be used in a request.

## What the Order Looks Like

An example with four products priced $19.99, $39.99, $79.99, and $129.99:

| Request | Prices, in the order returned |
|---|---|
| `?sort=price` | 19.99, 39.99, 79.99, 129.99 |
| `?sort=-price` | 129.99, 79.99, 39.99, 19.99 |

## Example Request

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl "https://vikram-swaggerui.onrender.com/api/products?category=electronics&sort=-price"
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const url = "https://vikram-swaggerui.onrender.com/api/products" +
  "?category=electronics&sort=-price";

const response = await fetch(url);
const result = await response.json();
```

</TabItem>
</Tabs>

This returns the electronics products with the most expensive first. The response has the same structure as **Get All Products**.

## Combine Sorting

Sorting is applied after filtering, so you get the matching products in the order you asked for.

| Goal | Request |
|---|---|
| Sort a filtered list | `GET /api/products?category=electronics&sort=price` |
| In-stock products, most expensive first | `GET /api/products?status=in_stock&sort=-price` |
| Sorted and paged | `GET /api/products?sort=-price&page=1&limit=5` |
| All together | `GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5` |

The last request returns the first page of up to five electronics products that are in stock, with the most expensive first.

## Next Steps

Continue to **Pagination** to control how many products come back at a time.