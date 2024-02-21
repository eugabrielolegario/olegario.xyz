import Footer from './components/Footer'
import Header from './components/Header'
import Medium from './components/Medium'

function App() {

  return (
    <div className='container'>
      <Header
        title='Gabriel Olegário'
      />
      <Medium />
      <Footer 
        linkedin='LinkedIn'
        linkedinURL='https://www.linkedin.com/in/gabrielolegario/'
        email='Get in touch'
        emailURL='mailto:gabriel.oligar@gmail.com'
        lattes='Get in touch'
        lattesURL='http://lattes.cnpq.br/3356641150603825'
      />
    </div>
  )
}

export default App
