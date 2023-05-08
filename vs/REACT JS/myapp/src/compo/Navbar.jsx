import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './01Home'
import About from './02About';
// import State from './03state'; 
import Lifecycle from './04Lifecycle';
import Loops from './005loops';
import API from './06API';
import FetchAPI from './Function/03FetchAPI';
import loader from './Function/04loader';
import UseRef from './Function/05UseRef';

function navbar(props) {
    const data = {
        '/home': 'Home', '/about': 'About', '/state': 'state', '/lifecycle': 'Lifecycle',
        '/loops': 'Loops', '/API': 'API','/fetchapi':'FetchApi','/loader':'Loader','/useref':'UseRef'
    }
    const returndata = Object.entries(data).map((res) => {
        console.log(res);
        return <li class="nav-item">
            <Link class="nav-link" to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
        <>
            <Router>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Logo</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                                {returndata}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    {/* <Route path='/state' element={<State />} /> */}
                    <Route path='/lifecycle' element={<Lifecycle />} />
                    <Route path='/loops' element={<Loops />} />
                    <Route path='/api' element={<API />} />
                    <Route path='03FetchAPI' element={FetchAPI}></Route>
                    <Route path='04loader'></Route>
                    <Route path='UseRef' element={<UseRef/>}/>

                </Routes>
            </Router>
        </>
    );
}

export default navbar;