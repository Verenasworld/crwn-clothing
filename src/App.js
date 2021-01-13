import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import {Route, Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.comppnent";
import SingInAndSignUp from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils';
import {Component} from "@firebase/component";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth= null

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({currentUser: user});
        console.log(user)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SingInAndSignUp}/>
                </Switch>
            </div>
        );
    }

}

export default App;
