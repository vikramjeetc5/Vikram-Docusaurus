---
sidebar_position: 3
---

# Create Product

Creates a new product in the E-Commerce Product Catalog.

## Endpoint

POST /api/products


This endpoint accepts product information in the request body and adds a new product to the catalog.

## Request Body

The product information should be sent as a JSON object.

Example:
```bash
{
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```

## Request Body Parameters

Field	Type	Required	Description
name	string	Yes	Name of the product
category	string	Yes	Category assigned to the product
price	number	Yes	Price of the product
status	string	Yes	Current inventory status
Supported status values:

in_stock
out_of_stock
discontinued
Note: The fields above are based on the example product structure used in this documentation. Update the table to match the exact schema implemented by your API.
Example Request
POST /api/products
Content-Type: application/json
Request body:
```bash
{
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```
Example using cURL
The endpoint can also be tested using cURL:
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Headphones",
    "category": "electronics",
    "price": 79.99,
    "status": "in_stock"
  }'
```
Successful Response
If the product is successfully created, the API should return a success response containing the newly created product.

Example:

201 Created
Example response:

```bash
{
  "id": 101,
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```

The API assigns a unique ID to the newly created product.

Validation
The API should validate the submitted product data before creating the product.

Examples of invalid requests include:

Missing required fields
Invalid product price
Invalid product status
Incorrect data types
For example, an invalid status value:
```bash
{
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "available"
}
```
The value available is not one of the supported inventory statuses.

Example Error Response
If the submitted data is invalid, the API may return a client error.

For example:

400 Bad Request
Example response:
```bash
{
  "message": "Invalid product data"
}
```
Note: Use the exact status code and error response returned by your API if they differ from this example.
Using Swagger UI
You can test the POST /api/products endpoint directly through Swagger UI.

Start the API and open:

http://localhost:3000/api-docs
Locate:

POST /api/products
Select Try it out.

Enter the product information in the request body:
```bash
{
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```
Select Execute to send the request.

Swagger UI will display the request result and the response returned by the API.

How It Works
The product creation process follows these steps:

The client sends a POST request to /api/products.
The product information is included in the request body.
The API validates the submitted data.
A new product is created.
The API assigns a unique ID to the product.
The newly created product is returned in the response.
Next Steps
Continue to Update Product to learn how to modify an existing product using its ID.


Your API Reference section is now:

API Reference │ ├── Get All Products ├── Get Product by ID └── Create Product


Next, we can create **`update-product.md`** for `PUT /api/products/:id`, and after that **`delete-product.md`** for `DELETE /api/products/:id`.

