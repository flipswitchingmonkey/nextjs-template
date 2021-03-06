import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/Footer/Footer'
import styles from '../styles/Home.module.css'

export const IndexPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <Footer />
    </div>
  )
}

export default IndexPage
