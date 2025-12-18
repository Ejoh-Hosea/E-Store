# E-Store | Modern E-Commerce Platform

A high-performance, full-stack-feel e-commerce application built with **React**, **Redux Toolkit**, and **React Query**. This project implements a sophisticated data-fetching architecture using React Router 6.4+ Loaders and Actions.

---

## Key Features

### Headless Backend (Strapi)

- **API-First Design:** Fully managed product, category, and order data via **Strapi CMS**.
- **Dynamic Queries:** Advanced filtering and search handled via Strapi's sophisticated REST API parameters.

### Shopping Experience

- **React Router Loaders:** High-performance data fetching at the route level to minimize UI layout shifts.
- **Advanced Filters:** Filter by category, company, and price with a "Search" functionality that stays in sync with the URL.
- **Persistent Cart:** Real-time calculation of tax, shipping, and totals, persisted in LocalStorage via Redux.

### Authentication & Security

- **Restricted Access:** The `Checkout` and `Orders` pages are protected via Redux state checks.
- **JWT Persistence:** Secure login/registration flow with automatic token attachment to outgoing requests.

### Modern UI/UX

- **Dual-Theme Toggle:** Switch between light and dark themes seamlessly using **DaisyUI**.
- **Vite Speed:** Optimized build times and Hot Module Replacement (HMR) for a smooth dev experience.
- **Responsive Layout:** Mobile-first design using **Tailwind CSS**.

---

## Tech Stack

| Layer                  | Technology                                 |
| :--------------------- | :----------------------------------------- |
| **Frontend Framework** | **React 18 + Vite**                        |
| **Backend**            | **Strapi (Headless CMS)**                  |
| **State Management**   | **Redux Toolkit (User & Cart Slices)**     |
| **Data Fetching**      | **TanStack Query & Axios**                 |
| **Routing**            | **React Router Dom 6.4 (Loaders/Actions)** |
| **UI Library**         | **Tailwind CSS & DaisyUI**                 |

---

## Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/Ejoh-Hosea/e-store.git](https://github.com/Ejoh-Hosea/e-store.git)
cd e-store
```
