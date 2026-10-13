---
sidebar_position: 1
---

# Filtering

The E-Commerce Product Catalog API supports filtering products using query parameters.

Filtering allows clients to retrieve only the products that match specific criteria instead of retrieving the entire catalog.

## Category Filter

Use the `category` query parameter to filter products by category.

GET /api/products?category=electronics


This request returns products belonging to the `electronics` category.

### Case-Insensitive Filtering

Category filtering is case-insensitive.

For example, the following requests produce the same category filter:

GET /api/products?category=electronics


GET /api/products?category=Electronics


GET /api/products?category=ELECTRONICS


## Status Filter

Use the `status` query parameter to filter products according to their inventory status.

GET /api/products?status=in_stock


The API supports the following status values:

instock outof_stock discontinued


### In Stock

GET /api/products?status=in_stock


Returns products that are currently available.

### Out of Stock

GET /api/products?status=outofstock


Returns products that are currently unavailable.

### Discontinued

GET /api/products?status=discontinued


Returns products that have been discontinued.

## Combining Filters

Multiple filters can be used in the same request.

For example:

GET /api/products?category=electronics&status=in_stock


This request returns products that:

- Belong to the `electronics` category
- Have an `in_stock` status

## Filtering with Sorting

Filtering can also be combined with sorting.

GET /api/products?category=electronics&sort=price


This returns electronic products sorted by price in ascending order.

## Filtering with Pagination

Filtering can also be combined with pagination.

GET /api/products?category=electronics&page=1&limit=5


This returns the first five electronic products.

## Complete Example

All supported query features can be combined:

GET /api/products?category=electronics&status=in_stock&sort=-price&page=1&limit=5


This request:

1. Filters by the `electronics` category.
2. Filters for products that are `in_stock`.
3. Sorts the results by price in descending order.
4. Returns the first page.
5. Limits the response to five products.

## Summary

Parameter	Description	Example
category	Filter by product category	category=electronics
status	Filter by inventory status	status=in_stock
Filtering can be combined with sorting and pagination to create more specific product queries.


---
