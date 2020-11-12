import './App.css';
// import Login from './components/Login'
// import Dashboard from './components/Dashboard'
import NewLogin from './components/NewLogin'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Route path="/login" component={NewLogin}/>
        <Route path="/signup" component={SignUp}/>
      </Router>
    </div>
    // <Router>
    // <div className="container">  
    //   <Navbar />
    //   <br/>
    //   <Route path="/login" exact component={Login} />
    //   <Route path = "/dashboard" render={(props) => <Dashboard {...props} />} />
    //   </div>
    // </Router>
  );
}

export default App;
