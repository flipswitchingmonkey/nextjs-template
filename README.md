## A clean Next.js template set up with Typescript support, testing via Jest, ESLint, Prettier and Wallaby.js

This is a template for a fresh project with what I hope at this point in time are 'good' practices. Might change tomorrow.

A single test has been set up as an example, delete the **snapshots** folder if you want to avoid failed tests the first time you make a change.

Scripts set up are:

```
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "type-check": "tsc --project tsconfig.json --pretty --noEmit",
    "lint": "eslint --ext js,jsx,ts,tsx",
    "format": "eslint --ext js,jsx,ts,tsx --fix",
    "lint:type": "yarn lint && yarn type-check"
  ```
All the config is found in the package.json. 

---

##### The following is the original readme

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
