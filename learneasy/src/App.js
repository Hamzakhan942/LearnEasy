import './App.css';
import Dashboard from './components/Dashboard'
import NewLogin from './components/NewLogin'
import SignUp from './components/SignUp'
import LogOut from './components/LogOut'
import ContactUs from './components/ContactUs'
import TakeQuiz from './components/TakeQuiz'
import AboutUs from './components/AboutUs'
import Home from './components/Homepage'
import NewNav from './components/NewNavbar'
import { Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import DebugQuiz from './components/DebugQuiz';

function App() {
  return (
    <div>
    <Router>
      <NewNav />
      <Route path="/" exact component={Home}/>
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route path="/debug" exact component={DebugQuiz}/>
        <Route path="/login" exact component={NewLogin}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/takequiz" exact component={TakeQuiz}/>
        <Route path="/contactus" exact component={ContactUs}/>
        <Route path="/dashboard" exact component={Dashboard}/> 
        <Route path="/logout" exact component={LogOut}/>
      </Router>
    </div>
  );
}

export default App;
