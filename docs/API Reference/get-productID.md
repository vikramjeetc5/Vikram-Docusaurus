---
sidebar_position: 2
---

# Get Product by ID

Retrieves a specific product from the E-Commerce Product Catalog using its unique product ID.

## Endpoint

GET /api/products/:id


The `:id` parameter identifies the product that you want to retrieve.

## Path Parameters

Parameter	Type	Required	Description
id	integer	Yes	Unique identifier of the product
Request
To retrieve a product, provide its ID in the request URL.

Example:

GET /api/products/1
This request retrieves the product with an ID of 1.

Another example:

GET /api/products/25
This retrieves the product with an ID of 25.

Example URL
When running the API locally:

http://localhost:3000/api/products/1
Example Response
A successful request returns the product associated with the specified ID.

Example:
```bash

{
  "id": 1,
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```

Note: The response above is an example. Replace the fields with the exact product schema returned by your API if it differs.
Successful Response
If the product exists, the API should return:

200 OK
The response body contains the requested product.

Example:
```bash

{
  "id": 1,
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```
Product Not Found
If a product with the specified ID does not exist, the API should return an appropriate error response.

For example:

404 Not Found
Example response:
```bash

{
  "message": "Product not found"
}
```
Note: Use the exact status code and response body returned by your API if they are different from this example.
Request Examples
Retrieve Product 1
GET /api/products/1
Retrieve Product 10
GET /api/products/10
Retrieve Product 100
GET /api/products/100
Using Swagger UI
You can test this endpoint using Swagger UI.

Start the API and open:

http://localhost:3000/api-docs
Locate:

GET /api/products/:id
Select Try it out, enter the product ID, and select Execute.

For example:

id: 1
Swagger UI will send:

GET /api/products/1
and display the API response.

How It Works
The request follows this process:

The client sends a GET request with a product ID.
The API reads the ID from the request URL.
The API searches the product catalog for the matching product.
If the product exists, the API returns the product.
If the product does not exist, the API returns a 404 Not Found response.
Next Steps
Continue to Create Product to learn how to add a new product to the catalog.


Your API Reference is now becoming:

API Reference │ ├── Get All Products └── Get Product by ID


Next should be **`create-product.md`** for `POST /api/products`, followed by **Update Product** and **Delete Product**