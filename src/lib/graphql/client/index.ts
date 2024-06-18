import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://medium.com/@TGod-Ajayi/integrating-graphql-with-next-js-and-react-using-typescript-a-beginners-guide-e65e268dedd5
const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
    cache: new InMemoryCache()
});

export default client;


