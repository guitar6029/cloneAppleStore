import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Layout from './components/Layout'
import Page404 from './pages/Page404'
import ProtectedRoute from './auth/ProtectedRoute'
import Login from './pages/Login'
import Account from './pages/Account'

function App() {

  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      {/* Protected routes only for logged in users */}
      <Route path="/" element={< ProtectedRoute > <Layout /> </ProtectedRoute>} >
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Page404 />} />
      </Route>

    </Routes>

  )
}

export default App
