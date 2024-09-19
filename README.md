# [mariubialli.com.br](https://mariubialli.com.br)

A platform for watching online courses and selling digital assets (PDF).

The app's UI and content are only available in Portuguese-BR, as the audience is from Brazil.

## Roadmap

- [x] Allow users to watch courses with embedded YouTube videos
- [x] Track user progress on watching lessons
- [x] Allow users to download digital assets (PDF) related to each course.
- [x] Allow selling digital assets related to each course, integrated with Stripe
- [x] Build a landing page
- [x] Have an admin area to create courses and lessons, upload digital assets, etc.
- [x] Have a dashboard with indicators like the number of active users, revenue, most watched courses, most downloaded assets

## Screenshots

![image](https://github.com/apbetioli/mariubialli/assets/2829329/e455fafa-96c2-4978-8309-c3ed374ee475)
![image](https://github.com/apbetioli/mariubialli/assets/2829329/b5eeaa2d-f5d8-4620-808d-790813000c30)
![image](https://github.com/apbetioli/mariubialli/assets/2829329/42f896bc-2b25-4a1e-beb0-dc51a8ce28c2)
![image](https://github.com/apbetioli/mariubialli/assets/2829329/bdb29974-818e-4f22-89b0-f709da08ee41)

## Tech stack

- React
- Next.js
- Typescript
- TailwindCSS
- Shadcn UI components
- Clerk authentication
- Redux-Toolkit Query
- Prisma ORM
- MongoDB Atlas
- AWS S3
- Stripe
- GitHub Actions
- Vite, Prettier, Eslint

## Environment Variables

Copy `.env.template` to `.env.local` and configure all the environment variables.

## Testing sales

For testing buying assets with Stripe locally, start the webhook listener with stripe CLI:

```
stripe listen --forward-to localhost:3003/api/stripe/webhook
```

Use the card number 4242 4242 4242 4242


## Getting Started

First, run the development server:

```
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

