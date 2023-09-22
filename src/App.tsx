import Footer from './components/Footer'
import Header from './components/Header'
import Medium from './components/Medium'

function App() {

  return (
    <>
      <Header 
        title='Gabriel Olegário'
      />
      <Medium />
      <Footer 
        linkedin='LinkedIn'
        linkedinURL='https://www.linkedin.com/in/gabrielolegario/'
        email='Get in touch'
        emailURL='mailto:gabriel.oligar@gmail.com'
      />
    </>
  )
}

export default App
