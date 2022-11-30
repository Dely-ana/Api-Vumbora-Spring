
import React from 'react'
import './Css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUsuarioComponent from './Component/ListUsuarioComponent'
import NavbarComponent from './Component/NavbarComponent'
import FooterComponent from './Component/FooterComponent'
import CreateUsuarioComponent from './Component/CreateUsuarioComponent'
import ViewUsuarioComponent from './Component/ViewUsuarioComponent'
import Destino from './Pages/Destino'
import Home from './/Pages/Home'
import Promocoes from './Pages/Promocoes'

function App() {
  return (
    <div>
      <Router>

        <NavbarComponent />

        <div className="container">

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Home" exact component={Home}></Route>
            <Route path="/Destino" component={Destino}></Route>
            <Route path="/Promocoes" component={Promocoes}></Route>
            <Route path="/usuarios" component={ListUsuarioComponent}></Route>
            <Route path="/add-usuario/:id" component={CreateUsuarioComponent}></Route>
            <Route path="/view-usuario/:id" component={ViewUsuarioComponent}></Route>
          </Switch>

        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}
export default App;