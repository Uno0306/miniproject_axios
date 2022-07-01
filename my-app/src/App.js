import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Domain from './components/Domian';
// import Proxy_CORS from './components/Proxy_CORS';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Routes>
            <Route path='/' element={<Domain/>}/>
            <Route path='/select' element=''/>
            <Route path='/delete' element=''/>
            <Route path='/update' element=''/>
            <Route path='/insert' element=''/>
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
