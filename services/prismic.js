import Prismic from "prismic-javascript";

export const apiEndpoint = process.env.PRISMIC_ENDPOINT;
export const accessToken = process.env.PRISMIC_API_TOKEN;

export const client = Prismic.client(apiEndpoint, { accessToken });
