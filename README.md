# [mariubialli.com.br](https://mariubialli.com.br)

It used to be a fast site for capturing leads from marketing campaigns and selling online courses. The data was stored in a headless CMS, and the pages were statically generated (SSG) for optimal performance and SEO.

Now, it is being rewritten as a platform for watching online courses and selling digital assets (PDF).

The app and content are only available in Portuguese-BR, as the audience is from Brazil.

## Roadmap

- [x] Allow users to watch courses with embedded YouTube videos
- [x] Track user progress on watching lessons
- [x] Allow users to download digital assets (PDF) related to each course.
- [ ] WIP: Allow selling digital assets related to each course, integrated to Stripe
- [ ] Have an admin area to create courses and lessons, upload digital assets, etc.
- [ ] Have a dashboard with indicators like the number of active users, revenue, most watched courses, most downloaded assets

## Screenshots

![image](https://github.com/apbetioli/mariubialli/assets/2829329/e455fafa-96c2-4978-8309-c3ed374ee475)
![image](https://github.com/apbetioli/mariubialli/assets/2829329/b5eeaa2d-f5d8-4620-808d-790813000c30)
![image](https://github.com/apbetioli/mariubialli/assets/2829329/e990d6a3-506a-4f21-848d-130057be4586)

## Tech stack

- React
- Next.js
- Typescript
- TailwindCSS
- Shadcn UI components
- Clerk (Auth)
- Redux-Toolkit Query
- Prisma ORM
- MongoDB Atlas
- AWS S3
- GitHub Actions
- Vite, Prettier, Eslint

## Environment Variables

Copy `.env.template` to `.env.local` and configure all the environment variables.

## Getting Started

First, run the development server:

```
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

