---
sidebar_position: 5
description: Remove a product from the catalog using its ID.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Method from '@site/src/components/Method';

# Delete Product

Removes a product from the catalog. Give the product's ID in the URL. No request body is needed.

| Method | Endpoint | Purpose |
|---|---|---|
| <Method type="DELETE" /> | `/api/products/{id}` | Remove a product from the catalog |

:::tip[Try it live]

Test this endpoint in [Swagger UI](https://vikram-swaggerui.onrender.com): open `DELETE /api/products/{id}`, select **Try it out**, enter an `id`, and select **Execute**.

:::

:::warning[This cannot be undone]

A deleted product is gone for good. When you are testing, create a product with **Create Product** first, and delete that one.

:::

:::note[Demo server]

The live server is a demo that anyone can use, so its data may change or reset at any time.

:::

## Path Parameter

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | Unique ID of the product to delete |

## Example Request

<Tabs>
<TabItem value="curl" label="curl" default>

```bash
curl -X DELETE https://vikram-swaggerui.onrender.com/api/products/1
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const response = await fetch("https://vikram-swaggerui.onrender.com/api/products/1", {
  method: "DELETE",
});
```

</TabItem>
</Tabs>

## Responses

| Code | Meaning |
|---|---|
| `200` | The product was deleted |
| `404` | No product exists with that ID |

A `404` response looks like this:

```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "No product exists with ID 99."
  }
}
```

## Next Steps

That completes the endpoint reference. Continue to **Query Features** to learn how to filter, sort, and paginate the product list.