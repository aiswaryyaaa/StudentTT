import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AllCourses from './components/course/AllCourses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AllCourses" element={<AllCourses />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;