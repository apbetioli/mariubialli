# [mariubialli.com](https://mariubialli.com)

## Public pages

```
/                           (Sales page)
/apostilas                  (Free download upon login)
/bio                        (Links for Instagram bio)
/politica-de-privacidade
/termos-de-uso
```

## Enpoints

```
/api/revalidate (Next.js webhook for ISR)
/api/subscribe  (Integration with email marketing services)
```

## This project uses

- Next.js
- Typescript
- GraphQL (Apollo client)
- GraphCMS
- Material UI
- NextAuth

## Configuration

Configure these environment variables in your .env.local file :

```
GRAPHQL_CONTENT_ENDPOINT=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=587
EMAIL_FROM=
MONGODB_URI=
```

Use this env variable to bypass certificate verification for email auth.
Don't do this in production as it will make TLS insecure.

```
NODE_TLS_REJECT_UNAUTHORIZED=0
```

Optional: Add the file .graphqlconfig to the root of the project to run GraphQL queries in VSCode:

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
