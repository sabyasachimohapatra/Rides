import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectedWarpper from './pages/UserProtectedWarpper'
import UserLogout from './pages/UserLogout'
import CaptainLogout from './pages/CaptainLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/home" element={<UserProtectedWarpper><Home/></UserProtectedWarpper>} />
        <Route path="/user/logout" element={<UserProtectedWarpper><UserLogout/></UserProtectedWarpper>} />
        <Route path="/captain/logout" element={<CaptainLogout/>} />
        <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App