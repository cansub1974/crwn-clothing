import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            } 
          })
        });        
      } 
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser= {this.state.currentUser}/>      
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  };
}

// function App() {
//   const [users, setUsers] = useState(
//     {currentUser: null}
//   )
//   let unsubscribeFromAuth = null;

//   useEffect(() => {
//     unsubscribeFromAuth = auth.onAuthStateChanged(user => {
//       setUsers( {currentUser: user} )
//       //console.log(user.displayName);
      
//     })
    
//   }, []);

//   useEffect(() => {
//     return () => {
//       unsubscribeFromAuth()
//     }
//   })


//     return (
//       <div>
//         <Header currentUser={users}/>
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route path="/signIn" component={SignInAndSignUpPage} />
//         </Switch>
//       </div>
//     );
// }

  


  


export default App;
