import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoiner Jobs RSS</title>
        <meta name="description" content="RSS feed for bitcoinerjobs.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bitcoiner Jobs RSS
        </h1>

        <p className={styles.description}>
          Available at <a href="https://bitcoinerjobsrss.vercel.app/api/rss">https://bitcoinerjobsrss.vercel.app/api/rss</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/bordalix/bitcoinerjobsrss">Github</a>
      </footer>
    </div>
  )
}
