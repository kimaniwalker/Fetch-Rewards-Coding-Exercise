import { TransactionsWrapper } from '../context/transactions'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <TransactionsWrapper>
    <Component {...pageProps} />
    </TransactionsWrapper>
}

export default MyApp
