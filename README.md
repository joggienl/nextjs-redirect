This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

## Problem description

Having a `Link` to a path that has a redirect (`/postings` -> `/post`) will not do a redirect when
there is middleware enabled.

This project has 2 redirects configured:

- `/postings` -> `/post`
- `/no-middleware/postings` -> `/no-middleware/post`

There is a `middleware.ts` configured with a matcher that ignores the `/no-middleware` path.
