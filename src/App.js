import React from 'react';
import './App.css'
import Navbar from './componentes/navbar';
import TecApi from './componentes/tecApi';
import MusicApi from './componentes/musicApi';
import Artist from './componentes/artist';
import Deputado from './componentes/deputados';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App(){
    return(    
        <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/"><TecApi/></Route>
        <Route path="/music"><MusicApi/></Route>
        <Route path="/artist"><Artist/></Route>
        <Route path="/deputado"><Deputado/></Route>
        </Switch>
       </Router>
    )
}
export default App;
