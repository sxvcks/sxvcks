import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Strona główna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Witaj na mojej stronie tiktok.com/@sxvcks!" />
        <p className="description">
          sxvcks <code>pages/sxvcks</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
