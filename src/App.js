import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import NavBar from './components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
