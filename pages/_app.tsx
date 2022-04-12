import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
