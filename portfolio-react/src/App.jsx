import styles from  './App.module.css'
import { About } from './components/About/About'
import { Challenge } from './components/Challenge/Challenge'
import { Contact } from './components/Contact/Contact'
import { Intro } from './components/Intro/Intro'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Intro/>
      <About/>
      <Challenge/>
      <Contact/>
    </div>
  )
}

export default App
