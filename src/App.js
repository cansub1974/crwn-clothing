import React, {useState, useEffect} from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      
      //console.log(user);
      
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
//     {currentUser: ''}
//   )
//   const unsubscribeFromAuth = null;

//   useEffect(() => {
//     unsubscribeFromAuth = auth.onAuthStateChanged(user => {
//       setUsers({ currentUser: user })
//       console.log(user);
      
//     })
    
//   }, []);

//   useEffect(() => {
//     return () => {
//       unsubscribeFromAuth()
//     }
//   })


//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route path="/signIn" component={SignInAndSignUpPage} />
//         </Switch>
//       </div>
//     );
// }

  


  


export default App;
