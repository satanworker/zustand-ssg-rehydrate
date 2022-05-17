This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## POC of how to use Zustand with SSG/SSR
The idea is to call methods to fetch required initial data in `getServerSideProps` or `getStaticProps` and rehydrate zustand client store with data coming from props
- Rehydration should happen only once
- Rehydration should happen before first render, so SSG/SSR rendered page would already have required data

It's impossible to pass all the store to ssr rendered page, because serializing functions won't work. So it's only possible to rehydrate with partial store which contain only data