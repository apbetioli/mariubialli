# [mariubialli.com.br](https://mariubialli.com.br)

A fast site to capture leads from marketing campaigns and sell courses for mariubialli.
The data is stored in a headless CMS, and the pages are statically generated (SSG) for optimal performance and SEO.

Here's a preview of a page for capturing email:

![image](https://github.com/apbetioli/mariubialli/assets/2829329/0ef78419-335d-4a72-b9de-fd9f32fce4d6)


## Tech stack

- React
- Next.js
- Typescript
- Material UI
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
