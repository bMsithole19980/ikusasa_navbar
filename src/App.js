
import './App.css';
import Navbar from './components/Navbar';
import Services from './screens/Services';
import Home from './screens/Home'
import About from './screens/About'
import Blog from './screens/Blog';
import Kids from './screens/Kids';
import Contact from './screens/Contacts';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Courses from './screens/Courses';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' elements={Home} />
        <Route path='/services' element={Services} />
        <Route path='/about' element={About}/>
        <Route path='/courses' element={Courses}/>
        <Route path='/kids' element={Kids}/>
        <Route path='/blog' element={Blog}/>
        <Route path='/contact' element={Contact}/>

      </Routes>
    </Router>
  );
}

export default App;
