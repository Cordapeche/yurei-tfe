import Layout from '../layout/layout';
import '../styles/globals.css';
import '/styles/yurei.css';

 function App({ Component }) {

  return (
    <div className='App'>
      <Layout>
      <Component/>
    </Layout>
    </div>
  )
}

export default App
