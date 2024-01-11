# [mariubialli.com.br](https://mariubialli.com.br)

The main purpose of this website is to capture leads from marketing campaigns and sell courses.

It also has a section for downloading documents for free that requires login and captures leads as well.

Behind the scenes, the idea was to store data in a headless CMS and build the pages dynamically based on the data it receives.

## This project uses

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

Use this env variable to bypass certificate verification for email auth.
Don't do this in production as it will make TLS insecure.

```
NODE_TLS_REJECT_UNAUTHORIZED=0
```

## Optional configuration

Add the file .graphqlconfig to the root of the project to run GraphQL queries in VSCode:

```
{
    "projects": {
        "src": {
            "extensions": {
                "endpoints": {
                    "default": {
                        "url": "CHANGE TO YOUR GRAPHQL ENDPOINT"
                    }
                }
            }
        }
    }
}
```

## Getting Started

First, run the development server:

```
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
