import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import {Route,Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.comppnent";
import SingInAndSignUp from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";



function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route  exact path='/' component={HomePage}/>
                <Route  path='/shop' component={ShopPage}/>
                <Route  path='/signin' component={SingInAndSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
