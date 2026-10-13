---
sidebar_position: 2
---

# Swagger UI

Swagger UI provides an interactive interface for exploring, understanding, and testing the **E-Commerce Product Catalog API**.

Instead of manually creating HTTP requests, Swagger UI allows you to select an endpoint, provide the required parameters or request body, and execute the request directly from the browser.

## What is Swagger UI?

Swagger UI is an interactive documentation interface generated from an OpenAPI specification.

For this project, Swagger UI documents the available product endpoints and provides information about:

- HTTP methods
- Endpoint URLs
- Query parameters
- Path parameters
- Request bodies
- Response formats
- API status codes

## Accessing Swagger UI

Start the E-Commerce Product Catalog API locally.

For example:

npm run dev


Once the API is running, open the Swagger UI URL in your browser:

http://localhost:3000/api-docs


> **Note:** Replace the URL above if your API uses a different port or Swagger endpoint.

## API Endpoints

The Swagger UI documents the following product operations:

Method	Endpoint	Description
GET	/api/products	Retrieve all products
GET	/api/products/:id	Retrieve a product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
Using Swagger UI
1. Select an Endpoint
Open Swagger UI and locate the endpoint you want to test.

For example:

GET /api/products
This endpoint retrieves products from the catalog.

2. Click "Try it out"
Select the Try it out button to enable the request fields.

You can then enter parameters or request data required by the endpoint.

3. Enter Request Parameters
For example, the products endpoint supports filtering:

category=electronics
You can also use other supported parameters such as:

status=in_stock
sort=-price
page=1
limit=5
4. Execute the Request
Click the Execute button.

Swagger UI sends the request to the API and displays the server response.

For example:

GET /api/products?category=electronics&status=in_stock
Request and Response
Swagger UI displays both the request information and the API response.

A successful response may look similar to:

```bash

{
  "id": 1,
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```
The exact response structure depends on the API implementation.

Testing POST Requests
Swagger UI can also be used to test the POST /api/products endpoint.

Select:

POST /api/products
Click Try it out and provide the product information in the request body.

Example:

```bash

{
  "name": "Wireless Headphones",
  "category": "electronics",
  "price": 79.99,
  "status": "in_stock"
}
```
Click Execute to send the request.

If the request is successful, the API returns the newly created product.

Testing PUT Requests
To update an existing product, select:

PUT /api/products/:id
Provide the product ID and the updated product information.

For example:

PUT /api/products/1
Then provide the updated data in the request body.

Testing DELETE Requests
To delete a product, select:

DELETE /api/products/:id
Provide the ID of the product you want to delete.

For example:

DELETE /api/products/1
Click Execute to send the request.

Query Parameters
The Swagger UI also documents the query parameters supported by the products endpoint.

Filtering
Products can be filtered by category:

category=electronics
Products can also be filtered by inventory status:

status=in_stock
Supported status values are:

in_stock
out_of_stock
discontinued
Sorting
Products can be sorted using the sort parameter.

Sort by price in ascending order:

sort=price
Sort by price in descending order:

sort=-price
Sort alphabetically by product name:

sort=name
Pagination
The API supports pagination using the page and limit parameters.

For example:

page=1
limit=5
This can be combined into a request such as:

GET /api/products?page=1&limit=5
The default page size is 10 products per response.

Example Request
Swagger UI can be used to test multiple query parameters together.

For example:

GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5
This request:

Filters products by the electronics category.
Returns products that are currently in_stock.
Sorts products by price from highest to lowest.
Requests the first page.
Limits the response to five products.
Benefits of Swagger UI
Using Swagger UI makes the API easier to understand and test because developers can:

Explore available endpoints
Understand request parameters
View API schemas
Test requests without external API clients
Inspect API responses
Experiment with different query parameters
Next Steps
Now that Swagger UI is set up, continue to the API Reference section to learn about each product endpoint in detail.