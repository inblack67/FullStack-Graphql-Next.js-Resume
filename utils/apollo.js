import { InMemoryCache, ApolloClient, HttpLink } from '@apollo/client';

let apolloClient;

const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: '/api/graphql'
        }),
        cache: new InMemoryCache(),
    })
}

const initApollo = () => {
    apolloClient = apolloClient ?? createApolloClient();
    return apolloClient;
}

export const useApollo = () => {
    return initApollo();
}