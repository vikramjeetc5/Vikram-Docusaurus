---
sidebar_position: 3
description: Add a new product to the catalog.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Method from '@site/src/components/Method';

# Create Product

Adds a new product to the catalog. Send the product details as JSON in the request body.

| Method | Endpoint | Purpose |
|---|---|---|
| <Method type="POST" /> | `/api/products` | Add a new product to the catalog |

:::tip[Try it live]

Test this endpoint in [Swagger UI](https://vikram-swaggerui.onrender.com): open `POST /api/products`, select **Try it out**, edit the request body, and select **Execute**.

:::

:::note[Demo server]

The live server is a demo that anyone can use, so its data may change or reset at any time.

:::

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Product name. It must be unique in the catalog |
| `category` | string | Yes | Category, for example `electronics` |
| `price` | number | Yes | Price. It cannot be negative |
| `stock` | integer | Yes | Units in stock. It cannot be negative |
| `status` | string | Yes | `in_stock`, `out_of_stock`, or `discontinued` |

## Example Request

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl -X POST https://vikram-swaggerui.onrender.com/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bluetooth Speaker",
    "category": "electronics",
    "price": 49.99,
    "stock": 20,
    "status": "in_stock"
  }'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const response = await fetch("https://vikram-swaggerui.onrender.com/api/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 49.99,
    stock: 20,
    status: "in_stock",
  }),
});
```

</TabItem>
</Tabs>

## Responses

| Code | Meaning |
|---|---|
| `201` | The product was created |
| `400` | The input is invalid, for example a missing field, a negative price or stock, or an unsupported status |
| `409` | A product with that name already exists |

<Tabs>
<TabItem value="400" label="400 Invalid input" default>

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Price must be a positive number."
  }
}
```

</TabItem>
<TabItem value="409" label="409 Duplicate">

```json
{
  "error": {
    "code": "PRODUCT_ALREADY_EXISTS",
    "message": "A product named 'Bluetooth Speaker' already exists."
  }
}
```

</TabItem>
</Tabs>

## Next Steps

Continue to **Update Product** to change an existing product.