import { ApolloProvider } from '@apollo/client';
import client from '../src/lib/graphql/client';
import {  ThemeProvider } from 'styled-components';
import '../styles/global.css';

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const  App = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </ThemeProvider>
        </>
    );
}

export default App;