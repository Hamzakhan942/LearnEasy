import './App.css';
// import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NewLogin from './components/NewLogin'
import SignUp from './components/SignUp'
import LogOut from './components/LogOut'
import ContactUs from './components/ContactUs'
import TakeQuiz from './components/TakeQuiz'
import QuizCard from './components/QuestionCard'
import QuizCardFigures from './components/QuizCardFigures'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Home from './components/Homepage'
import { Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // <Route path="/takequiz" exact component={TakeQuiz}/>
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route path="/login" exact component={NewLogin}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/takequiz" exact component={TakeQuiz}/>
        <Route path="/contactus" exact component={ContactUs}/>
        <Route path="/student/dashboard" exact component={Dashboard}/> 
        <Route path="/logout" exact component={LogOut}/>
      </Router>
    </div>
  );
}

export default App;
