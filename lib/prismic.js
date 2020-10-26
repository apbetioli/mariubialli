import Prismic from "prismic-javascript";

const apiEndpoint = process.env.PRISMIC_ENDPOINT;
const accessToken = process.env.PRISMIC_API_TOKEN;

const PrismicClient = Prismic.client(apiEndpoint, { accessToken });

export default PrismicClient;
