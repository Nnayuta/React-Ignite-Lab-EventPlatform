import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
     uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ox1ysd1art01z42j9r2otr/master',
     cache: new InMemoryCache()
})