import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <section className='my-4'>
          <h2 className='text-3xl'>こんにちは世界</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio blanditiis vel porro, recusandae ullam commodi magni nihil, deserunt reiciendis molestiae rerum quis voluptates hic! Deleniti distinctio perferendis doloribus laudantium.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
