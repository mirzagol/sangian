# Sangian Furniture Storefront

A modern, responsive furniture e-commerce web application built with **React**, **TypeScript**, **Vite**, and **Chakra UI**.

## Features

- ⚡️ Fast development with Vite and HMR
- 🎨 Modern UI using Chakra UI
- 📱 Responsive and RTL-friendly layouts
- 🔍 Product catalog with filtering and detail pages
- 📝 Inquiry and contract forms
- 🧑‍💻 TypeScript for type safety
- 🧹 ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```sh
git clone https://github.com/your-username/sangian-furniture.git
cd sangian-furniture
npm install
# or
yarn install
```

### Development

```sh
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
  assets/         # Images and icons
  components/     # React components
  hooks/          # Custom hooks
  services/       # API clients and utilities
  theme.tsx       # Chakra UI theme
  main.tsx        # App entry point
public/           # Static files
```

## Routing

- `/` — Landing page
- `/catalog` — Product catalog
- `/sofa/:id` — Sofa detail
- `/coffeetable/:id` — Coffee table detail
- `/cushion/:id` — Cushion detail
- `/diningtable/:id` — Dining table detail
- `/contact` — Contact info
- `/contract` — Contract inquiry

## ESLint Configuration

For type-aware lint rules:

```js
// eslint.config.js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

For React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

**Sangian Furniture** — Modern Iranian furniture, designed for your home.
