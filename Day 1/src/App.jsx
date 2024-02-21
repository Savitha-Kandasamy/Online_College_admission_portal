import LoginPage from "./pages/auth/login";
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
//import store from './redux/store';
import Signup from "./pages/auth/Register";
import NavBar from "./components/NavBar";
function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/NavBar" element={<NavBar/>}/>

        </Routes>
    </Router>
    </div>

  )
}

export default App
