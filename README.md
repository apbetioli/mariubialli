# [mariubialli.com.br](https://mariubialli.com.br)

A platform for watching online courses and selling digital assets (PDF).

The app's UI and content are only available in Portuguese-BR, as the audience is from Brazil.

## Screenshots

Courses:
![Courses page](https://github.com/apbetioli/mariubialli/assets/2829329/e455fafa-96c2-4978-8309-c3ed374ee475)

Watching a course:
![Watching a course](https://github.com/apbetioli/mariubialli/assets/2829329/b5eeaa2d-f5d8-4620-808d-790813000c30)

Buy assets from a course:
![Course's assets](https://github.com/apbetioli/mariubialli/assets/2829329/42f896bc-2b25-4a1e-beb0-dc51a8ce28c2)

All assets page:
![Assets page](https://github.com/user-attachments/assets/9ee9f14d-9b3d-4195-9fd4-8c44e9bca596)

Shopping cart:
![Shopping cart](https://github.com/user-attachments/assets/fb16e20d-685d-4064-86e9-0decee4c4624)

Admin dashboard:
![Admin dashboard](https://github.com/apbetioli/mariubialli/assets/2829329/bdb29974-818e-4f22-89b0-f709da08ee41)

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

