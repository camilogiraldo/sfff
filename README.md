
## Welcome to the SFFF: San Francisco Food Finder

Play with the Live preview [here](https://sfff-seven.vercel.app/)

## Getting Started On Your Local Machine
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, install the dependencies
```bash
npm i
```
then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## What's Implemented

This project is implemented using the latest version of nextjs using App Router

1. An API call retrieves an parses all the csv data about the food trucks
2. Data is shared between reusable react components for displaying things like the map & th filters
3. Components share also function references in order to comunicate each other to make the filters work.
4. Google Maps API are havily used here.
5. tailwindcss is used for easy styling.
6. Typescript is used across all the application.
7. Project has an automatic deploy pipeline on push to master to Vercel PaaS

