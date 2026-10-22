# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


App.jsx                  ← the "brain": holds the state, defines the routes
 ├─ Header               ← navigation links + cart/favorite buttons
 ├─ Routes (pages)
 │   ├─ Acceuil          ← shows all products (uses Card for each one)
 │   │    └─ Card        ← one product (item-card.jsx)
 │   ├─ Detail           ← one product's page
 │   ├─ Contact, Service, Login
 ├─ DropCart             ← sliding cart panel
 │    └─ Cart            ← one line in the cart
 └─ DropFav              ← sliding favorites panel
      └─ Favorite        ← one line in favorites