import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WebDev News</title>
          <meta name="keywords" content="web development, programming"/>
      </Head>
        <main>
            <h2>Hello World</h2>
        </main>
    </>
  )
}
