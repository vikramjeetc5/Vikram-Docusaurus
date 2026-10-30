---
sidebar_position: 2
description: Retrieve the details of one product using its ID.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Method from '@site/src/components/Method';

# Get Product by ID

Returns the details of a single product when you know its ID.

| Method | Endpoint | Purpose |
|---|---|---|
| <Method type="GET" /> | `/api/products/{id}` | Get details for a specific product |

:::tip[Try it live]

Test this endpoint in [Swagger UI](https://vikram-swaggerui.onrender.com): open `GET /api/products/{id}`, enter an `id`, and select **Execute**.

:::

## Path Parameter

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | Unique ID of the product |

## Example Request

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl https://vikram-swaggerui.onrender.com/api/products/1
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const response = await fetch("https://vikram-swaggerui.onrender.com/api/products/1");
const product = await response.json();
```

</TabItem>
</Tabs>

## Responses

| Code | Meaning |
|---|---|
| `200` | The product was found and returned |
| `404` | No product exists with that ID |

<Tabs>
<TabItem value="200" label="200 Success" default>

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
<TabItem value="404" label="404 Not found">

A request such as `GET /api/products/99` returns:

```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "No product exists with ID 99."
  }
}
```

</TabItem>
</Tabs>

## Next Steps

Continue to **Create Product** to add a new product to the catalog.