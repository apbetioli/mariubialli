# [mariubialli.com.br](https://mariubialli.com.br)

The main purpose of this website is to capture leads from marketing campaigns and sell courses.

![image](https://github.com/apbetioli/mariubialli/assets/2829329/0ef78419-335d-4a72-b9de-fd9f32fce4d6)

It also has a section for downloading documents for free that requires login and captures leads.

![image](https://github.com/apbetioli/mariubialli/assets/2829329/081bcb48-57f9-4ffc-9132-258bdaa1355a)

The data is stored in a headless CMS, and the pages are built dynamically.
It uses server-side rendering (SSR) for optimal performance and SEO.

## Tech stack

- React
- Typescript
- Material UI
- Next.js
- NextAuth
- Hygraph (Headless CMS)
- GraphQL (Apollo client)

## Public pages

```
/                           (Redirects to /aulas)
/aulas                      (Lead capture page)
/clube                      (Sales page - in construction)
/apostilas                  (Free downloads with auth)
/bio                        (Instagram bio links)
/politica-de-privacidade
/termos-de-uso
```

## Endpoints

Download documents - requires authentication

```
/api/download/[slug]
```

Integration with email marketing services (Klicksend)

```
/api/subscribe
```

Integration with Facebook Ads Conversion API

```
/api/fbevent
```

Next.js webhook for ISR

```
/api/revalidate?path=/path/to/revalidate
```

## Environment Variables

Create a `.env.local` file and configure all these environment variables.

GraphQL:

```
GRAPHQL_CONTENT_ENDPOINT
```

Email authentication. The session data is stored in mongodb.

```
NEXTAUTH_URL
NEXTAUTH_SECRET
MONGODB_URI
EMAIL_SERVER_USER
EMAIL_SERVER_PASSWORD
EMAIL_SERVER_HOST
EMAIL_SERVER_PORT=587
EMAIL_FROM
```

Marketing campaigns: Google Tag Manager, Facebook Pixel and Facebook Conversion API

```
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_FACEBOOK_PIXEL_ID
FB_CONVERSION_API_TOKEN
```

## Getting Started

First, run the development server:

```
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
