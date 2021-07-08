import { useSelector } from 'react-redux'

// aplicando roteamento de páginas
import { Switch, Route } from 'react-router-dom'

//import de components
import Header from './components/header'
import Aside from './components/aside'

// import de VIEWS
import Home from './views/home'
import Checkout from './views/checkout'

function App() {
  const aside = useSelector(state => state.controllers.aside)

  return (
    <div className="App">
      <Header />
      <Aside type={aside} />
      
      <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
