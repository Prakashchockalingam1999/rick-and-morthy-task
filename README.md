# Rick & Morty Characters App

A React application that displays characters from the [Rick and Morty API](https://rickandmortyapi.com/), with search, filter, and pagination features.

---

## Live Demo

> Deployed via CodeSandbox / StackBlitz — _paste your link here_

---

## Features

- Browse all 826+ Rick & Morty characters
- Search characters by name in real time
- Filter characters by status — Alive, Dead, Unknown
- Paginated results (20 characters per page)
- Hover animation on cards with a blue glow effect
- Fully responsive layout using Ant Design's Row/Col grid

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Axios | API requests |
| Ant Design (antd) | UI components (Card, Tag, Typography, Row, Col) |
| CSS | Custom styling and animations |

---

## Project Structure

```
src/
├── App.jsx                        # Root component — layout, filters, pagination
├── App.css                        # Global styles — page, filters, pagination
├── CommonComponents/
│   ├── characterCard.jsx          # CharacterCard component
│   └── CharacterCard.css          # Card styles and hover animation
└── main.jsx                       # React entry point
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Prakashchockalingam1999/rick-and-morthy-task.git

# 2. Navigate into the project
cd rick-and-morthy-task

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Reference

Base URL: `https://rickandmortyapi.com/api`

| Endpoint | Description |
|---|---|
| `/character?page=1` | Paginated list of characters |
| `/character?name=rick` | Filter by name |
| `/character?status=alive` | Filter by status |
| `/character?page=1&name=rick&status=alive` | Combined filters |

The API returns 20 characters per page with a total of 42 pages.

---

## Components

### `App.jsx`
- Manages all state: `character`, `currentPage`, `totalPages`, `name`, `status`
- Fetches data from the API on every change to `currentPage`, `name`, or `status`
- Resets to page 1 whenever a filter changes

### `CharacterCard.jsx`
- Receives a single `char` object as a prop
- Displays: character image, name, status tag, last known location, first seen in
- Uses Ant Design `Card`, `Tag`, and `Typography` components
- Blue glow shadow on hover via CSS

---

## Key Implementation Decisions

**API-side filtering** — name and status filters are passed directly as query params to the API instead of filtering client-side. This keeps the app fast regardless of dataset size.

**Page reset on filter change** — `setCurrentPage(1)` is called inside `handleNameChange` and `handleStatusChange` so stale paginated results never appear after a filter update.

**`statusOptions` outside the component** — the options array is defined at module level so it is not recreated on every render.

---

## License

This project is for assessment purposes only.
