# Mari Ubialli's site

http://mariubialli.com.br

## Features

- React app created with Next.js
- Uses prismic as headless CMS
- Collects emails into mailchimp
- Uses next-iron-session for session handling in cookies


## Environment Variables

```
NEXT_PUBLIC_GTM_ID (Google Tag Manager ID)
MAILCHIMP_API_KEY
MAILCHIMP_LIST_ID
MAILCHIMP_SERVER
PRISMIC_API_TOKEN
PRISMIC_ENDPOINT (https://example.prismic.io/api/v2)
SECRET_COOKIE_PASSWORD (This is used by next-iron-session to create cookies)
```

## Prismic configuration

### Install the prismic-cli
```
npm install -g prismic-cli
```

### Run the theme command
This will create a new Prismic content repository, setup the custom types, and install the project code
```
prismic theme --theme-url https://github.com/apbetioli/mariubialli

```
## Run the project
```
yarn dev
```
Then you can access it at [http://localhost:3000](http://localhost:3000).
