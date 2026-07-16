# Product Listing Page

A responsive Product Listing application built with **Next.js**, **React.js**, and **Bootstrap**. The application fetches product data using **Server-Side Rendering (SSR)** from the Fake Store API and provides client-side search functionality.

---

## 🚀 Tech Stack

- Next.js
- React.js
- Bootstrap 5
- JavaScript (ES6+)
- Fetch API

---

## ✨ Features

- Server-Side Rendering (SSR) using `getServerSideProps`
- Fetches product data from Fake Store API
- Responsive product grid using Bootstrap
- Product cards displaying:
  - Product Image
  - Product Title
  - Price
  - Category
  - Rating
- Client-side search by product title
- Loading spinner during search
- Dynamic Product Details page (`/product/[id]`)
- Responsive design for desktop, tablet, and mobile

---

## 📂 Project Structure

```
bribooks-assignment/
│
├── components/
│   ├── Loader.js
│   ├── ProductCard.js
│   └── SearchBar.js
│
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── product/
│       └── [id].js
│
├── styles/
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/AkashTirkey/Product-Listing-Page.git
```

Go to the project directory

```bash
cd Product-Listing-Page
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:3000
```

---

## 🛠 Build for Production

```bash
npm run build
npm start
```

---

## 📌 API Used

Fake Store API

```
https://fakestoreapi.com/products
```

---

## 📖 Assumptions

- Product data is fetched from the Fake Store API.
- Search filtering is performed on the client side.
- Product details are fetched dynamically using the product ID.
- Bootstrap is used for responsive layout and styling.

---

## 🌐 Live Demo

Vercel Deployment

```
https://product-listing-page-seven-phi.vercel.app/
```

---

## ⚠️ Deployment Note

This project uses the API specified in the assignment:

```
https://fakestoreapi.com/products
```

The application works correctly during local development.

While deploying to Vercel, the Fake Store API currently returns an **HTTP 403 Cloudflare challenge page** instead of JSON for server-side requests made from Vercel's infrastructure. As a result, Server-Side Rendering requests may not display product data in the deployed version, even though the implementation follows the assignment requirements and functions correctly in local development.

This behavior originates from the external API's server-side access restrictions rather than the application implementation.

---

## 👨‍💻 Author

**Akash Tirkey**

GitHub:
https://github.com/AkashTirkey

---
