import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from 'components/layout/Layout'

import Meta from 'components/meta'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
