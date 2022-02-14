import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AllCourses from './components/course/AllCourses';
import MyCourses from './components/course/MyCourses';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AllCourses" element={<AllCourses />} />
        <Route path="/MyCourses" element={<MyCourses />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;