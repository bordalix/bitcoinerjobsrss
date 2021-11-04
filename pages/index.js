import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitcoiner Jobs RSS</title>
        <meta name="description" content="RSS feed for bitcoinerjobs.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Bitcoiner Jobs RSS
        </h1>
        <p>
          <a href="https://bitcoinerjobsrss.vercel.app/api/rss">RSS link</a>
        </p>
        <p>
          <a href="https://github.com/bordalix/bitcoinerjobsrss">Github</a>
        </p>
      </main>
    </>
  )
}
