import Layout from '../layout/layout'
import '../styles/globals.css'
import '/styles/yurei.css'

 function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
