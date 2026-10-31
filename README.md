# E-Commerce Product Catalog API Documentation

Documentation site for the **E-Commerce Product Catalog API**, a REST API for managing products in an online store's catalog. It explains how to install and run the API, how to use Swagger UI, and how every endpoint, query feature, and common problem works.


## 🚀 Try Now

[![Live Documentation](https://img.shields.io/badge/Live-Documentation-22C55E?style=for-the-badge&logo=docusaurus&logoColor=white)](https://vikram-docusaurus.onrender.com)

[![Live Swagger UI](https://img.shields.io/badge/Live-Swagger_UI-326CE5?style=for-the-badge&logo=swagger&logoColor=white)](https://vikram-swaggerui.onrender.com)



## What's Inside

| Section | Pages |
|---|---|
| **Welcome** | Overview of the API, endpoints, and quick start |
| **Getting Started** | Installation, Swagger UI |
| **API Reference** | Get All Products, Get Product by ID, Create Product, Update Product, Delete Product |
| **Query Features** | Filtering, Sorting, Pagination |
| **FAQ** | Answers to common questions |
| **Troubleshooting** | Common issues and fixes |

## Documentation Approach

- **One layout for every endpoint page:** a header table, a "try it live" link, parameters, example requests in curl and JavaScript, responses, and next steps.
- **Tables for lookups, tabs for alternatives, expandable sections for reference detail,** so each page stays short.
- **Examples match the OpenAPI specification** used by the live Swagger UI.
- **Docs-as-code:** written in Markdown and MDX, kept in Git, and built with Docusaurus.

## Run Locally

```bash
git clone https://github.com/vikramjeetc5/Vikram-Docusaurus.git
cd <Vikram-Docusaurus>
npm install
npm start
```

The site opens at `http://localhost:3000`. To create a production build:

```bash
npm run build
```

## Project Structure

```text
docs/
├── intro.mdx
├── Getting Started/
├── API Reference/
├── Query Features/
├── FAQ/
└── Troubleshooting/
src/
└── components/
    └── Method/        # Coloured GET / POST / PUT / DELETE labels
```

## Built With

[Docusaurus](https://docusaurus.io/), Markdown and MDX, Swagger UI (OpenAPI 3.0), and Git.

