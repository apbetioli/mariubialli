# Mari Ubialli's website 

[mariubialli.com](https://mariubialli.com)

## This project uses:

- Next.js
- Typescript
- GraphQL (Apollo client)
- GraphCMS
- Material UI

## Configuration

Configure this environment values:

GRAPHQL_CONTENT_ENDPOINT

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

