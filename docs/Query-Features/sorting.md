---
sidebar_position: 2
---

# Sorting

The E-Commerce Product Catalog API supports sorting products using the `sort` query parameter.

Sorting allows clients to control the order in which products are returned.

## Sort Parameter

Use the `sort` query parameter followed by the field name you want to sort by.

GET /api/products?sort=price


## Sort by Price

### Ascending Order

To sort products from the lowest price to the highest price, use:

GET /api/products?sort=price


Example result:

$19.99 $39.99 $79.99 $129.99


### Descending Order

Prefix the field name with `-` to sort in descending order:

GET /api/products?sort=-price


Example result:

$129.99 $79.99 $39.99 $19.99


## Sort by Name

Products can also be sorted alphabetically by their name:

GET /api/products?sort=name


This returns products in alphabetical order by product name.

## Supported Sort Fields

Sort Value	Description
price	Sorts products by price in ascending order
-price	Sorts products by price in descending order
name	Sorts products alphabetically by name
Combining Sorting with Filtering
Sorting can be combined with filtering.

For example:

GET /api/products?category=electronics&sort=price
This request:

Filters products by the electronics category.
Sorts the filtered products by price in ascending order.
Another example:

GET /api/products?status=in_stock&sort=-price
This returns products that are currently in stock and sorts them from the highest price to the lowest price.

Combining Sorting with Pagination
Sorting can also be combined with pagination:

GET /api/products?sort=-price&page=1&limit=5
This request:

Sorts products by price in descending order.
Returns the first page.
Limits the response to five products.
Combining All Query Features
Filtering, sorting, and pagination can be used together in a single request.

GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5
This request:

Filters products by the electronics category.
Filters products with an in_stock status.
Sorts the results by price in descending order.
Returns the first page.
Limits the response to five products.
Example Request
A complete sorting request might look like:

GET /api/products?category=electronics&sort=-price
The API first filters the products by category and then returns the matching products sorted by price from highest to lowest.

Swagger UI
Sorting can also be tested directly through Swagger UI.

Open:

http://localhost:3000/api-docs
Find:

GET /api/products
Select Try it out and enter the desired value for the sort parameter.

For example:

sort=-price
Then select Execute to send the request.

Summary
The sort parameter controls the order of products returned by the API.

sort=price
Sorts by price from lowest to highest.

sort=-price
Sorts by price from highest to lowest.

sort=name
Sorts products alphabetically by name.

Sorting can be combined with filtering and pagination to create more specific product queries.


After this, your `query-features` folder will be:

query-features/ ├── filtering.md ├── sorting.md └── pagination.md


Then **pagination** will be the last one in this section.