import './App.css'
import Routes from './router'
import Header from './components/Header'

function App() {
  return (
    <>
    <div>
      <Header />
      <main>
        <Routes />
      </main>
    </div>
    </>
  )
}

export default App
