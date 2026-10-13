---
sidebar_position: 1
---

# Commonly faced Issues

This guide covers common issues that may occur when installing, running, or testing the E-Commerce Product Catalog API.

## API Server Does Not Start

If the API does not start, first make sure all dependencies are installed.

Run:

npm install


Then start the API again:

npm run dev


If your project uses a different start command, use the command defined in your `package.json`.

## Port Already in Use

If you receive an error indicating that the port is already in use, another application may already be running on the same port.

For example:

Port 3000 is already in use


You can:

- Stop the application currently using the port.
- Restart your computer.
- Configure the API to use a different port.

After changing the port, make sure you also use the new port when accessing Swagger UI.

For example:

http://localhost:3001/api-docs


## Swagger UI Does Not Load

If Swagger UI does not load, first verify that the API server is running.

Open:

http://localhost:3000/api-docs


If the page does not load:

1. Check that the API server is running.
2. Verify the port number.
3. Verify the Swagger endpoint.
4. Check the terminal for API errors.

## GET /api/products Returns an Error

If the products endpoint returns an error, verify that the API is running and that the request URL is correct.

Example:

GET /api/products


For a local API:

http://localhost:3000/api/products


## Product ID Not Found

If you receive a `404 Not Found` response when retrieving, updating, or deleting a product, verify that the product ID exists.

For example:

GET /api/products/1


Make sure product `1` exists in the catalog.

## Invalid Query Parameter

If a request using filtering, sorting, or pagination fails, verify that the query parameter is supported and correctly formatted.

For example:

GET /api/products?sort=-price


Supported sorting values include:

price -price name


## Invalid Product Status

The API supports the following product statuses:

instock outof_stock discontinued


For example:
```bash

{ "name": "Wireless Headphones", "category": "electronics", "price": 79.99, "status": "in_stock" }
```

Using an unsupported status may result in a validation error.

## POST Request Fails

When creating a product, verify that:

- The request uses `POST`.
- The endpoint is `/api/products`.
- The request contains valid JSON.
- The `Content-Type` header is `application/json`.
- Required product fields are provided.

Example:

POST /api/products Content-Type: application/json


## PUT Request Fails

When updating a product, make sure that:

- The product ID is included in the URL.
- The request uses `PUT`.
- The request body contains valid JSON.
- The product ID exists.

Example:

PUT /api/products/1 Content-Type: application/json


## DELETE Request Fails

When deleting a product, verify that the product ID exists.

Example:

DELETE /api/products/1


If the product does not exist, the API may return:

404 Not Found


## Still Having Problems?

If the issue persists:

1. Check the terminal where the API is running.
2. Check the browser developer console if the request is made from a web application.
3. Verify the API URL and port.
4. Verify the request method and parameters.
5. Test the endpoint using Swagger UI.