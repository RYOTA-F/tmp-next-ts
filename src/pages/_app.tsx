import { NextPage } from 'next'
import { AppProps } from 'next/app'
import 'sanitize.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
