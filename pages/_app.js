import Layout from '../layout/layout';
import '../styles/globals.css';
import '/styles/yurei.css';
import { gsap } from 'gsap';

 function App({ Component, pageProps }) {
  let timeline = gsap.timeline();
  return (
    <div className='App'>
      <Layout timeline={timeline}>
      <Component timeline={timeline} {...pageProps} />
    </Layout>
    </div>
  )
}

export default App
