// aplicando roteamento de páginas
import { Switch, Route } from 'react-router-dom'

//import de components
import Header from './components/header';

// import de VIEWS
import Home from './views/home'
import Checkout from './views/checkout'

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
