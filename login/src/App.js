import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Resgister from './Pages/Register/Resgister';

// Hooks
import { useAuth } from './Hooks/useAuth';

function App() {

  const { auth, loading } = useAuth()

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path='/login' element={ auth ? < Home /> : <Navigate to="/" />} />
              <Route path='/' element={!auth ? < Login /> : <Navigate to="/login" />} />
              <Route path='/register' element={!auth ? < Resgister /> : <Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
