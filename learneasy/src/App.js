import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">  
      <Navbar />
      <br/>
      <Route path="/login" exact component={Login} />
      <Route path = "/dashboard" render = {(props)=> <Dashboard {...props} />} />
      </div>
    </Router>
  );
}

export default App;
