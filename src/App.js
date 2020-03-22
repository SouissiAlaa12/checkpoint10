import React ,{ Component } from 'react';
import './style.css';
import { BrowserRouter , Route ,Switch} from 'react-router-dom' ;
import Port from './Port' ; 
import Contact from './Contact' ; 
import Home from './Home' ; 
import Nav from './Nav' ; 


    class App extends Component {
      render(){
      return (
        <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Port}/>
        </Switch>
        </div>

        </BrowserRouter>
      );
    }
    }
    export default App;
