import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import BlockedPage from './pages/BlockedPage/BlockedPage'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import SignUpPage from './pages/SignUpPage/SignUpPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/BlockedPage' element={<BlockedPage />} />
        <Route path='/PageNotFound' element={<PageNotFound />} />
        <Route path='/SignUpPage' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
