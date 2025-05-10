# Product Catalog System

## Table of Contents

- [1. Introduction](#1-introduction)
- [2. Implementation Planning](#2-implementation-planning)
- [3. Core Features](#3-core-features)
- [4. Tech Stack](#4-tech-stack)
- [5. Environment Variables](#5-environment-variables)

---

## 1. Introduction

The **Product Catalog System** is a modern, scalable, and customizable web-based platform for managing and displaying a collection of products across multiple shops. Designed for fashion retail, it allows dynamic filtering, sorting, and display of categorized items.

---

## 2. Implementation Planning

### Project Structure

- `components/` – Reusable UI components like ProductCard, Filters, Dropdowns.
- `app/` – Next.js page routes for shop listings, product details, etc.
- `services/` – Abstraction for fetching data from Sanity CMS.
- `types/` – Centralized TypeScript types (e.g., `Product`, `ShopName`).
- `sanity/` – Configuration for connecting to Sanity backend.
- `hooks/` - Custom hooks.

### Development Milestones

- **4h00 – 5h00:** Analysis, planning, initial project & environment setup
- **5h00 – 6h00:** Setup and configure Sanity CMS (schemas, project ID, dataset)
- **6h00 – 8h00:** [UI] Build the Home Page layout and components
- **8h00 – 10h30:** [UI] Build the Shop Page with filters, sorting, and product grid
- **10h30 – 12h00:** [UI] Build the Product Detail Page with responsive layout
- **12h00 – 1h30:** Implement data fetching in Shop Page from Sanity
- **1h30 – 2h00:** Implement data fetching for Product Detail Page
- **2h00 – 2h30:** Write and finalize the README documentation
- **2h30 – 3h00:** Deploy the project to Vercel

---

## 3. Core Features

- ✅ Product listing per shop
- ✅ Filtering by categories (e.g., Jackets, T-Shirts, etc.)
- ✅ Dynamic content powered by Sanity
- ✅ Product details page via dynamic route
- ✅ Fully typed with TypeScript

---

## 4. Tech Stack

- **Next.js** – React framework for SSR and routing
- **TypeScript** – Strong typing across app
- **Tailwind CSS** – Utility-first CSS framework
- **ShadCN** - UI Component Library (With support with V0).
- **Sanity.io** – Headless CMS for product data
- **Vercel** – Deployment platform for frontend

---

## 5. Environment Variables

To run this project locally, create a `.env.local` file in the root and add the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
```
