# E-Store | Modern E-Commerce Platform

A high-performance, full-stack-feel e-commerce application built with **React**, **Redux Toolkit**, and **React Query**. This project implements a sophisticated data-fetching architecture using React Router 6.4+ Loaders and Actions.

---

## Key Features

### Product Management

- **Advanced Filtering:** Filter products by category, company, price, and shipping. Includes a real-time search and sort functionality (A-Z, Z-A, High to Low).
- **Featured Products:** Dedicated landing page showcasing top-tier items using high-efficiency caching.
- **Pagination:** Seamless navigation through large product catalogs via a custom Pagination component.

### Authentication & Security

- **Protected Routes:** Pages like `Checkout` and `Orders` are strictly guarded. Unauthenticated users are automatically redirected to the Login page.
- **JWT Integration:** Secure communication with the backend using Bearer tokens stored in Redux and LocalStorage.
- **User Persistence:** User sessions and profiles remain active even after page refreshes.

### Cart & Order System

- **Complex Cart Logic:** Real-time calculation of Tax, Shipping ($5.00), and Order Totals.
- **Order Tracking:** Logged-in users can view their past orders, including item breakdowns and shipping addresses.
- **Persistent Cart:** Cart data is synced with LocalStorage so users never lose their items.

### UI/UX

- **DaisyUI Theming:** Supports high-contrast "Night" and "Cupcake" themes with a custom theme-switcher.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using Tailwind CSS.
- **Global Loading States:** Integrated loading bars and spinners for smooth transitions during API calls.

---

## Tech Stack

| Technology           | Purpose                            |
| :------------------- | :--------------------------------- |
| **React 18**         | UI Library                         |
| **React Router 6.4** | Data Loaders, Actions, and Routing |
| **Redux Toolkit**    | Global State (User, Cart, Theme)   |
| **TanStack Query**   | Server State Management & Caching  |
| **Tailwind CSS**     | Utility-first Styling              |
| **DaisyUI**          | Professional Component Library     |
| **Axios**            | API Interceptor and HTTP Client    |

---

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repo:
   ```bash
   git clone [https://github.com/Ejoh-Hosea/e-store.git](https://github.com/Ejoh-Hosea/e-store.git)
   ```
