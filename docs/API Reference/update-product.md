---
sidebar_position: 4
---

# Update Product

Updates an existing product in the E-Commerce Product Catalog using its unique product ID.

## Endpoint

PUT /api/products/:id


The `:id` path parameter identifies the product that needs to be updated.

## Path Parameters

Parameter	Type	Required	Description
id	integer	Yes	Unique identifier of the product to update
Request Body
The updated product information is sent as a JSON object in the request body.

Example:
```bash

{
  "name": "Wireless Headphones Pro",
  "category": "electronics",
  "price": 99.99,
  "status": "in_stock"
}
```
Request Body Parameters
Field	Type	Required	Description
name	string	Yes	Name of the product
category	string	Yes	Category assigned to the product
price	number	Yes	Price of the product
status	string	Yes	Current inventory status
Supported status values:

in_stock
out_of_stock
discontinued
Note: Update the fields above if your actual API uses a different product schema.
Example Request
To update product 1:

PUT /api/products/1
Content-Type: application/json
Request body:
```bash

{
  "name": "Wireless Headphones Pro",
  "category": "electronics",
  "price": 99.99,
  "status": "in_stock"
}
```
Example URL
When running the API locally:

http://localhost:3000/api/products/1
Successful Response
If the product exists and the update is successful, the API should return a success response.

Example status:

200 OK
Example response:
```bash

{
  "id": 1,
  "name": "Wireless Headphones Pro",
  "category": "electronics",
  "price": 99.99,
  "status": "in_stock"
}
```
Product Not Found
If the specified product ID does not exist, the API should return an appropriate error response.

Example:

404 Not Found
Example response:
```bash

{
  "message": "Product not found"
}
```
Note: Use the exact status code and response structure returned by your API if they are different.
Validation
The API should validate the updated product data before applying the changes.

Examples of invalid data include:

Missing required fields
Invalid price
Invalid product status
Incorrect data types
For example:
```bash

{
  "name": "Wireless Headphones Pro",
  "category": "electronics",
  "price": -50,
  "status": "in_stock"
}
```
If the API does not accept negative prices, this request should be rejected with an appropriate validation error.

Example Error Response
An invalid request may return:

400 Bad Request
Example:
```bash

{
  "message": "Invalid product data"
}
```
Note: Replace this example with the exact validation response implemented by your API.
Using Swagger UI
You can test the update endpoint directly through Swagger UI.

Start the API and open:

http://localhost:3000/api-docs
Locate:

PUT /api/products/:id
Select Try it out.

Enter the product ID:

1
Then provide the updated product information:
```bash

{
  "name": "Wireless Headphones Pro",
  "category": "electronics",
  "price": 99.99,
  "status": "in_stock"
}
```
Select Execute to send the request.

Swagger UI will display the response returned by the API.

How It Works
The product update process follows these steps:

The client sends a PUT request to /api/products/:id.
The API reads the product ID from the URL.
The API searches the catalog for the specified product.
The API validates the updated product information.
The existing product is updated.
The API returns the updated product.
Example
An existing product:
```bash

{
  "id": 1,
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```
can be updated with:

PUT /api/products/1
Using:
```bash

{
  "name": "Wireless Headphones Pro",
  "category": "electronics",
  "price": 99.99,
  "status": "in_stock"
}
```
The resulting product would be:
```bash

{
  "id": 1,
  "name": "Wireless Headphones Pro",
  "category": "electronics",
  "price": 99.99,
  "status": "in_stock"
}
```
Next Steps
Continue to Delete Product to learn how to remove a product from the catalog.


Your API Reference now becomes:

API Reference │ ├── Get All Products ├── Get Product by ID ├── Create Product └── Update Product


The last CRUD operation is **Delete Product**.