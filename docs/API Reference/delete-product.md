---
sidebar_position: 5
---

# Delete Product

Deletes an existing product from the E-Commerce Product Catalog using its unique product ID.

## Endpoint

DELETE /api/products/:id


The `:id` path parameter identifies the product that should be deleted.

## Path Parameters

Parameter	Type	Required	Description
id	integer	Yes	Unique identifier of the product to delete
Request
To delete a product, provide its ID in the request URL.

Example:

DELETE /api/products/1
This request deletes the product with an ID of 1.

Example URL
When running the API locally:

http://localhost:3000/api/products/1
Successful Response
If the product exists and is successfully deleted, the API should return a success response.

Example:

200 OK
Depending on the API implementation, the response may contain a confirmation message.

Example:
```bash
{
  "message": "Product deleted successfully"
}
```
Note: Replace the status code and response body above with the exact response returned by your API.
Product Not Found
If a product with the specified ID does not exist, the API should return an appropriate error response.

Example:

404 Not Found
Example response:
```bash

{
  "message": "Product not found"
}
```
Note: Use the exact status code and response structure returned by your API if they are different.
Request Examples
Delete Product 1
DELETE /api/products/1
Delete Product 10
DELETE /api/products/10
Delete Product 100
DELETE /api/products/100
Using Swagger UI
You can test the delete endpoint directly through Swagger UI.

Start the API and open:

http://localhost:3000/api-docs
Locate:

DELETE /api/products/:id
Select Try it out.

Enter the ID of the product you want to delete.

For example:

1
Then select Execute.

Swagger UI will send the following request:

DELETE /api/products/1
The response from the API will be displayed below the request.

How It Works
The product deletion process follows these steps:

The client sends a DELETE request to /api/products/:id.
The API reads the product ID from the URL.
The API searches the catalog for the specified product.
If the product exists, it is removed from the catalog.
The API returns a confirmation response.
If the product does not exist, the API returns a 404 Not Found response.
Complete CRUD Operations
The E-Commerce Product Catalog API now supports the complete set of CRUD operations:

Operation	Method	Endpoint	Description
Create	POST	/api/products	Create a new product
Read All	GET	/api/products	Retrieve all products
Read One	GET	/api/products/:id	Retrieve a product by ID
Update	PUT	/api/products/:id	Update an existing product
Delete	DELETE	/api/products/:id	Delete a product
Next Steps
You can now explore the complete API using Swagger UI or review the individual API endpoints in the API Reference section.


Your documentation structure is now:

docs/ │ ├── intro.md │ ├── getting-started/ │ ├── installation.md │ └── swagger.md │ └── api-reference/ ├── get-products.md ├── get-product.md ├── create-product.md ├── update-product.md └── delete-product.md


So you've now documented the **complete CRUD API**:

POST → Create GET → Read GET/:id → Read one PUT/:id → Update DELETE/:id → Delete


The next useful section would be **Query Features**, where we document your `Filtering`, `Sorting`, and `Pagination` separately and link them back to `GET /api/products`.