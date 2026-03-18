# React Dashboard

A simple admin dashboard built with React, Vite, and React Query.

---

## 🚀 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

App will run on:
http://localhost:5173

---

## 🏗️ Project Structure

* `src/pages` → page-level components
* `src/components` → reusable UI components (Table, SearchBar, etc.)
* `src/api` → API calls and React Query hooks

---

## 🗄️ State Management

* **React Query** → handles all server data (users list, user details)
* **useState / useCallback / useMemo** → used for UI state (search input, selected user, etc.)

---

## ⚡ Performance

* **Infinite Query** → loads users in chunks instead of all at once
* **Debounced Search** → avoids too many API calls while typing
* **Caching** → data is cached for 5 minutes using React Query

---

## ⚖️ Assumptions / Trade-offs

* Used **JavaScript instead of TypeScript** for faster setup
* Used **Tailwind CSS** for quick styling
* Used **pagination (load more)** instead of virtualization (enough for current data size)

---

## 📌 Notes


* API used: https://dummyjson.com/users
