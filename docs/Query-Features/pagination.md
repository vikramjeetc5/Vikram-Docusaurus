---
sidebar_position: 3
---

# Pagination

The E-Commerce Product Catalog API uses pagination to control the number of products returned in a single response.

Pagination allows clients to retrieve large product catalogs in smaller sets of results instead of returning every product in one response.

## Default Page Size

The default page size is **10 products per response**.

A request without pagination parameters:

GET /api/products


returns the first page using the default page size.

## Pagination Parameters

The API supports two pagination parameters:

Parameter	Type	Description
page	integer	Specifies the page number
limit	integer	Specifies the maximum number of products returned
Both parameters are optional.

Page Parameter
The page parameter specifies which page of results should be returned.

For example:

GET /api/products?page=1
This requests the first page of products.

To request the second page:

GET /api/products?page=2
To request the third page:

GET /api/products?page=3
Limit Parameter
The limit parameter specifies the maximum number of products returned in a response.

For example:

GET /api/products?limit=5
This requests a maximum of five products.

You can change the limit depending on how many products you want to retrieve:

GET /api/products?limit=10
GET /api/products?limit=20
Page and Limit Together
The page and limit parameters can be used together.

For example:

GET /api/products?page=1&limit=5
This requests:

Page 1
A maximum of 5 products
To retrieve the second page:

GET /api/products?page=2&limit=5
The API returns the next set of products using the same page size.

Pagination Example
Assume the product catalog contains 20 products and the request uses:

limit=5
The products can be retrieved across four pages.

Page 1
GET /api/products?page=1&limit=5
Returns products 1–5.

Page 2
GET /api/products?page=2&limit=5
Returns products 6–10.

Page 3
GET /api/products?page=3&limit=5
Returns products 11–15.

Page 4
GET /api/products?page=4&limit=5
Returns products 16–20.

Pagination with Filtering
Pagination can be combined with filtering.

For example:

GET /api/products?category=electronics&page=1&limit=5
This request:

Filters products by the electronics category.
Returns the first page.
Limits the response to five products.
Another example:

GET /api/products?status=in_stock&page=2&limit=5
This returns the second page of products that are currently in stock.

Pagination with Sorting
Pagination can also be combined with sorting.

For example:

GET /api/products?sort=-price&page=1&limit=5
This request:

Sorts products by price in descending order.
Returns the first page.
Limits the response to five products.
Combining Filtering, Sorting, and Pagination
All query features can be combined in a single request.

GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5
This request:

Filters products by the electronics category.
Filters products with an in_stock status.
Sorts the results by price from highest to lowest.
Returns the first page.
Limits the response to five products.
Example Request
A basic paginated request:

GET /api/products?page=1&limit=5
A more advanced request:

GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5
Swagger UI
Pagination can be tested directly through Swagger UI.

Open:

http://localhost:3000/api-docs
Find:

GET /api/products
Select Try it out.

Enter the pagination parameters:

page: 1
limit: 5
Then select Execute.

Swagger UI will send:

GET /api/products?page=1&limit=5
and display the API response.

Pagination Summary
Parameter	Description	Example
page	Specifies the page number	page=1
limit	Specifies the number of products per page	limit=5
The default page size is 10 products per response.

Pagination can be combined with filtering and sorting to efficiently retrieve specific sections of the product catalog.

Next Steps
You have now covered the main query features of the E-Commerce Product Catalog API:

Filtering
Sorting
Pagination
Continue to the API Reference to explore the individual product endpoints.


Your final documentation structure is now:

docs/ │ ├── intro.md │ ├── getting-started/ │ ├── installation.md │ └── swagger.md │ ├── api-reference/ │ ├── get-products.md │ ├── get-product.md │ ├── create-product.md │ ├── update-product.md │ └── delete-product.md │ └── query-features/ ├── filtering.md ├── sorting.md └── pagination.md


So the **content/documentation side is essentially complete**. The next step should be configuring `sidebars.ts` so Docusaurus displays this exact hierarchy in the left sidebar.