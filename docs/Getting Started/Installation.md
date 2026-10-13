---
sidebar_position: 1
---

# Installation
```bash
Documentation
│
├── Introduction
│
├── Getting Started
│   ├── Installation
│   └── Swagger UI
│
├── API Reference
│   └── Products
│       ├── Get All Products
│       ├── Get Product by ID
│       ├── Create Product
│       ├── Update Product
│       └── Delete Product
│
├── Query Features
│   ├── Filtering
│   ├── Sorting
│   └── Pagination
│
├── Guides
│   ├── Working with Products
│   └── API Usage Examples
│
├── API Conventions
│
├── Error Handling
│   ├── HTTP Status Codes
│   └── Error Responses
│
├── Troubleshooting
│   └── Common Issues
│
└── FAQ
    └── Frequently Asked Questions
```
    
This guide explains how to install and run the **E-Commerce Product Catalog API** in a local development environment.

## Prerequisites

Before you begin, make sure the following software is installed on your system:

- **Node.js** — JavaScript runtime environment
- **npm** — Node.js package manager
- **Git** — Version control system

Verify the installations by running:

node -v npm -v git --version


## Clone the Repository

Clone the E-Commerce Product Catalog API repository:

git clone URL


Replace URL with the URL of your API repository.

Navigate to the project directory:

cd project-directory


## Install Dependencies

Install all required project dependencies using npm:

npm install


This installs the packages defined in the project's `package.json` file.

## Start the API

Start the API development server:

npm run dev


Once the server starts successfully, the API will be available at the configured local URL.

For example:

http://localhost:3000


## Verify the Installation

You can verify that the API is running by sending a request to the products endpoint:

GET /api/products


For example:

http://localhost:3000/api/products


A successful request should return the products available in the catalog.

## Access Swagger UI

The API includes **Swagger UI**, which provides an interactive interface for exploring and testing the API.

Open Swagger UI in your browser using the configured Swagger endpoint:

http://localhost:3000/api-docs


Swagger UI allows you to:

- View all available API endpoints
- Inspect request parameters
- View request and response schemas
- Execute API requests directly from the browser
- Test `GET`, `POST`, `PUT`, and `DELETE` operations

## Next Steps

After successfully installing and running the API, continue to the **Swagger UI** guide to learn how to explore and test the API interactively.
Important
Your file should look like this in VS Code:

installation.md
And the very first line should be:

---
Not:

sidebar_position: 1
The three dashes are important because they tell Docusaurus that the following section is front matter.

Also, if your API does not use:

npm run dev
or Swagger is not at:

/api-docs
tell me what your API uses, and I'll adjust the documentation to match your actual project.