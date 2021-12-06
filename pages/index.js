import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({results}) {
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Header  */}
      <Header />
      {/* Nav  */}
      <Nav />
      {/* Results  */}
      <Results results={results}/>

    </div>
  )
}

// Server side rendering - the entire html page is built at server side and then given to client so that there is no delay or flickering when the page loads. Server side rendering happens per page and we need to instruct at every page that needs SSR
//Server render happens first, so the function below gets executed first then the above Home() function gets executed at the client level

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await axios.get(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ). then((res) => res.data)

  return {
    props: {
      results: request.results
    }
  }
}
