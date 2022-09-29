
import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </Layout >
  );
}

export default MyApp