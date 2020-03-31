import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App (){
    const [user, setUser] = useState(null);
 
    useEffect(() =>{
        const unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot(snapShot => {
                    setUser(
                {
                    id: snapShot.id,
                    ...snapShot.data()
                     })
                })
                 
                } else {
                 setUser(userAuth);
                 console.log(user);
                }
                })
        return () => {
            unsuscribeFromAuth();
        }
    }, [user]);

    return (
      <div>
        <Header currentUser= {user}/>      
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
}

export default App;