import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';


function App() {

  return (
    <>
      <Router>
      <div>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
