import './App.css';
// import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NewLogin from './components/NewLogin'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path="/student/login" exact component={NewLogin}/>
        <Route path="/student/signup" exact component={SignUp}/>
        <Route path="/student/dashboard" exact component={Dashboard}/>
      </Router>
    </div>
  );
}

export default App;
