import Accueil from './components/Accueil'
import Navbar from './components/Navbar'
import Projet from './components/Projet'
import Techno from './components/Techno'
import APropos from './components/APropos'


function App() {

  return (
    <div>
      <Navbar/>
      <Accueil/>
      <APropos/>
      <Techno/>
      <Projet/>
    </div>
  )
}

export default App
