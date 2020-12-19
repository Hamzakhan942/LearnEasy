import './App.css';
// import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NewLogin from './components/NewLogin'
import SignUp from './components/SignUp'
import LogOut from './components/LogOut'
import ContactUs from './components/ContactUs'
import TakeQuiz from './components/TakeQuiz'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path="/student/aboutus" exact component={AboutUs}/>
        <Route path="/student/login" exact component={NewLogin}/>
        <Route path="/student/signup" exact component={SignUp}/>
        <Route path="/student/takequiz" exact component={TakeQuiz}/>
        <Route path="/student/contactus" exact component={ContactUs}/>
        <Route path="/student/dashboard" exact component={Dashboard}/>
        <Route path="/student/logout" exact component={LogOut}/>
      </Router>
    </div>
  );
}

export default App;
