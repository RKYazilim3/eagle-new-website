import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ana Sayfa - Eagle Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Eagle Project" />
        <p className="description">
          Kalitede Asla Tesadüfe Yer Olmaz!
        </p>
      </main>

      <Footer />
    </div>
  )
}
