---
sidebar_position: 1
---

# Get All Products

Retrieves products from the E-Commerce Product Catalog.

## Endpoint

GET /api/products


This endpoint returns a list of products available in the catalog.

By default, the results are paginated. You can also use query parameters to filter and sort the products.

## Request

A basic request can be made without any query parameters:

GET /api/products


Example URL:

http://localhost:3000/api/products


## Query Parameters

The endpoint supports the following query parameters:

Parameter	Type	Description
category	string	Filters products by category
status	string	Filters products by inventory status
sort	string	Sorts the returned products
page	integer	Specifies the page number
limit	integer	Specifies the number of products per page
All query parameters are optional.

Filtering
Filter by Category
Use the category parameter to retrieve products belonging to a specific category.

GET /api/products?category=electronics
Category filtering is case-insensitive.

For example:

GET /api/products?category=Electronics
and:

GET /api/products?category=electronics
return the same category of products.

Filter by Status
Use the status parameter to filter products according to their inventory status.

Supported values are:

in_stock
out_of_stock
discontinued
Example:

GET /api/products?status=in_stock
This request returns products that are currently available in inventory.

Sorting
Use the sort parameter to change the order of the returned products.

Sort by Price
To sort products by price in ascending order:

GET /api/products?sort=price
The lowest-priced products are returned first.

Sort by Price Descending
Prefix the field name with - to sort in descending order:

GET /api/products?sort=-price
The highest-priced products are returned first.

Sort by Name
To sort products alphabetically by product name:

GET /api/products?sort=name
Pagination
The API uses pagination to control the number of products returned in a response.

The default page size is:

10 products
Page
Use the page parameter to specify which page of results should be returned.

Example:

GET /api/products?page=1
Limit
Use the limit parameter to control the number of products returned per page.

Example:

GET /api/products?limit=5
This requests a maximum of five products.

Page and Limit Together
You can combine both parameters:

GET /api/products?page=1&limit=5
This requests the first page with a maximum of five products.

Combining Filters
Multiple query parameters can be combined in a single request.

For example:

GET /api/products?category=electronics&status=in_stock
This returns products that:

Belong to the electronics category
Have an in_stock status
Combining Filtering, Sorting, and Pagination
All supported query parameters can be combined.

Example:

GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5
This request:

Filters products by the electronics category.
Filters products to only those that are in_stock.
Sorts the products by price in descending order.
Requests the first page.
Limits the response to five products.
Example Response
A successful request returns the products available in the catalog.

Example response:
```bash

[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "category": "electronics",
    "price": 79.99,
    "status": "in_stock"
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "category": "electronics",
    "price": 99.99,
    "status": "in_stock"
  }
]
```
Note: The response structure above is an example. Replace the fields with the actual response returned by your API if your product schema is different.
HTTP Response
A successful request should return an HTTP success status.

200 OK
The response body contains the requested product data.

Common Examples
Get all products
GET /api/products
Get electronics
GET /api/products?category=electronics
Get products currently in stock
GET /api/products?status=in_stock
Get the most expensive products first
GET /api/products?sort=-price
Get five products from the first page
GET /api/products?page=1&limit=5
Combine all features
GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5
Swagger UI
You can test this endpoint interactively using Swagger UI.

Open Swagger UI while the API is running:

http://localhost:3000/api-docs
Find:

GET /api/products
Select Try it out, enter any required query parameters, and select Execute to send the request.

Next Steps
Continue to Get Product by ID to learn how to retrieve a specific product using its ID.


Your structure will now be:

docs/ │ ├── intro.md │ ├── getting-started/ │ ├── installation.md │ └── swagger.md │ └── api-reference/ └── get-products.md


One thing to be careful about: I used an **example product response** because you haven't given me your actual product JSON/schema yet. Once you give me your Swagger/OpenAPI definition or the actual API response, we can replace that example with the **exact response schema, status codes, and error responses** from your API.