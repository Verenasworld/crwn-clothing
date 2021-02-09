import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.comppnent";
import SingInAndSignUp from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from "./redux/user/user.actions";


class App extends React.Component {
    unsubscribeFromAuth= null

    componentDidMount(){

        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser( {
                        id: snapshot.id,
                        ...snapshot.data()
                    })

                    });
            }else {
                setCurrentUser( userAuth);
            }

        });
    }

    componentWillUnmount() {
        this.unsubcribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SingInAndSignUp}/>
                </Switch>
            </div>
        );
    }

}
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser((user)))
})

export default connect(null,mapDispatchToProps)(App);
