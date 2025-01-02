import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Layout from './components/Layout'
import Page404 from './pages/Page404'
import ProtectedRoute from './auth/ProtectedRoute'
import Login from './pages/Login'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

function App() {

  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      {/* Protected routes only for logged in users */}
      <Route path="/" element={< ProtectedRoute > <Layout /> </ProtectedRoute>} >
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Page404 />} />
      </Route>

    </Routes>

  )
}

export default App
